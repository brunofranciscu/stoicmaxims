import { useState, useEffect, useRef } from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, TelegramShareButton, LinkedinShareButton, RedditShareButton, FacebookIcon, TwitterIcon, WhatsappIcon, TelegramIcon, LinkedinIcon, RedditIcon, } from 'react-share';
import { Link } from 'react-router-dom';
import TextoAudio from './components/TextoAudio.jsx';
import AudioWaves from './components/AudioWaves.jsx';

export default function App() {
  const [frases, setFrases] = useState([]);
  const [fraseAtual, setFraseAtual] = useState({ text: '', author: '', id:'' });
  const [show, setShow] = useState(false)
  const [blob, setBlob] = useState(null)
  const [textou, setTextou] = useState(false);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const [isEnded, setIsEnded] = useState(false);
  const [playPause, setPlayPause] = useState(true);
  const api1 = 'f7333e903edf9a082fef5585c547e03b';
  const itemsMenu = new Set();
  
  

  const progress = async () => {
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/pNInz6obpgDQGcFmaJgB`, settings);
    const result = await response.blob();
    setBlob(URL.createObjectURL(result));
    setIsEnded(false)
  };

  const settings = {
    method: 'POST',
    headers: { "Accept": "audio/mpeg", "Content-Type": "application/json", "xi-api-key": api1 },
    body: JSON.stringify({
      "text": fraseAtual.text,
      "model_id": "eleven_multilingual_v1",
      "voice_settings": {
        "stability": 0.5,
        "similarity_boost": 0.5
      }
    })
  };

  const tocar = () => {
    if (!textou) {
      setTextou(true);
      setTimeout(()=>{document.querySelector('audio').play()},300)      
    } else {
      document.querySelector('audio').play();
    }
  };

  const pausar = () => document.querySelector('audio').pause()

  frases.forEach(item => itemsMenu.add(item.author))
  const menu = Array.from(itemsMenu);
  useEffect(() => {
    const carregarFrases = async () => {
      const data = await fetch('./quotes.json');
      const response = await data.json();
      setFrases(response.quotes);
      gerarNovaFrase(response.quotes);
    };
    carregarFrases();
  }, []);

  const gerarNovaFrase = (quotes) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setFraseAtual(quotes[randomIndex]);
  };  
  
  const shares = [
    { button: FacebookShareButton, icon: FacebookIcon, name: 'Facebook' },
    { button: TwitterShareButton, icon: TwitterIcon, name: 'Twitter' },
    { button: WhatsappShareButton, icon: WhatsappIcon, name: 'WhatsApp' },
    { button: TelegramShareButton, icon: TelegramIcon, name: 'Telegram' },
    { button: LinkedinShareButton, icon: LinkedinIcon, name: 'LinkedIn' },
    { button: RedditShareButton, icon: RedditIcon, name: 'Reddit' },
  ];
  
  const url = window.location.origin.toString();
  const allButtons = shares.map((share, index) => {
  const ShareButtonComponent = share.button;
  const ShareIconComponent = share.icon;
  
    return (
      <ShareButtonComponent url={`${url}/quotes/${fraseAtual.id}`} title={fraseAtual.text} key={index}
                            className='opacity-45 hover:opacity-100 duration-100 dark:invert-0 invert'>
        <ShareIconComponent size={window.innerWidth < 640 ? 25 : 35} bgStyle={{ fill: 'transparent' }} iconFillColor={'white'}/>
      </ShareButtonComponent>
    );
  });


  return (
        <div className='h-[100dvh] w-full relative grid place-content-center bg-gray-200 dark:bg-gray-800 px-5'>
          {fraseAtual.text && (
              <div className='flex flex-col gap-1 justify-center items-center animate-[opacity_.8s_linear] bg-gray-200 dark:bg-gray-800'>
                  <h1 className='font-["Poppins"] font-[500] sm:text-3xl text-2xl leading-10 max-w-[1300px] text-center text-balance text-gray-600 dark:text-gray-200'>
                    "{fraseAtual.text}"
                  </h1>
                <div className='flex sm:justify-between justify-center max-w-[1000px] w-full items-center flex-col sm:flex-row mt-5 gap-4 sm:gap-0'>
  
                  <h2 className='text-sm font-["Poppins"] sm:w-[200px] w-full text-center leading-none self-center text-gray-600 dark:text-gray-400 hover:text-gray-400 duration-100' title={`ver todas as maximas do ${fraseAtual.author}`}>
                    <Link to={`${url}/author/${fraseAtual.author}`}>- {fraseAtual.author}</Link>
                  </h2>
  
                  <div className="links flex w-auto">
                      {allButtons}
                  </div>  
                </div>
                <div className='md:-translate-y-8 translate-y-12 mx-auto'>
                  <TextoAudio setBlob={setBlob} tocar={tocar} pausar={pausar} progress={progress} blob={blob} isEnded={isEnded} setPlayPause={setPlayPause} playPause={playPause}/>
                </div>                
              </div>
          )}
              <div className="absolute top-2 grid place-items-center w-full">
                <nav>
                  <ul className='flex gap-10'> 
                    {menu.map((item,index) => 
                        <li className='text-gray-500 hover:text-gray-900 duration-100 dark:text-gray-200 dark:hover:text-gray-50 text-xs' key={index}>
                            <Link to={`${url}/author/${item}`}>{item}</Link>
                        </li> 
                    )} 
                  </ul>
                  <small className='absolute right-5 bottom-0 text-xs hidden sm:block'>
                    {show && 
                        <div className='absolute right-0 top-5 shadow bg-gray-100 rounded-lg px-5 py-2'>
                          send the author and the maxim to the w-mail: <a href='mailto:bruno.f.c@icloud.com'>bruno.f.c@icloud.com</a>
                        </div>}
                    <button onClick={()=> setShow(show ? false : true)}>Know more stoic authors?</button>
                  </small>
                </nav>
              </div>

              <AudioWaves blob={blob} duration={duration} setDuration={setDuration} audioRef={audioRef} setIsEnded={setIsEnded} setPlayPause={setPlayPause}/>
        </div>
    );
}
