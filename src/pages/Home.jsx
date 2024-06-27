import supabase from '../config/supabaseClient'

console.log(supabase)

const Home = () => {
    console.log('Supabase URL:', supabaseUrl)
    console.log('Supabase Key:', supabaseKey)

    return (
        <div className='page home'>
            <h2>Home</h2>
        </div>
    )
}

export default Home
