import React from 'react';
import UserAvatar from './user_avatar';
import MenuItem from './menu_item';
function header() {
    return (
        <header className="navigation_menu">
            <UserAvatar />
            <MenuItem />
        </header>

    ); 
    
  }
  
export default header;
