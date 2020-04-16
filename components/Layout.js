import BottomBar from './BottomBar';

const style = {
  backgroundImage:
    'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url("/background.jpg")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

const Layout = (props) => (
  <div style={style} className="relative w-screen h-screen">
    <div>
      <img src="/logo.png" className="mx-auto p-6" />
    </div>
    <BottomBar>{props.children}</BottomBar>
  </div>
);

export default Layout;
