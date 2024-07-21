import { Link, useNavigate } from "react-router-dom"

export default function About(){
    const navigate = useNavigate()
    return (
        <>
            <header className="max-w-[1000px] mx-auto px-12 [&>h1]:font-[900] [&>h1]:uppercase [&>h1]:text-2xl relative text-gray-700 dark:text-gray-200 pt-28">
                <button className="absolute left-12 top-12" onClick={()=> navigate(-1)}>
                    <span className='relative top-[1px]'>&lt;</span> back
                </button>
                <h1 className="font-bold">The Project</h1> <br />
            </header>
    
            <main className="max-w-[1000px] mx-auto px-12 [&>h2]:font-[700] [&>h2]:uppercase [&_h2]:text-2xl relative text-gray-700 dark:text-gray-200 ">
                <section >
                    <p>Welcome to the Stoic Maxims Project, a comprehensive collection of more than 1700 maxims, aphorisms, and reflections inspired by Stoic philosophy. 
                        This project aims to provide timeless wisdom to help people face life's challenges with resilience, calm, and clarity.</p>
                </section>
                <br /><br />

                <section >
                    <h2 className="font-bold">
                        What Are Stoic Maxims?
                    </h2><br />
                    <p>Stoic maxims are small pieces of wisdom derived from the works of Stoic philosophers such as Seneca, Epictetus, and Marcus Aurelius. 
                        These ancient thinkers addressed issues of daily life, ethics, and the human mind, providing practical guidance for living a virtuous and balanced life. 
                        The maxims offer insights on how to deal with adversities, control emotions, and find inner peace.</p>
                </section>

                <br /><br />
                
                <section >
                    <h2 className="font-bold">Project Features</h2>
                    <br />
                    <article >
                        <strong>Comprehensive Collection</strong>
                        <p>Our collection includes more than 1700 maxims covering a wide range of topics related to Stoic philosophy. 
                           Each maxim has been carefully selected to offer depth and clarity, promoting meaningful reflections.
                           <br /><br />
                           To make it more accessible and modern, a <strong className="dark:text-gray-100 text-black">Text-to-Speech (TTS)</strong> feature using artificial intelligence has been implemented. 
                           Now you can listen to the maxims instead of just reading them, making it easier to absorb the content anytime and anywhere.
                           <br /><br />

                           We invite readers and philosophy enthusiasts to contribute to this project. <br />
                           If you know other maxims or Stoic authors that should be included, please contact us at: &nbsp;
                           <a href="mailto:bruno.f.c@icloud.com"><span className="dark:text-white text-black underline inline-block">bruno.f.c@icloud.com</span></a>, 
                           or contribute via &nbsp;<Link to={'https://github.com/brunofranciscu/stoicmaxims'}><span className="dark:text-white text-black underline">GitHub</span></Link>.
                           I believe that wisdom grows when shared, and I look forward to expanding the collection with your help.
                    
                        </p>
                    </article>
    
                </section>
                <br /><br />
                <section className="flex gap-5">
                    <article >
                        <strong>Privacy Policy</strong><br />
                        <p>Your privacy is important to us. For more information, please refer to our &nbsp;
                            <Link to="/PrivacyPolicy"><span className="underline dark:text-white text-black">Privacy Policy</span></Link>.</p>
                    </article>
        
                    <article >
                        <h3 className="font-bold">Networks</h3>
                        <p>
                            Follow us on Instagram for updates, new maxims, and daily inspirations. Visit our profile &nbsp;
                                <Link to="https://www.instagram.com/stoicmaxims">
                                    <span className="underline dark:text-white text-black">here</span>
                                </Link>
                        .</p>
                    </article>
                </section>
            </main>
            <br /><br />
            <footer className="text-gray-700 dark:text-gray-300 text-center py-5">
                <p>&copy; 2024 Stoic Maxims Project</p>
            </footer>
  </>
    )
}
