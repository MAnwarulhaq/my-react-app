import { useEffect, useState } from 'react'

const FetchandDisplayData = () => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const usersPerPage = 10

    useEffect(() => {
        getUsers()
    }, [])

    async function getUsers() {
        const url = "https://dummyjson.com/users"
        const response = await fetch(url)
        const data = await response.json()
        setUsers(data.users)
    }

    const startIndex = (page - 1) * usersPerPage
    const endIndex = startIndex + usersPerPage
    const currentUsers = users.slice(startIndex, endIndex)

    const handleNext = () => {
        if (page < Math.ceil(users.length / usersPerPage)) {
            setPage(page + 1)
        }
    }

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    return (
        <div style={{ padding: '30px', fontFamily: 'Segoe UI, sans-serif' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>User Table</h1>
            <div style={{ overflowX: 'auto', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    minWidth: '600px',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    overflow: 'hidden'
                }}>
                    <thead style={{ backgroundColor: '#4CAF50', color: 'white' }}>
                        <tr>
                            <th style={thStyle}>ID</th>
                            <th style={thStyle}>Full Name</th>
                            <th style={thStyle}>Email</th>
                            <th style={thStyle}>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentUsers.map((user, index) => (
                                <tr key={user.id} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff' }}>
                                    <td style={tdStyle}>{user.id}</td>
                                    <td style={tdStyle}>{user.firstName} {user.lastName}</td>
                                    <td style={tdStyle}>{user.email}</td>
                                    <td style={tdStyle}>{user.phone}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div style={{
                marginTop: '25px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '15px'
            }}>
                <button onClick={handlePrevious} disabled={page === 1} style={buttonStyle}>Previous</button>
                <span style={{ fontSize: '16px' }}>Page {page}</span>
                <button onClick={handleNext} disabled={page >= Math.ceil(users.length / usersPerPage)} style={buttonStyle}>Next</button>
            </div>
        </div>
    )
}

// CSS Styles
const thStyle = {
    padding: '12px 15px',
    textAlign: 'left',
    fontWeight: '600',
    borderBottom: '2px solid #ddd'
}

const tdStyle = {
    padding: '12px 15px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
    color: '#333'
}

const buttonStyle = {
    padding: '10px 18px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '14px',
    cursor: 'pointer',
    transition: '0.3s ease'
}

export default FetchandDisplayData
