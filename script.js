// ===== GLOBAL VARIABLES & DATA =====

// Data mesin untuk setiap proses
const machinesData = {
    // Proses 1: Desulfurisasi
    machine1: {
        basic: {
            name: "Desulfurizer Basic",
            price: 2400000000,
            efficiency: 85,
            yield: 98,
            code: "R-101B"
        },
        standard: {
            name: "Desulfurizer Standard",
            price: 3800000000,
            efficiency: 92,
            yield: 99,
            code: "R-101S"
        },
        premium: {
            name: "Desulfurizer Premium",
            price: 5200000000,
            efficiency: 98,
            yield: 99.5,
            code: "R-101P"
        }
    },
    
    // Proses 2: Steam Reforming
    machine2: {
        basic: {
            name: "Steam Reformer Furnace Basic",
            price: 115000000000,
            efficiency: 80,
            yield: 88,
            code: "F-101B"
        },
        standard: {
            name: "Steam Reformer Furnace Standard",
            price: 136000000000,
            efficiency: 88,
            yield: 92,
            code: "F-101S"
        },
        premium: {
            name: "Steam Reformer Furnace Premium",
            price: 165000000000,
            efficiency: 95,
            yield: 96,
            code: "F-101P"
        }
    },
    
    // Proses 3: Shift Conversion
    machine3: {
        basic: {
            name: "Shift Reactor Basic",
            price: 40000000000,
            efficiency: 85,
            yield: 92,
            code: "R-201B"
        },
        standard: {
            name: "Shift Reactor Standard",
            price: 48000000000,
            efficiency: 92,
            yield: 95,
            code: "R-201S"
        },
        premium: {
            name: "Shift Reactor Premium",
            price: 58000000000,
            efficiency: 97,
            yield: 98,
            code: "R-201P"
        }
    },
    
    // Proses 4: CO₂ Removal
    machine4: {
        basic: {
            name: "CO₂ Removal Unit Basic",
            price: 72000000000,
            efficiency: 90,
            yield: 95,
            code: "C-101B"
        },
        standard: {
            name: "CO₂ Removal Unit Standard",
            price: 85000000000,
            efficiency: 96,
            yield: 98,
            code: "C-101S"
        },
        premium: {
            name: "CO₂ Removal Unit Premium",
            price: 100000000000,
            efficiency: 99,
            yield: 99.5,
            code: "C-101P"
        }
    },
    
    // Proses 5: Ammonia Synthesis
    machine5: {
        basic: {
            name: "Ammonia Synthesis Reactor Basic",
            price: 60000000000,
            efficiency: 15, // Single pass conversion
            yield: 96,
            code: "R-301B"
        },
        standard: {
            name: "Ammonia Synthesis Reactor Standard",
            price: 72000000000,
            efficiency: 20,
            yield: 98,
            code: "R-301S"
        },
        premium: {
            name: "Ammonia Synthesis Reactor Premium",
            price: 88000000000,
            efficiency: 25,
            yield: 99,
            code: "R-301P"
        }
    }
};

// Data bahan baku dengan harga aktual Indonesia 2024
const rawMaterialData = [
    {
        id: "natural_gas",
        name: "Gas Alam",
        unit: "MMBTU",
        theoreticalNeed: 29700000, // Untuk 458.8 ton/hari ≈ 29.7 juta MMBTU
        unitPrice: 96000,
        source: "Kementerian ESDM RI - Harga Gas Industri 2024",
        category: "utama"
    },
    {
        id: "zno",
        name: "Zinc Oxide (ZnO)",
        unit: "kg",
        theoreticalNeed: 147.4,
        unitPrice: 85000,
        source: "PT. Indo Acidatama - Supplier Kimia",
        category: "kimia"
    },
    {
        id: "process_water",
        name: "Air Proses",
        unit: "m³",
        theoreticalNeed: 1085,
        unitPrice: 5000,
        source: "PDAM & Water Treatment Industri",
        category: "utility"
    },
    {
        id: "electricity",
        name: "Listrik",
        unit: "kWh",
        theoreticalNeed: 85000,
        unitPrice: 1500,
        source: "PLN Tarif Industri 2024",
        category: "utility"
    },
    {
        id: "catalyst_nickel",
        name: "Katalis Nikel",
        unit: "kg",
        theoreticalNeed: 0.05,
        unitPrice: 1200000,
        source: "PT. Antam & Import",
        category: "kimia"
    },
    {
        id: "catalyst_iron",
        name: "Katalis Besi",
        unit: "kg",
        theoreticalNeed: 0.03,
        unitPrice: 800000,
        source: "Supplier Katalis Industri",
        category: "kimia"
    },
    {
        id: "compressed_air",
        name: "Udara Tekan",
        unit: "unit",
        theoreticalNeed: 1,
        unitPrice: 200000000,
        source: "Perhitungan Teknis",
        category: "utility"
    },
    {
        id: "chemicals",
        name: "Bahan Kimia Lain",
        unit: "kg",
        theoreticalNeed: 50,
        unitPrice: 150000,
        source: "Supplier Kimia Industri",
        category: "kimia"
    }
];

