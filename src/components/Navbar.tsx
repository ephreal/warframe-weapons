function Navbar() {
    return (
        <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
                <a className="nav-link nav-color active" data-bs-toggle="tab" data-bs-target="#kuva" role="tab" aria-controls="kuva" aria-selected="true" href="#kuva">Kuva</a>
            </li>
            <li className="nav-item">
                <a className="nav-link nav-color" data-bs-toggle="tab" href="#tenet">Tenet</a>
            </li>
            <li className="nav-item">
                <a className="nav-link nav-color" data-bs-toggle="tab" href="#progenitors">Progenitors</a>
            </li>
        </ul>
    );
}

export default Navbar;