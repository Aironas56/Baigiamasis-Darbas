import React, {useState} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {NavLink, Link as RouterLink} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import  {Button} from "@material-ui/core";
import '../Header/header.css'
import {removeUserData,removeJwt} from "../../store/slices/userSlice";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import WorkOutlineSharpIcon from '@material-ui/icons/WorkOutlineSharp';
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "./Switcher";
import useUser from '../../hooks/user'

export default function ButtonAppBar() {

    const user = useUser()
    const dispatch = useDispatch()
    const { t } = useTranslation();

    const logout = () => {
        dispatch(removeJwt())
        dispatch(removeUserData())
    }

    return (

        <div className='root'>
            <AppBar position="static">
                <Toolbar>
                    <WorkOutlineSharpIcon/>

                    <Typography variant="h5" className='title'>
                        Jobs
                    </Typography>
                    <nav className='nav-text'>
                        {user?.roles.includes('ADMIN') && (

                            <Link  component={NavLink} to="/createAd"> {t('job')} </Link>
                        )
                        }
                        <Link className="nav-text" component={NavLink} to ="/">{t('main')}</Link>
                        <Link className="nav-text" component={NavLink} to ="/register">{t('signUp')}</Link>

                        {
                            !!user ? (
                                <>
                                    <span>{`${user.username}`}</span>
                                    <Link className="nav-text" component={Button} color="secondary" onClick={logout}><ExitToAppIcon/></Link>
                                </>
                            ) : (
                                <Link className="nav-text-login" component={NavLink} to="/login">{t('login')}</Link>
                            )
                        }
                        <LanguageSwitcher/>
                    </nav>

                </Toolbar>
            </AppBar>
        </div>
    );
}
