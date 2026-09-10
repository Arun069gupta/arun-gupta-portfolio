import {
  Cpu,
  CircuitBoard,
  Bot,
  Wifi,
  Gauge,
  Code2,
  Boxes,
  Satellite,
  ShieldCheck,
  LineChart,
  Microscope,
  Award,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
} from 'lucide-react';

export const profile = {
  name: 'Arun Gupta',
  role: 'Robotics & Automation Engineer | Embedded Systems & IoT Developer',
  tagline: 'Integrating embedded hardware into connected, real-time software platforms.',
  location: 'Indore, India',
  email: 'arun861gupta@gmail.com',
  socials: [
    { label: 'GitHub', icon: Github, href: 'https://github.com' },
    { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { label: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  ],
};

export const stats = [
  { value: 2, suffix: '', label: 'Internships Completed' },
  { value: 4, suffix: '+', label: 'Projects Built' },
  { value: 1, suffix: 'st', label: 'Prize — Technical Fiesta' },
  { value: 7.3, suffix: '/10', label: 'CGPA' },
];

export const about = {
  heading: 'Bridging embedded hardware and connected software',
  paragraphs: [
    'I am a Robotics & Automation Engineering student who integrates embedded hardware — sensors, microcontrollers, and displays — into centrally-controlled software platforms via Wi-Fi/MQTT connectivity and real-time dashboards.',
    'My work spans multi-node IoT systems, embedded firmware on ESP32 and PIC18 microcontrollers, and collaborating across hardware-software teams to build systems that communicate reliably in real time.',
  ],
  highlights: [
    { icon: Wifi, label: 'IoT & Connectivity', text: 'Multi-node ESP32 systems over Wi-Fi, MQTT, WebSocket, and ESP-NOW.' },
    { icon: Cpu, label: 'Embedded Systems', text: 'Real-time firmware on ESP32 and PIC18 microcontrollers in C/C++.' },
    { icon: Gauge, label: 'Real-Time Dashboards', text: 'Live monitoring dashboards for telemetry, video, and fault status.' },
  ],
};

export const skills = [
  {
    category: 'Connectivity & Protocols',
    icon: Wifi,
    items: ['Wi-Fi', 'MQTT', 'WebSocket', 'TCP/UDP', 'I2C', 'SPI', 'UART', 'REST APIs'],
  },
  {
    category: 'Embedded Systems & IoT',
    icon: CircuitBoard,
    items: ['ESP32', 'Microchip MCUs (PIC18)', 'C/C++', 'Embedded C', 'Cloud'],
  },
  {
    category: 'Software & Tools',
    icon: Code2,
    items: ['Python', 'OpenCV', 'YOLO', 'Pygame', 'Git/GitHub', 'MySQL'],
  },
  {
    category: 'Robotics & Simulation',
    icon: Bot,
    items: ['ROS2', 'Gazebo', 'SLAM'],
  },
];

export const projects = [
  {
    title: 'SAFE SCAN — Multi-Node IoT Surveillance System',
    description: 'A 4-node distributed ESP32 system using ESP-NOW and WiFi/WebSocket for real-time control and telemetry, with live video streaming and YOLO-based object detection overlaid on a real-time dashboard.',
    tags: ['ESP32', 'ESP-NOW', 'YOLO', 'WebSocket'],
    image: '/IMAGES/Project1.png',
    metric: 'Sub-1ms ESP-NOW latency',
  },
  {
    title: 'Embedded Touchscreen HMI',
    description: 'A touch-interactive graphical interface on an ARM microcontroller that translates touch coordinates into real-time creature movement, with live inverse kinematics rendered on a 12-segment skeleton.',
    tags: ['ARM', 'HMI', 'Inverse Kinematics', 'Embedded C'],
    image: '/IMAGES/Project2.png',
    metric: 'Real-time 12-segment IK',
  },
  {
    title: 'ESP32 Bitcoin Price Tracker',
    description: 'A connected IoT device that executes automated HTTP GET requests and processes JSON payloads within a 1024-byte dynamic memory buffer, using secure HTTPS via WiFiClientSecure for encrypted API access.',
    tags: ['ESP32', 'HTTPS', 'JSON', 'IoT'],
    image: '/IMAGES/Project3.png',
    metric: 'Secure HTTPS data fetch',
  },
  {
    title: 'RoboAR — Augmented Reality Robot Showcase',
    description: 'An AR application built in Unity and Vuforia that recognizes a physical robot through camera image tracking and overlays an interactive 3D model with its description.',
    tags: ['Unity', 'Vuforia', 'C#', 'AR'],
    image: '/IMAGES/Project4.png',
    metric: 'Camera-tracked AR overlay',
  },
];

export const experience = [
  {
    role: 'Embedded AI Intern',
    company: 'Medicaps University (In-House Program)',
    period: 'June 2026 — July 2026',
    location: 'Indore, IN',
    points: [
      'Built a PIC18-based Smart AC protection & Monitoring system using 200 ADC samples per 20ms cycle to monitor voltage/current fluctuations in real time.',
      'Engineered a dual-unit communication pipeline achieving <500ms MQTT latency and delivering Telegram emergency alerts within 2–4 seconds.',
      'Developed a real-time MQTT-based PC dashboard with a 500ms refresh rate (2 FPS) for live monitoring of voltage, current, temperature, and fault status.',
    ],
  },
  {
    role: 'Industrial Trainee',
    company: 'RoboAI (Tech Analogy Pvt. Ltd.)',
    period: 'January 2025 — February 2025',
    location: 'Remote',
    points: [
      'Developed an IoT communication framework for a virtual Boston Dynamics Spot robot in NVIDIA Isaac Sim to AWS IoT Core for real-time fleet management.',
      'Integrated ROS2, MQTT, and REST APIs to stream 25+ telemetry parameters (battery, pose, IMU, joint states, sensor health) at an average update rate of 10 Hz.',
    ],
  },
];

export const research = [];

export const certificates = [
  { title: '1st Prize — Technical Fiesta Robotics Competition (Rescue Robot)', issuer: 'Technical Fiesta', icon: Award },
  { title: 'Industrial Training Certification (with Letter of Recommendation from the COO)', issuer: 'RoboAI', icon: ShieldCheck },
];

export const navLinks = [
  { label: 'About', href: '#about', icon: Microscope },
  { label: 'Skills', href: '#skills', icon: Gauge },
  { label: 'Projects', href: '#projects', icon: Boxes },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Research', href: '#research', icon: GraduationCap },
  { label: 'Certificates', href: '#certificates', icon: Award },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export const contactIcons = {
  Mail,
  MapPin,
  Satellite,
};