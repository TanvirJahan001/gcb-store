export const products = [
  {
    id: 1,
    name: "AMD Processor",
    price: 32000,
    image: "/images/AMD-Processor.png",
    category: "CPU",
    stock: 12,
    rating: 4.8,
    description: "8-core performance chip for high-end gaming and productivity.",
    specs: {
      cores: "8 Cores",
      threads: "16 Threads",
      baseSpeed: "3.8 GHz",
      boostSpeed: "4.7 GHz",
      cache: "32MB L3 Cache"
    }
  },
  {
    id: 2,
    name: "Intel Processor",
    price: 32000,
    image: "/images/Intel-Processor.png",
    category: "CPU",
    stock: 10,
    rating: 4.8,
    description: "8-core performance chip for high-end gaming and productivity.",
    specs: {
      cores: "8 Cores",
      threads: "16 Threads",
      baseSpeed: "3.8 GHz",
      boostSpeed: "4.7 GHz",
      cache: "32MB L3 Cache"
    }
  },
  {
    id: 3,
    name: "SSD",
    price: 12000,
    image: "/images/SSD.png",
    category: "Storage",
    stock: 15,
    rating: 4.7,
    description: "High-speed NVMe SSD for faster boot times and game loading.",
    specs: {
      capacity: "1TB",
      readSpeed: "3500 MB/s",
      writeSpeed: "3300 MB/s",
      form: "M.2 2280"
    }
  },
  {
    id: 4,
    name: "Desktop RAM",
    price: 15000,
    image: "/images/Desktop-RAM.png",
    category: "RAM",
    stock: 20,
    rating: 4.6,
    description: "High-performance memory kit for gaming and multitasking.",
    specs: {
      capacity: "32GB (2x16GB)",
      speed: "3600MHz",
      timing: "CL18",
      voltage: "1.35V"
    }
  },
  {
    id: 5,
    name: "Desktop Motherboard",
    price: 22000,
    image: "/images/Desktop-Motherboard.png",
    category: "Motherboard",
    stock: 10,
    rating: 4.7,
    description: "Feature-rich motherboard for AMD Ryzen processors.",
    specs: {
      socket: "AM4",
      chipset: "B550",
      memory: "4x DIMM, Max 128GB",
      pcie: "PCIe 4.0"
    }
  },
  {
    id: 6,
    name: "Power Supply",
    price: 18000,
    image: "/images/Power-Supply.png",
    category: "PSU",
    stock: 14,
    rating: 4.8,
    description: "Gold-rated modular power supply for reliable system power.",
    specs: {
      wattage: "850W",
      efficiency: "80+ Gold",
      modular: "Fully Modular",
      fan: "135mm Silent"
    }
  },
  {
    id: 7,
    name: "Keyboard",
    price: 2500,
    image: "/images/Keyboard.png",
    category: "Peripherals",
    stock: 30,
    rating: 4.5,
    description: "Mechanical RGB keyboard for gaming and productivity.",
    specs: {
      type: "Mechanical",
      keys: "104",
      backlight: "RGB",
      connection: "Wired USB"
    }
  },
  {
    id: 8,
    name: "Mouse",
    price: 1800,
    image: "/images/Mouse.png",
    category: "Peripherals",
    stock: 40,
    rating: 4.4,
    description: "Ergonomic gaming mouse with customizable DPI.",
    specs: {
      dpi: "16000",
      buttons: "7",
      connection: "Wired USB",
      lighting: "RGB"
    }
  },
  {
    id: 9,
    name: "Printer",
    price: 12000,
    image: "/images/Printer.png",
    category: "Peripherals",
    stock: 8,
    rating: 4.2,
    description: "All-in-one wireless color printer for home and office.",
    specs: {
      type: "Inkjet",
      functions: "Print/Scan/Copy",
      connectivity: "Wi-Fi, USB",
      speed: "20 ppm"
    }
  },
  {
    id: 10,
    name: "Desktop Monitor",
    price: 22000,
    image: "/images/Desktop-Monitor.png",
    category: "Monitor",
    stock: 12,
    rating: 4.6,
    description: "27-inch Full HD IPS monitor with ultra-thin bezels.",
    specs: {
      size: "27-inch",
      resolution: "1920x1080",
      refreshRate: "75Hz",
      panel: "IPS"
    }
  }
];


export const categories = [
  { id: 1, name: "CPU", icon: "💻" },
  { id: 3, name: "RAM", icon: "🧠" },
  { id: 4, name: "Storage", icon: "💽" },
  { id: 5, name: "Motherboard", icon: "🔌" },
  { id: 6, name: "PSU", icon: "⚡" },
  { id: 7, name: "Case", icon: "🏠" },
  { id: 8, name: "Monitor", icon: "🖥️" },
  { id: 9, name: "Peripherals", icon: "🖱️" }
];

export const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    date: "2024-01-15",
    text: "Great selection of products and excellent customer service!"
  },
  {
    id: 2,
    name: "Sarah Smith",
    rating: 4,
    date: "2024-01-10",
    text: "Fast shipping and competitive prices. Will shop again!"
  },
  {
    id: 3,
    name: "Mike Johnson",
    rating: 5,
    date: "2024-01-05",
    text: "The technical support team was very helpful in choosing components."
  }
];