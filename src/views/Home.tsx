import User from '../components/User';

const users = [
  {
    id: 1,
    name: 'Babul Akter',
    salary: '$700',
    isFullStack: true,
  },
  {
    id: 2,
    name: 'Mehedi Hasan',
    salary: '$500',
    isFullStack: false,
  },
];

function Home() {
  return (
    <div className=' flex justify-center items-center'>
      <User users={users} />
    </div>
  );
}

export default Home;
