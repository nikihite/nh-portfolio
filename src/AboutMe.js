import './AboutMe.css';
export default function AboutMe() {
  return (
    <>
      <div>
        <h1 className='name'>About</h1>
        <h2 className='intro'>I&#39;m Niki. I have a passion for learning, community, and modular clean code.</h2>
        <p className='about-paragraph'>I am a creative, problem solver who loves to develop innovative solutions that leave a positive impact on the world. With previous experience in customer service, I have proven my ability to deliver results. I love being a Software Engineer because I am given the unique opportunity to apply my logical thinking, technical and interpersonal skills, to make an impact on people around the world. I am always eager to learn new things in order to keep growing as a Software Engineer. I place emphasis on ensuring the user is provided with the best experience possible and believe strongly in inclusion, equity, accuracy, and convenience.</p>
      </div>
      <div>
        <img className='niki-pic' src='../niki-pic.jpeg' />
      </div>
    </>
  );
}
