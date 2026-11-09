import Box from "../components/layout/Box";
import Container from "../components/layout/Container";
import Wrapper from "../components/layout/Wrapper";
import Logo from "../assets/images/Logo santas pastas.jpeg";

function Header() {
  return (
    <Container className="bg-gray-800  h-screen flex items-center  justify-center ">
      <Wrapper className="">
        <Box className="bg-gray-600/80 h-[600px] w-[400px] flex flex-col gap-4  rounded-xl text-center p-8 ">
          <div className="flex items-center justify-center ">
            <img
              src={Logo}
              className="rounded-full w-40 items-center justify-center "
            />
          </div>

          <h1 className="text-white font-bold ">Santas pastas</h1>
          <p>Argentina, Junin Bs As</p>
          <p>Frontend developer and artisanal pasta </p>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10  bg-gray-500 rounded-lg items-center justify-center flex cursor-pointer bg-gradient-to-r hover:from-pink-500 hover:to-yellow-300 transition-all duration-300 "
          >
            Instagram
          </a>
          <a
            href="https://www.frontendmentor.io/profile/baltadevv-droid"
            target="_ blank"
            rel="noopener noreferrer"
            className="h-10 bg-gray-500 rounded-lg items-center justify-center flex cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:to-cyan-300 transition-all duration-300"
          >
            Frontend Mentor
          </a>
          <a
            href="https://github.com/baltadevv-droid"
            target="_ blank"
            rel="noopener noreferrer"
            className="h-10 bg-gray-500 rounded-lg items-center justify-center flex cursor-pointer bg-gradient-to-r hover:from-black  hover:to-gray-300 transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.facebook.com/"
            target="_ blank"
            rel="noopener norreferrer"
            className="h-10  bg-gray-500 rounded-lg items-center justify-center flex cursor-pointer bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
          >
            Facebook
          </a>
        </Box>
      </Wrapper>
    </Container>
  );
}

export default Header;
