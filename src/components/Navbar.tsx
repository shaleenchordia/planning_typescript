import React from 'react';
import { Link } from 'react-router-dom';
import { Map, User, Menu } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
    return (
        <nav style={{
            height: 'var(--header-height)',
            borderBottom: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-surface)',
            position: 'sticky',
            top: 0,
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            padding: '0 var(--spacing-md)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--color-primary)' }}>
                    <Map size={24} />
                    <span>TripPlanner</span>
                </Link>

                <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'center' }} className="desktop-menu">
                    <Link to="/discover">Discover</Link>
                    <Link to="/trips">Trips</Link>
                    <Link to="/planner">Plan a Trip</Link>
                </div>

                <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
                    <Button variant="ghost" size="sm" style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0 }}>
                        <User size={20} />
                    </Button>
                    <Button
                        variant="primary"
                        size="md"
                        style={{
                            borderRadius: '2rem',
                            paddingLeft: '1.5rem',
                            paddingRight: '1.5rem',
                            boxShadow: '0 4px 14px 0 rgba(15, 76, 117, 0.39)',
                            fontWeight: 600
                        }}
                    >
                        Sign In
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
