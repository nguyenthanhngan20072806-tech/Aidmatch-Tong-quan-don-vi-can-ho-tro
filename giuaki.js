document.addEventListener('DOMContentLoaded', () => {
    // Xử lý tương tác gạch ngang khi click checkbox trong danh sách việc cần làm
    const taskItems = document.querySelectorAll('.task-item input[type="checkbox"]');
    
    taskItems.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const parentLabel = e.target.closest('.task-item');
            if (e.target.checked) {
                parentLabel.classList.add('checked');
            } else {
                parentLabel.classList.remove('checked');
            }
        });
    });

    // Thông báo khi bấm nút "Tạo nhu cầu"
    const createButtons = document.querySelectorAll('.btn-primary');
    createButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Chức năng tạo nhu cầu mới đang được mở!');
        });
    });
});