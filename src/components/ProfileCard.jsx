import '../App.css'
import 'boxicons'
import myimage from '../assets/image/1000025297(Cropped).png'

function ProfileCard() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-cyan-500 to-gray-900 flex flex-col items-center justify-center p-4 font-sans text-white ">
        <section className="bg-gray-800 rounded-3xl shadow-2xl p-8 w-screen max-w-200 overflow-hidden relative shadow-glow-card">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-800 to-cyan-300 rounded-t-3xl"></div>
          <div className="relative z-10 flex justify-center mt-12 mb-6">
            <img
              className="w-37 h-37 rounded-full object-cover border-6 border-gray-800 shadow-xl ring-4 ring-cyan-300 ring-opacity-20 scale-150 mt-10"
              src={myimage}
            />
          </div>
          <h2 className="text-4xl font-bold text-white mb-2 mt-15">Zhoulo Pagalan</h2>
          <p className="text-xl text-cyan-200 font-medium mb-4">Web Developer | Graphics Designer</p>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            A passionate web developer student with a keen interest in creating dynamic and responsive web applications. I love to explore new technologies and continuously improve my skills.
          </p>
          <div className="flex justify-center space-x-4 mb-8 ">
            <a key="Github" href="https://github.com/zxshhhh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-200 transition-all duration-400 transform hover:scale-110" aria-label="Github">
              <box-icon type='logo' name='github' className='w-12 h-12 fill-current '></box-icon>
            </a>
            <a key="Facebook" href="https://www.facebook.com/This.is.zeeeee/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-200 transition-all duration-400 transform hover:scale-110" aria-label="Facebook">
              <box-icon name='facebook-circle' type='logo' className="w-12 h-12 fill-current"></box-icon>
            </a>
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-cyan-300 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-400 transform hover:scale-102 shadow-button-glow hover:text-black cursor-pointer"
            onClick={() => alert('Connect button clicked!')}
          >Connect</button>
        </section>
        <footer className='text-center text-cyan-200 mt-4'>Made with ReactJS Vite and Tailwind CSS.</footer>
      </main>
    </>
  )
}

export default ProfileCard