class Ticket {
  destination: string;
  price: number;
  status: string;

  constructor(destination: string, price: number, status: string) {
    this.destination = destination;
    this.price = price;
    this.status = status;
  }
}

function sortTickets(array: string[], criteria: string) {
  const destination = array
    .map((str) => str.split('|'))
    .map(
      ([destination, price, status]) =>
        new Ticket(destination, Number(price), status)
    )
    .sort((a, b) => a[criteria].localeCompare(b[criteria]));

  console.log(destination);

  return destination;
}

sortTickets(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed',
  ],
  'destination'
);

sortTickets(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed',
  ],
  'status'
);
