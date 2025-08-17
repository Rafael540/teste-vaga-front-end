import { NavLink } from 'react-router-dom';
import './styles.scss'

export default function CategoriasProdutos() {

    return (
        <>
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
                        to="/acessorios"
                        className={({ isActive }) =>
                            `ec-relate-products-link ${isActive ? 'active' : ''}`
                        }
                    >
                        ACESSÓRIOS
                    </NavLink>

                    <NavLink
                        to="/tablets"
                        className={({ isActive }) =>
                            `ec-relate-products-link ${isActive ? 'active' : ''}`
                        }
                    >
                        TABLETS
                    </NavLink>

                    <NavLink
                        to="/notebooks"
                        className={({ isActive }) =>
                            `ec-relate-products-link ${isActive ? 'active' : ''}`
                        }
                    >
                        NOTEBOOKS
                    </NavLink>

                    <NavLink
                        to="/tvs"
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
        </>

    );

}