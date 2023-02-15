import React from 'react';

type UserProps = {
  users: {
    id: number;
    name: string;
    salary: string;
    isFullStack: boolean;
  }[];
};

const User = ({ users }: UserProps) => {
  return (
    <div className='flex justify-around items-center w-full'>
      {users.map((user) => {
        const { id, name, salary, isFullStack } = user || {};
        return (
          <div className='bg-indigo-300 text-white p-2 rounded-md text-center' key={id}>
            <h1>{name}</h1>
            <p>{isFullStack ? `Full Stack Developer` : `Frontend Developer`}</p>
            <h3>{salary}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default User;

/* same component tai generics use kore likhle nicher moto hoto */

// import React from 'react';

// type users = {
//   id: number;
//   name: string;
//   salary: string;
//   isFullStack: boolean;
// };

// type UserProps<T> = {
//   users: T[];
// };

// const User = <T extends users>({ users }: UserProps<T>) => {
//   return (
//     <div className='flex justify-around items-center w-full'>
//       {users.map((user) => {
//         const { id, name, salary, isFullStack } = user || {};
//         return (
//           <div className='bg-indigo-300 text-white p-2 rounded-md text-center' key={id}>
//             <h1>{name}</h1>
//             <p>{isFullStack ? `Full Stack Developer` : `Frontend Developer`}</p>
//             <h3>{salary}</h3>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default User;
