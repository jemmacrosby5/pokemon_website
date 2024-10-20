import github from '../assets/github-logo.svg'
const Footer: React.FC = () => {

    return (
        <>
            <div className="bg-custom-red p-6 flex items-center justify-center">
                <div className='items-center mx-auto flex flex-col gap-2'>
                    <p className="text-white text-center">All data shown retrieved from the <a href='https://pokemontcg.io' className='underline'>Pokemon TGC API</a> and the <a className="underline" href='https://frankfurter.dev'>Frankfurter API</a></p>
                    <p className="text-white text-center">This website is not produced, endorsed, supported or affiliated with the Pokemon Company</p>
                    <p className="text-white text-center">Literally no rights reserved</p>
                    <div className='flex flex-row gap-4' >
                        <a className='flex flex-row gap-2 items-center' href="https://github.com/jemmacrosby5/pokemon_website">
                            <img src={github} className='h-8' />
                            <p className="text-white">Frontend: jemmacrosby5</p>
                        </a>
                        <a className='flex flex-row gap-2 items-center' href="https://github.com/davebat35">
                            <img src={github} className='h-8' />
                            <p className="text-white">Data pipeline: davebat35</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer