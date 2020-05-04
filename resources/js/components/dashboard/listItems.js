import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { People, WorkOutline, AccountBox, PlaylistAddCheck, ExitToApp } from '@material-ui/icons';
import { logout } from '../../services/api';


export const managerListItems = (
  <div>
    <Link to="/manager" className='link'>
      <ListItem button>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText className='list__item list__item--primary' primary="Пользователи" />
      </ListItem>
    </Link>

    <Link to='/manager/projects' className='link'>
      <ListItem button>
        <ListItemIcon>
          <WorkOutline />
        </ListItemIcon>
        <ListItemText secondary="Проекты" />
      </ListItem>
    </Link>

    <Link to='/' className='link'>
      <ListItem button>
        <ListItemIcon>
          <PlaylistAddCheck />
        </ListItemIcon>
        <ListItemText secondary="Тикеты" />
      </ListItem>
    </Link>
  </div>
);

export const userListItems = (
  <div>
    <Link to="/users" className='link'>
      <ListItem button>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText className='list__item list__item--primary' primary="Пользователи" />
      </ListItem>
    </Link>

    <Link to='/projects' className='link'>
      <ListItem button>
        <ListItemIcon>
          <WorkOutline />
        </ListItemIcon>
        <ListItemText secondary="Проекты" />
      </ListItem>
    </Link>

    <Link to='/tickets' className='link'>
      <ListItem button>
        <ListItemIcon>
          <PlaylistAddCheck />
        </ListItemIcon>
        <ListItemText secondary="Тикеты" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <Link to='/profile' className='link'>
        <ListItemIcon>
          <AccountBox/>
        </ListItemIcon>
        <ListItemText secondary="Профиль" />
      </Link>
    </ListItem>
    <ListItem button onClick={() => logout()}>
        <ListItemIcon>
          <ExitToApp/>
        </ListItemIcon>
        <ListItemText secondary="Выйти" />
    </ListItem>
  </div>
);
