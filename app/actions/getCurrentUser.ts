import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });
    return currentUser
      ? {
          ...currentUser,
          createdAt: currentUser.createdAt.toISOString(),
          updatedAt: currentUser.updatedAt.toISOString(),
          emailVerified: currentUser.emailVerified?.toISOString() || null,
        }
      : null;
  } catch (error: any) {
    // This is not api call, rather we are directly communicating
    // with database via server component, so we don't want to throw error
    return null;
  }
}
