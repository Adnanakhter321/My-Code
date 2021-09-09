import PropTypes from 'prop-types';

export default function Greeting(prop) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${ prop.mode === 'light' ? 'black' : prop.mode === 'dark' ? 'white' : 'warning'}`} href="/">{prop.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`navbar-brand text-${  prop.mode === 'light' ? 'black' : prop.mode === 'dark' ? 'white' : 'warning'}`} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className={`navbar-brand text-${ prop.mode === 'light' ? 'black' : prop.mode === 'dark' ? 'white' : 'warning'}`} href="/">{prop.hd}</a>
              </li>
            </ul>
            <form className="d-flex">
              <div className="form-check form-switch">
                <input className="form-check-input" onClick={prop.yellowdark} type="checkbox" id="flexSwitchCheckChecked" />
                <label className ={`form-check-label text-${prop.mode === 'light' ? 'dark' : 'white'}`} htmlFor="flexSwitchCheckChecked">Enable Yellow Dark Mode</label>
              </div>

              <div className="form-check form-switch mx-2" >
                <input className="form-check-input" onClick={prop.theme} type="checkbox" id="flexSwitchCheckChecked" />
                <label className ={`form-check-label text-${prop.mode === 'light' ? 'dark' : 'white'}`} htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
              </div>
            </form>
          </div>
        </div>
      </nav>

    </>

  );
}
Greeting.propTypes = {
  title: PropTypes.string,
  hd: PropTypes.string
}

Greeting.defaultProps = {
  title: 'Stranger',
  hd: "About"
};