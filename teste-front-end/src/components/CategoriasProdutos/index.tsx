import { NavLink } from 'react-router-dom';
import './styles.scss'

export default function CategoriasProdutos() {

    return (
        <>
            <nav className='ec-container'>
                <div >
                    <ul>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `ec-relate-products-link ${isActive ? 'active' : ''}`
                            }
                        >
                            CELULAR
                        </NavLink>

                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                `ec-relate-products-link ${isActive ? 'active' : ''}`
                            }
                        >
                            ACESSÓRIOS
                        </NavLink>

                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                `ec-relate-products-link ${isActive ? 'active' : ''}`
                            }
                        >
                            TABLETS
                        </NavLink>

                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                `ec-relate-products-link ${isActive ? 'active' : ''}`
                            }
                        >
                            NOTEBOOKS
                        </NavLink>

                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                `ec-relate-products-link ${isActive ? 'active' : ''}`
                            }
                        >
                            TVS
                        </NavLink>

                        <NavLink
                            to="/produtos"
                            className={({ isActive }) =>
                                `ec-relate-products-link ${isActive ? 'active' : ''}`
                            }
                        >
                            VER TODOS
                        </NavLink>


                    </ul>
                </div>
            </nav>
        </>

    );

}