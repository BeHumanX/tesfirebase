import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownHeader,
  CDropdownDivider,
  CAvatar,
} from "@coreui/react";

const HeaderDropdown = ({ user, logOut }) => {
  if (!user) return null;
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle
        placement="bottom-end"
        className="py-0 pe-0"
        caret={false}
      >
        {user.name}
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">
          {user?.name}
        </CDropdownHeader>
        <CDropdownItem href="#">
          <i className="cil-user" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#">
          <i className="cil-settings" />
          Settings
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={logOut}>
          <i className="cil-lock-locked" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default HeaderDropdown;
