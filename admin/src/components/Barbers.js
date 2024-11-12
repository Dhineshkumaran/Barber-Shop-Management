import { useEffect, useState } from 'react';

function Barber() {
    const [barbers, setBarbers] = useState([]);

    const changeStatus = async (id, currentAvailability) => {
        try {
            const response = await fetch(`http://localhost:5000/updateStatus/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ isAvailable: !currentAvailability })  // Toggle availability
            });
            if (response.ok) {
                setBarbers(prevBarbers =>
                    prevBarbers.map(barber =>
                        barber._id === id ? { ...barber, isAvailable: !currentAvailability } : barber
                    )
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        async function getBarbers() {
            try {
                const response = await fetch("http://localhost:5000/getBarbers");
                const data = await response.json();
                setBarbers(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        getBarbers();
    }, []);

    return (
        <div>
            <div className="card-container" style={{ justifyContent: "center", display: "flex" }}>
                {barbers.map((barber) => (
                    <div key={barber._id} className="card" style={{ alignItems: "center", justifyContent: "center" }}>
                        <h3>{barber.Name}</h3>
                        <p><strong>Services offered:</strong> {barber.Services.join(", ")}</p>
                        <p><strong>Availability:</strong> {barber.isAvailable ? "Available" : "Not Available"}</p>
                        <button
                            className="update-status-button"
                            onClick={() => changeStatus(barber._id, barber.isAvailable)}  // Pass the current availability status
                        >
                            Update status
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Barber;
