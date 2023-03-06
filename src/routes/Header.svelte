<script>
    import { page } from "$app/stores";
    import {Nav, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from "sveltestrap";

    let isOpen = false;
</script>

<Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">Acadash</NavbarBrand>
    <NavbarToggler title="Menu" on:click={() => {isOpen = !isOpen}} />
    <Collapse {isOpen} navbar expand="md">
        <Nav class="ms-auto" navbar>
            <NavItem>
                <NavLink href="/test">Test 1</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/test2">Test 2</NavLink>
            </NavItem>
        </Nav>
    </Collapse>
</Navbar>
