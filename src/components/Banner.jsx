import logo from "/dist/vite.svg"

const mrStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral",
};

const Banner = (props) => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src={logo} alt="logo" />
            </div>
            <div className="col-7 mb-4" style={mrStyle}>{props.headerText}</div>
        </header>
    )
}

export default Banner;