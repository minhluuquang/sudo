const style = {
  height: 80,
  width: '100%',
};

const logoStyle = {
  width: 200,
  height: 40,
};

const BottomBar = (props) => (
  <div
    style={style}
    className="bg-secondary absolute inset-x-0 bottom-0 flex justify-between items-center"
  >
    <div className="mx-6 flex-grow">{props.children}</div>
    <div style={logoStyle} className="mx-6">
      <img className="h-full w-full select-none" src="df_logo.svg" />
    </div>
  </div>
);

export default BottomBar;