// Data peralatan utama untuk tabel ekonomi
const equipmentData = [
    { code: "R-101", name: "Desulfurizer Vessel", qty: 1, unitPrice: 3800000000 },
    { code: "F-101", name: "Steam Reformer Furnace", qty: 1, unitPrice: 136000000000 },
    { code: "C-101", name: "Syngas Compressor", qty: 1, unitPrice: 51200000000 },
    { code: "R-201", name: "Shift Reactor", qty: 1, unitPrice: 48000000000 },
    { code: "C-201", name: "CO₂ Removal Unit", qty: 1, unitPrice: 85000000000 },
    { code: "R-301", name: "Ammonia Synthesis Reactor", qty: 1, unitPrice: 72000000000 },
    { code: "D-301", name: "Distillation Column", qty: 2, unitPrice: 16000000000 },
    { code: "HE-101", name: "Heat Exchangers", qty: 10, unitPrice: 4000000000 },
    { code: "P-101", name: "Pumps & Motors", qty: 15, unitPrice: 640000000 },
    { code: "TK-101", name: "Storage Tanks", qty: 4, unitPrice: 8000000000 }
];

// ===== UTILITY FUNCTIONS =====

// Format angka ke Rupiah
function formatRupiah(amount) {
    if (amount >= 1000000000000) {
        return `Rp ${(amount / 1000000000000).toFixed(2)} T`;
    } else if (amount >= 1000000000) {
        return `Rp ${(amount / 1000000000).toFixed(2)} M`;
    } else if (amount >= 1000000) {
        return `Rp ${(amount / 1000000).toFixed(2)} jt`;
    } else {
        return `Rp ${amount.toLocaleString('id-ID')}`;
    }
}

// Format angka biasa
function formatNumber(num) {
    return num.toLocaleString('id-ID');
}

// Hitung efisiensi rata-rata
function calculateAverageEfficiency() {
    let totalEfficiency = 0;
    let count = 0;
    
    for (let i = 1; i <= 5; i++) {
        const select = document.getElementById(`machine${i}`);
        if (select) {
            const machine = machinesData[`machine${i}`][select.value];
            totalEfficiency += machine.efficiency;
            count++;
        }
    }
    
    return count > 0 ? totalEfficiency / count : 0;
}

// Hitung total biaya mesin
function calculateTotalMachineCost() {
    let totalCost = 0;
    
    for (let i = 1; i <= 5; i++) {
        const select = document.getElementById(`machine${i}`);
        if (select) {
            const machine = machinesData[`machine${i}`][select.value];
            totalCost += machine.price;
        }
    }
    
    return totalCost;
}

// ===== MAIN FUNCTIONS =====

// Update tampilan mesin di setiap proses
function updateMachine(processNumber) {
    const select = document.getElementById(`machine${processNumber}`);
    const selectedValue = select.value;
    const machine = machinesData[`machine${processNumber}`][selectedValue];
    
    // Update di proses detail
    document.getElementById(`machine${processNumber}-name`).textContent = machine.name;
    document.getElementById(`machine${processNumber}-price`).textContent = formatRupiah(machine.price);
    document.getElementById(`machine${processNumber}-efficiency`).textContent = `${machine.efficiency}%`;
    document.getElementById(`machine${processNumber}-yield`).textContent = `${machine.yield}%`;
    
    // Update ringkasan mesin
    updateMachineSummary();
}

