import React, { useEffect, useState, useRef } from 'react';
import quotes from '../../assets/quotes.json'
import { Link, useNavigate, useParams } from 'react-router-dom';
import TextoAudio from '../../components/TextoAudio'
import AudioSpectrum from 'react-audio-spectrum';

export default function Maxim(){
  const { id } = useParams();
  const quote = quotes.quotes.find(q => q.id === parseInt(id));
  const navigate = useNavigate()
  const [blob, setBlob] = useState(null)
  const api1 = 'f7333e903edf9a082fef5585c547e03b';
  const [isEnded, setIsEnded] = useState(false);
  const [playPause, setPlayPause] = useState(true);
  const [textou, setTextou] = useState(false)
  const audioRef = useRef(null);
  const [salvas, setSalvas] = useState({});
  const saveIcon = `<svg width="25px" height="25px" viewBox="0 0 64 64"><path d="M30.051 45.6071L17.851 54.7401C17.2728 55.1729 16.5856 55.4363 15.8662 55.5008C15.1468 55.5652 14.4237 55.4282 13.7778 55.1049C13.1319 54.7817 12.5887 54.2851 12.209 53.6707C11.8293 53.0563 11.6281 52.3483 11.628 51.626V15.306C11.628 13.2423 12.4477 11.2631 13.9069 9.8037C15.3661 8.34432 17.3452 7.52431 19.409 7.52405H45.35C47.4137 7.52431 49.3929 8.34432 50.8521 9.8037C52.3112 11.2631 53.131 13.2423 53.131 15.306V51.625C53.1309 52.3473 52.9297 53.0553 52.55 53.6697C52.1703 54.2841 51.6271 54.7807 50.9812 55.1039C50.3353 55.4272 49.6122 55.5642 48.8928 55.4998C48.1734 55.4353 47.4862 55.1719 46.908 54.739L34.715 45.6071C34.0419 45.1031 33.2238 44.8308 32.383 44.8308C31.5422 44.8308 30.724 45.1031 30.051 45.6071V45.6071Z" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  const savedIcon = `<svg width="25px" height="25px" viewBox="0 0 64 64"><path d="M45.35 6.1709H19.41C16.8178 6.17618 14.3333 7.20827 12.5003 9.04123C10.6674 10.8742 9.63528 13.3587 9.62999 15.9509V52.2709C9.6272 53.3655 9.92973 54.4392 10.5036 55.3713C11.0775 56.3034 11.9 57.057 12.8787 57.5474C13.8573 58.0377 14.9533 58.2454 16.0435 58.1471C17.1337 58.0488 18.1748 57.6484 19.05 56.9909L31.25 47.8509C31.5783 47.6074 31.9762 47.4759 32.385 47.4759C32.7938 47.4759 33.1917 47.6074 33.52 47.8509L45.71 56.9809C46.5842 57.6387 47.6246 58.0397 48.7142 58.1387C49.8038 58.2378 50.8994 58.0311 51.8779 57.5418C52.8565 57.0525 53.6793 56.3001 54.2537 55.3689C54.8282 54.4378 55.1317 53.365 55.13 52.2709V15.9509C55.1247 13.3587 54.0926 10.8742 52.2597 9.04123C50.4267 7.20827 47.9422 6.17618 45.35 6.1709Z" stroke-width="4"/></svg>`
  const [viewSaved, setViewSaved] = useState(false)
  const remover = `<svg fill="#000000" width="15px" height="15px" viewBox="0 0 408.483 408.483"> <g> <g> <path d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316 H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293 c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329 c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355 c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356 c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z"/> <path d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916 c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z"/> </g> </g> </svg>`


  if (!quote ) {
    return (
           <div className='h-[100dvh] w-full relative grid place-content-center bg-gray-200 dark:bg-gray-800 px-5'>
             <button onClick={() => navigate('/')} className='dark:text-gray-400 text-gray-900 font-["Poppins"] font-[300] hover:text-gray-400 duration-100 absolute bottom-2 left-3'>
                <span className='relative top-[1px]'>&lt;</span> back
              </button>
              
              <h3 className='font-["Poppins"] font-[500] sm:text-4xl text-2xl leading-10 max-w-[1300px] text-center text-balance text-gray-600 dark:text-gray-300'>
                Not Found.
              </h3>
            </div>
        )
    }
  
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.onended = () => {
            setIsEnded(true);
            setPlayPause(true);
            };
        }
    }, [blob, setIsEnded]);

    const progress = async () => {
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/pNInz6obpgDQGcFmaJgB`, settings);
      const result = await response.blob();
      setBlob(URL.createObjectURL(result));
      setIsEnded(false)
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
    const settings = {
      method: 'POST',
      headers: { "Accept": "audio/mpeg", "Content-Type": "application/json", "xi-api-key": api1 },
      body: JSON.stringify({
        "text": quote.text,
        "model_id": "eleven_multilingual_v1",
        "voice_settings": {
          "stability": 0.5,
          "similarity_boost": 0.5
        }
      })
    };
    const shareUrl = window.location.origin.toString();

    useEffect(() => {
        const salvadas = JSON.parse(localStorage.getItem('salvas')) || {};
        setSalvas(salvadas);
    }, []);

    const salvar = id => {
        setSalvas(prevSalvas => {
            const updtSalvas = { ...prevSalvas, [id]: !prevSalvas[id] };
            localStorage.setItem('salvas', JSON.stringify(updtSalvas));
            return updtSalvas;
        });
    };

    return (
      <div className='h-[100dvh] w-full relative grid place-content-center bg-gray-200 dark:bg-gray-800 px-5'>

        <button dangerouslySetInnerHTML={{__html:savedIcon}} title="ver salvos" style={{left:viewSaved ? window.innerWidth < 770 ? '90%' :'410px' : '20px'}}
                className='stroke-gray-500 hover:brightness-150 fill-gray-500 duration-75 absolute top-5 left-5 z-[999999]' 
                onClick={()=> setViewSaved(prevViewSaved => !prevViewSaved)}>
        </button>

          {viewSaved &&
            <ul className='fixed left-0 md:w-[450px] w-full bg-gray-200 dark:bg-gray-800/95 shadow-2xl h-full z-[999998] p-12 overflow-y-auto flex flex-col gap-8 salvos backdrop-blur-sm top-0'>
              {Object.keys(salvas).filter(key => salvas[key]).length < 1 && <span className='text-gray-700 dark:text-gray-300'>Nada encontrado.</span>}
              {
                Object.entries(salvas).filter(([key, value]) => value).map(([key]) => (
                  quotes.quotes.map(frase => (
                    frase.id === Number(key) &&
                    (<li key={key} className='text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 duration-100 flex gap-2 items-center'>
                      <button dangerouslySetInnerHTML={{ __html: remover }} className='stroke-gray-500 hover:brightness-150 fill-gray-500 duration-75 z-[999999] [scale:.8]'
                        onClick={() => salvar(frase.id)}>
                      </button>
                      <div className='flex flex-col'>
                        <small className='text-[.6rem] block leading-none text-gray-400/50'> - {frase.author}</small>
                        <span onClick={() => navigate('/maxim/' + key)}>"{frase.text}"</span>
                      </div>
                    </li>)
                  ))
                ))
              }
            </ul>
        }
        <h1 className='font-["Poppins"] font-[500] sm:text-4xl text-2xl leading-10 max-w-[1300px] text-center text-balance text-gray-600 dark:text-gray-300'>"{quote.text}"</h1>
        
        <div className="flex py-5 justify-between flex-col md:flex-row items-center gap-5">
          <h2 className='text-sm font-["Poppins"] sm:w-[200px] w-full text-center leading-none self-center text-gray-600 dark:text-gray-400 hover:font-bold duration-100' title={`ver todas as maximas do ${quote.author}`}>
            <Link to={`${shareUrl}/author/${quote.author}`}>- {quote.author}</Link>
          </h2>
          <TextoAudio  setBlob={setBlob} tocar={tocar} pausar={pausar} progress={progress} blob={blob} isEnded={isEnded} setPlayPause={setPlayPause} playPause={playPause} />
          {!salvas[quote.id] && <button dangerouslySetInnerHTML={{__html:saveIcon}} title="salvar máxima" className='stroke-gray-500 hover:fill-gray-500 fill-none duration-100' onClick={()=> salvar(quote.id)}></button>}
          {salvas[quote.id] && <button dangerouslySetInnerHTML={{__html:savedIcon}} title="remover dos salvos" className='stroke-gray-500 hover:fill-gray-500 fill-gray-500 duration-100' onClick={()=> salvar(quote.id)}></button>}
        </div>
  
        <button onClick={() => navigate('/')} className='dark:text-gray-400 text-gray-900 font-["Poppins"] font-[300] hover:text-gray-400 duration-100 absolute bottom-2 left-3'>
          <span className='relative top-[1px]'>&lt;</span> back
        </button>
  
        {blob && 
            <>
              <audio src={blob} id="audio-element" ref={audioRef}></audio>
                <div className="absolute top-0 w-full left-0 pointer-events-none z-50 [&>canvas]:w-full [&>canvas]:h-[100dvh] [filter:drop-shadow(0_0_30px_#e5e7eb66)] opacity-[.2] mix-blend-hard-light [&>canvas]:invert [&>canvas]:dark:invert-0">
                  <AudioSpectrum
                    audioId={'audio-element'} id="audio-canvas"
                    meterWidth={1} meterCount={512} capHeight={0} capColor="transparent" height={400} width={1000}
                    meterColor={[
                      { stop: 0, color: '#fff' },
                      { stop: 0.5, color: '#fff' },
                      { stop: 1, color: '#fff' }
                    ]}
                    gap={4}
                  />
                </div>
            </>
        }
      </div>
    );
};
