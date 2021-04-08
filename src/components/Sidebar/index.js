import {SidebarContainer, Icon, CloseIcon } from './SidebarElement'

const sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <Sidebarwrapper>
        <SidebarMenu>
            <SidebarLink to="/about"> about</SidebarLink>
        </SidebarMenu>
            </Sidebarwrapper>
        </SidebarContainer>
    )
}

export default sidebar