// Update ringkasan mesin
function updateMachineSummary() {
    const summaryGrid = document.getElementById('machine-summary-grid');
    let html = '';
    
    let totalCost = 0;
    let totalEfficiency = 0;
    
    for (let i = 1; i <= 5; i++) {
        const select = document.getElementById(`machine${i}`);
        const selectedValue = select.value;
        const machine = machinesData[`machine${i}`][selectedValue];
        
        totalCost += machine.price;
        totalEfficiency += machine.efficiency;
        
        html += `
            <div class="summary-card">
                <div class="summary-card-header">
                    <div class="summary-card-title">Proses ${i}: ${getProcessName(i)}</div>
                    <select class="summary-card-select" onchange="setMachine(${i}, this.value); updateAllCalculations();">
                        <option value="basic" ${selectedValue === 'basic' ? 'selected' : ''}>Basic</option>
                        <option value="standard" ${selectedValue === 'standard' ? 'selected' : ''}>Standard</option>
                        <option value="premium" ${selectedValue === 'premium' ? 'selected' : ''}>Premium</option>
                    </select>
                </div>
                <div class="summary-card-details">
                    <div class="detail-label">Mesin:</div>
                    <div class="detail-value">${machine.name}</div>
                    
                    <div class="detail-label">Kode:</div>
                    <div class="detail-value">${machine.code}</div>
                    
                    <div class="detail-label">Harga:</div>
                    <div class="detail-value">${formatRupiah(machine.price)}</div>
                    
                    <div class="detail-label">Efisiensi:</div>
                    <div class="detail-value">${machine.efficiency}%</div>
                    
                    <div class="detail-label">Yield:</div>
                    <div class="detail-value">${machine.yield}%</div>
                </div>
            </div>
        `;
    }
    
    summaryGrid.innerHTML = html;
    
    // Update total
    const avgEfficiency = totalEfficiency / 5;
    const correctionFactor = 100 / avgEfficiency;
    
    document.getElementById('total-machine-cost').textContent = formatRupiah(totalCost);
    document.getElementById('average-efficiency').textContent = `${avgEfficiency.toFixed(1)}%`;
    document.getElementById('correction-factor').textContent = `${correctionFactor.toFixed(3)}x`;
}

// Set mesin dari ringkasan
function setMachine(processNumber, value) {
    document.getElementById(`machine${processNumber}`).value = value;
    updateMachine(processNumber);
}

// Set semua mesin ke level tertentu
function setAllMachines(level) {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`machine${i}`).value = level;
        updateMachine(i);
    }
    updateAllCalculations();
}

// Update perhitungan bahan baku
function updateRawMaterialCalculation() {
    const avgEfficiency = calculateAverageEfficiency();
    const correctionFactor = 100 / avgEfficiency;
    const extraPercent = ((correctionFactor - 1) * 100).toFixed(1);
    
    // Update info box
    document.getElementById('current-efficiency-display').textContent = `${avgEfficiency.toFixed(1)}%`;
    document.getElementById('current-correction-display').textContent = `${correctionFactor.toFixed(3)}x`;
    document.getElementById('current-extra-percent').textContent = `${extraPercent}%`;
    
    // Update header
    document.getElementById('header-efficiency').textContent = `${avgEfficiency.toFixed(1)}`;
    
    // Hitung dan update tabel bahan baku
    let tableBody = '';
    let totalDailyCost = 0;
    
    const categoryTotals = {
        'utama': 0,
        'kimia': 0,
        'utility': 0
    };
    
    rawMaterialData.forEach(material => {
        const actualNeed = material.theoreticalNeed * correctionFactor;
        const dailyCost = actualNeed * material.unitPrice;
        totalDailyCost += dailyCost;
        
        // Hitung per kategori untuk breakdown
        categoryTotals[material.category] = (categoryTotals[material.category] || 0) + dailyCost;
        
        tableBody += `
            <tr>
                <td>${material.name}</td>
                <td>${formatNumber(material.theoreticalNeed)} ${material.unit}</td>
                <td>${correctionFactor.toFixed(3)}x</td>
                <td>${formatNumber(Math.round(actualNeed))} ${material.unit}</td>
                <td>${formatRupiah(material.unitPrice)}/${material.unit}</td>
                <td>${formatRupiah(dailyCost)}</td>
                <td>${material.source}</td>
            </tr>
        `;
    });
    
    document.getElementById('raw-material-body').innerHTML = tableBody;
    
    // Update total
    const yearlyCost = totalDailyCost * 330;
    document.getElementById('daily-total-cost').textContent = formatRupiah(totalDailyCost);
    document.getElementById('yearly-total-cost').textContent = formatRupiah(yearlyCost);
    
    // Update header
    document.getElementById('header-raw-cost').textContent = formatRupiah(totalDailyCost).replace('Rp ', '');
    
    // Update breakdown
    updateBreakdownChart(categoryTotals, totalDailyCost);
    
    // Update analisis ekonomi
    updateEconomicAnalysis(totalDailyCost, yearlyCost);
}

