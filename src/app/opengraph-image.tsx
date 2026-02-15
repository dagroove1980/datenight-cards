import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'DateNight Cards — Spark Romance & Connection';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'radial-gradient(circle at center, #881337 0%, #4c0519 100%)', // Romantic burgundy
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    fontFamily: 'serif',
                }}
            >
                {/* Subtle pattern overlay */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        opacity: 0.1,
                        backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />

                <div
                    style={{
                        border: '2px solid rgba(255,255,255,0.2)',
                        padding: '60px 100px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        background: 'rgba(0,0,0,0.2)',
                        backdropFilter: 'blur(4px)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    }}
                >
                    <div style={{ fontSize: 60, marginBottom: 10 }}>❤️</div>
                    <div
                        style={{
                            fontSize: 80,
                            color: '#ffe4e6', // Rose water
                            marginBottom: 10,
                            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                            fontStyle: 'italic',
                        }}
                    >
                        DateNight
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            color: '#fda4af', // Rose light
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            fontWeight: 400,
                        }}
                    >
                        Spark Romance
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
