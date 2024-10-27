import PropTypes from 'prop-types';


const Player = ({ player, onSelect }) => {
    const { name, image, country, role, battingStyle, rating, price } = player;

    return (

        <div className='border border-gray-300 p-5 rounded-xl'>
            <img className='rounded-xl mb-3 w-full h-80 object-cover' src={image} alt="" />
            <div className='flex gap-3 justify-start'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

                <h2 className="text-2xl font-semibold mb-6">{name}</h2>
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
</svg>

                    <p className='text-xl font-semibold underline text-sky-700'>{country}</p>
                </div>
                <div>
                    <p className='mb-3 text-xl font-semibold text-red-600'>{role}</p>
                </div>
            </div>
            <hr />
            <div className='my-5 flex justify-between'>
                <p className='font-bold text-xl'>Rating: </p>
                <p className='text-purple-500 font-semibold text-xl'>{rating}</p>
            </div>
            <div className='my-3 flex justify-between'>
                <p className='font-bold text-xl'>Batting Style</p>
                <p className='text-lg text-teal-500 font-semibold'>{battingStyle}</p>
                
            </div>
            <div className='my-3 flex justify-between items-center'>
                <p className='font-bold text-xl'>Price: <samp className='text-orange-500 text-xl '>${price}</samp> </p>
                
                <button onClick={() => onSelect(player)} className='btn text-gray-00 border-2 border-gray-400 hover:bg-gradient-to-r from-pink-400 to-yellow-300 hover:border-none hover:text-white text-xl'>Choose Player</button>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default Player;
