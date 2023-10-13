# Vacay Homes
A simple clone of Airbnb, a vacation property rental service, which allows users to reserve properties or host their own.
Check out the live website at [vacay-homes.vercel.app](https://vacay-homes.vercel.app/)

[//]: (![Vacay Homes screen shot](/path-to-screenshot.png))

## Technologies
### Front-end
* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Tailwind CSS][TailwindCSS.com]][Tailwind-url]
* [![Prisma][Prisma.io]][Prisma-url]
* [![MongoDB][MongoDB.com]][MongoDB-url]

### Back-end

## Installation
The steps below will describe how to install the app in your local environment
#### 1. Clone or fork this repository and make sure you have the files locally
```sh
git clone INSERT GIT URL
```

#### 2. Navigate to the project folder and install the node modules through a package manager. 
```sh
cd vacay-homes

npm install
```

#### 3. Create an .env file and have the following variables:
```
DATABASE_URL=
NEXTAUTH_SECRET=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

ADMIN_USER_ID=
```

How to obtain info for each variable:

DATABASE_URL
* This database url is obtained after creating a MongoDB cluster

NEXTAUTH_SECRET
* Any combination of letters and numbers used in authentication by Next.js

GITHUB_ID
GITHUB_SECRET
* These values are obtained when setting up the Github login feature for your application through your Github account.

GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
* These values are obtained when setting up the Google login feature for your application through your Google dashboard.

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
* This value is available in your Cloudinary account and is used to host images uploaded onto the website.

ADMIN_USER_ID
* Because this project is publicly hosted on Vercel, I restricted the ability of users to create reservations and upload images. Since there was no way to monitor what was posted, only the admin user is allowed to create reservations. 
To give yourself this access, go to your MongoDB database after you have signed up for an account and copy your ID into this variable in the .env file.

#### 4. Set up Prisma
Prisma is a server-side library that assists in reading and writing data to the database (in this case MongoDB)
```sh
npx prisma db push
```

#### 5. Build and run the application
```sh
npm run build

npm run start
```
The application should be deployed on an available localhost server. Navigate to your browser and visit the corresponding server (e.g. localhost:3000).

## License
Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- LINKS & IMAGES -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[TailwindCSS.com]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Prisma.io]: https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
[MongoDB.com]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/