// Update breakdown chart
function updateBreakdownChart(categoryTotals, totalDailyCost) {
    const categories = [
        { id: 'gas-percentage', label: 'Gas Alam', category: 'utama', color: '#3b82f6' },
        { id: 'utils-percentage', label: 'Utilitas', category: 'utility', color: '#10b981' },
        { id: 'chem-percentage', label: 'Kimia & Katalis', category: 'kimia', color: '#f59e0b' }
    ];
    
    categories.forEach(cat => {
        const cost = categoryTotals[cat.category] || 0;
        const percentage = totalDailyCost > 0 ? (cost / totalDailyCost * 100).toFixed(0) : 0;
        
        document.getElementById(cat.id).textContent = `${formatRupiah(cost)}/hari`;
        
        // Update bar chart visual
        const barElement = document.querySelector(`.breakdown-item:nth-child(${categories.indexOf(cat) + 1}) .bar-fill`);
        if (barElement) {
            barElement.style.width = `${percentage}%`;
            barElement.querySelector('span').textContent = `${percentage}%`;
        }
    });
}

// Update analisis ekonomi
function updateEconomicAnalysis(dailyRawMaterialCost, yearlyRawMaterialCost) {
    const totalMachineCost = calculateTotalMachineCost();
    
    // Update tabel peralatan
    let equipmentTable = `
        <thead>
            <tr>
                <th>Kode</th>
                <th>Peralatan</th>
                <th>Jumlah</th>
                <th>Harga/Unit (Rp)</th>
                <th>Total (Rp)</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    let totalEquipmentCost = 0;
    
    equipmentData.forEach(equipment => {
        const total = equipment.unitPrice * equipment.qty;
        totalEquipmentCost += total;
        
        equipmentTable += `
            <tr>
                <td>${equipment.code}</td>
                <td>${equipment.name}</td>
                <td>${equipment.qty}</td>
                <td>${formatRupiah(equipment.unitPrice)}</td>
                <td>${formatRupiah(total)}</td>
            </tr>
        `;
    });
    
    equipmentTable += `
        <tr class="total-row">
            <td colspan="4"><strong>TOTAL PERALATAN UTAMA (E)</strong></td>
            <td><strong>${formatRupiah(totalEquipmentCost)}</strong></td>
        </tr>
    </tbody>`;
    
    document.getElementById('equipment-table').innerHTML = equipmentTable;
    
    // Hitung biaya produksi tahunan baru
    const annualRawMaterialCost = yearlyRawMaterialCost;
    const otherCosts = 450000000000; // Biaya tetap lainnya
    const annualProductionCost = annualRawMaterialCost + otherCosts;
    
    // Hitung profitabilitas baru
    const annualRevenue = 1848000000000; // Tetap
    const annualGrossProfit = annualRevenue - annualProductionCost;
    const tax = annualGrossProfit * 0.25;
    const netProfit = annualGrossProfit - tax;
    
    // Update nilai
    document.getElementById('annual-production-cost').textContent = formatRupiah(annualProductionCost);
    document.getElementById('annual-gross-profit').textContent = formatRupiah(annualGrossProfit);
    
    // Hitung Payback Period (disederhanakan)
    const fci = 1622740000000; // Tetap
    const depreciation = totalEquipmentCost * 0.1;
    const paybackPeriod = fci / (netProfit + depreciation);
    
    document.getElementById('payback-period').textContent = `${paybackPeriod.toFixed(2)} Tahun`;
}

// Update semua perhitungan
function updateAllCalculations() {
    updateMachineSummary();
    updateRawMaterialCalculation();
}

// ===== SCROLL SPY NAVIGATION =====

function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Fungsi untuk update active link
    function updateActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Event listener untuk scroll
    window.addEventListener('scroll', updateActiveLink);
    
    // Event listener untuk klik nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Panggil sekali di awal
    updateActiveLink();
}

// ===== BACK TO TOP BUTTON =====

function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===== HELPER FUNCTIONS =====

function getProcessName(number) {
    const names = {
        1: "Desulfurisasi",
        2: "Steam Reforming",
        3: "Shift Conversion",
        4: "CO₂ Removal",
        5: "Sintesis Amonia"
    };
    return names[number] || `Proses ${number}`;
}

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', function() {
    console.log('Amonia Plant Simulation v2.0 loaded');
    
    // Initialize semua mesin ke standard
    for (let i = 1; i <= 5; i++) {
        updateMachine(i);
    }
    
    // Inisialisasi perhitungan
    updateAllCalculations();
    
    // Inisialisasi scroll spy
    initScrollSpy();
    
    // Inisialisasi back to top button
    initBackToTop();
    
    // Tambahkan animasi untuk process sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const sections = document.querySelectorAll('.process-section, .machine-summary-section, .raw-material-section, .economics-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
    
    // Simulasi loading selesai
    setTimeout(() => {
        console.log('All calculations completed successfully!');
    }, 1000);
});