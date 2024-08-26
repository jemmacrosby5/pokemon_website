import github from '../assets/github-logo.svg'
const Footer: React.FC = () => {

    return (
        <>
            <div className="bg-custom-gray p-6 justify-center">
                <div className='items-center mx-auto'>
                    <p className="text-white">literally no rights reserved</p>
                    <div className='flex flex-row gap-4' >
                        <a className='flex flex-row gap-2 items-center' href="https://github.com/jemmacrosby5/pokemon_website">
                            <img src={github} className='h-8' />
                            <p className="text-white">Frontend: jemmacrosby5</p>
                        </a>
                        <a className='flex flex-row gap-2 items-center'>
                            <img src={github} className='h-8' />
                            <p className="text-white">Data pipeline: davidbates</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer