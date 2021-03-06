import { FaTwitter } from 'react-icons/fa';

function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is made using React.js, Tailwind CSS and Daisy UI.
        <strong>
          <a href="https://0xgeet.xyz">Check out my website here.</a>
        </strong>
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Follow me on:
        <a className="text-white" href="https://twitter.com/ge__et">
          <FaTwitter />
        </a>
      </p>
    </>
  );
}

export default About;
