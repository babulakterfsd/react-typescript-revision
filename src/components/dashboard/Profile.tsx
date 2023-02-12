import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

function Profile() {
    const { id } = useParams();
    return (
        <div>
            <p>This is the profile component</p>
            <div className="flex justify-between items-center w-52 ml-20 ">
                <Link
                    to="1"
                    className="bg-indigo-300 text-indigo-600 py-1 px-2 rounded-md text-center"
                >
                    1
                </Link>
                <Link
                    to="2"
                    className="bg-indigo-300 text-indigo-600 py-1 px-2 rounded-md text-center"
                >
                    2
                </Link>
                <Link
                    to="3"
                    className="bg-indigo-300 text-indigo-600 py-1 px-2 rounded-md text-center"
                >
                    3
                </Link>
            </div>
            {id && (
                <div className="mt-4 ml-4 text-indigo-300 bg-indigo-600 py-1 px-2 rounded-md text-center font-semibold">
                    <Outlet />
                </div>
            )}
        </div>
    );
}

export default Profile;
