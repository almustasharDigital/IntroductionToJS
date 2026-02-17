const orders = [
    { id: 101, amount: 55.00, status: 'completed' },
    { id: 102, amount: 32.50, status: 'pending' },
    { id: 103, amount: 120.00, status: 'completed' },
    { id: 104, amount: 15.25, status: 'cancelled' }
];
function filterCompletedOrders(data) {
    return data
        .filter(order => order.status === 'completed')
        .map(({ id, amount }) => ({ id, amount }));
}
function renderOrders() {
    const container = document.getElementById('output');
    const completedOrders = filterCompletedOrders(orders);
    completedOrders.forEach(order => {
        const div = document.createElement('div');
        div.className = 'order-card';
        div.innerHTML = `رقم الطلب: ${order.id} | المبلغ: ${order.amount}`;
        container.appendChild(div);
    });
}
renderOrders();