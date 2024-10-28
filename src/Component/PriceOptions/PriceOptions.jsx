import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 20,
            "currency": "USD",
            "duration": "Monthly",
            "features": [
                "Access to gym equipment",
                "Locker included",
                "1 free personal training session",
                "Open gym access during staffed hours",
                "Free Wi-Fi",
                "Access to shower facilities",
                "Discount on first protein shake purchase"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 50,
            "currency": "USD",
            "duration": "Monthly",
            "features": [
                "Access to gym equipment",
                "Locker included",
                "3 free personal training sessions",
                "Access to group fitness classes",
                "Open gym access during all hours",
                "Free Wi-Fi and charging stations",
                "Access to shower and sauna facilities",
                "1 complimentary fitness assessment",
                "10% discount on in-house supplements"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 80,
            "currency": "USD",
            "duration": "Monthly",
            "features": [
                "Access to gym equipment",
                "Locker included",
                "Unlimited personal training sessions",
                "Access to all group fitness classes",
                "24/7 gym access",
                "Free premium Wi-Fi",
                "Sauna and spa access",
                "Nutrition consultation",
                "20% discount on all gym products",
                "Complimentary towel service",
                "Priority booking for group classes"
            ]
        },
        {
            "id": 4,
            "name": "Annual Membership",
            "price": 500,
            "currency": "USD",
            "duration": "Yearly",
            "features": [
                "Access to gym equipment",
                "Locker included",
                "12 personal training sessions",
                "Access to group fitness classes",
                "1 free fitness assessment per quarter",
               
                "Access to private locker room",
                "Exclusive wellness seminars",
                "Monthly nutrition",
                "2 guest passes per month"
            ]
        },
        {
            "id": 5,
            "name": "Family Plan",
            "price": 150,
            "currency": "USD",
            "duration": "Monthly",
            "features": [
               
                "Lockers included",
                "Access to group fitness classes",
                "Monthly family fitness assessment",
                "Kid-friendly fitness classes",
                "Access to indoor swimming pool",
                "Dedicated family locker room",
                "Discount on children’s sports gear",
                "Access to outdoor sports facilities",
                "Seasonal family wellness events"
            ]
        }
    ];
    
    return (
        < div className="m-12">
            < h2 className="text-5xl mb-5 font-bold">Best Price Option</h2>
            < div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 '>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option} />)
            }
            </div>
           
        </div>
    );
};

export default PriceOptions;
