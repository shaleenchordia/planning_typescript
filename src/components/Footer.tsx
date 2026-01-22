import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', padding: 'var(--spacing-xl) 0' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                    <div>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>TripPlanner</h3>
                        <p style={{ color: 'var(--color-text-secondary)', maxWidth: '300px' }}>
                            Your ultimate companion for discovering and planning the perfect vacation.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1rem' }}>Company</h4>
                        <ul style={{ listStyle: 'none', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li style={{ cursor: 'pointer' }}>About Us</li>
                            <li style={{ color: '#FFD700', fontWeight: 600, textShadow: '0 0 5px rgba(255, 215, 0, 0.3)', cursor: 'pointer' }}>Careers</li>
                            <li style={{ cursor: 'pointer' }}>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1rem' }}>Follow Us</h4>
                        <div style={{ display: 'flex', gap: '1rem', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>
                            <Facebook size={20} />
                            <Twitter size={20} />
                            <Instagram size={20} />
                            <Mail size={20} />
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '2rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem', textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                    © 2026 Vacation Trip Planner. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
