import Link from 'next/link';

const Home = () => {
  const colors = ['pink', 'red', 'lavender', 'blue', 'green'];

  return (
    <main>
      <div>Welcome! Choose a color:</div>
      <ul>
        {colors.map((color) => (
          <li>
            <Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
