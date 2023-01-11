-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2022 at 10:30 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mevn1`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `grn` varchar(20) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `grn`, `first_name`, `last_name`, `email`, `phone`, `address`, `date_of_birth`, `image`, `active`) VALUES
(137, '54321', 'Gohar', 'ul Islam', 'goharulislam@gmail.com', '6671234', NULL, NULL, NULL, NULL),
(144, '54321', 'Hanzala', 'Anwer', 'hanzala_anwer@gmail.com', '6671234', NULL, NULL, NULL, NULL),
(145, '54321', 'Muhammad Wali', 'Anwer', 'wali@gmail.com', '6671234', NULL, NULL, NULL, NULL),
(147, '54321', 'Anwer', 'ul Islam', 'anwer@gmail.com', '6671234', NULL, NULL, NULL, NULL),
(148, '54321', 'Syed Uzair', 'Muzzammil', '', '6671234', NULL, NULL, NULL, NULL),
(149, '54321', 'Mansoor ul Islam', 'ul Islam', 'mansoorulislam@gmail.com', '6671234', NULL, NULL, NULL, NULL),
(150, '54321', 'Sufian ul Islam', 'ul Islam', 'sufianulislam@gmail.com', '6671234', NULL, NULL, NULL, NULL),
(151, '54321', 'Muhammad Arham', 'Anwer', 'arhamanwer@gmail.com', '6671234', NULL, NULL, NULL, NULL),
(152, '54321', 'Fatima', 'Gohar', 'fatima_gohar@gmail.com', '6671234', NULL, NULL, NULL, NULL),
(153, '54321', 'Khadija', 'Mansoor', 'khadija@gmail.com', '6671234', NULL, NULL, NULL, NULL),
(154, '32154', 'MARK', 'SIMONDS', 'anyone@yahoo.com', '03001234567', 'Z10 BLOCK A CLIFTON KARACHI SINDH PAKISTAN', '0000-00-00', 'azlan.jpg', 1),
(155, '32154', 'MARK', 'SIMONDS', 'anyone@yahoo.com', '03001234567', 'Z10 BLOCK A CLIFTON KARACHI SINDH PAKISTAN', '0000-00-00', 'azlan.jpg', 1),
(156, '32154', 'THORP', 'DOUGLAS', 'anyone@yahoo.com', '03001234567', 'Z10 BLOCK A CLIFTON KARACHI SINDH PAKISTAN', '0000-00-00', 'azlan.jpg', 1),
(157, '32154', 'MICHAEL', 'DOUGLAS', 'anyone@yahoo.com', '03001234567', 'Z10 BLOCK A CLIFTON KARACHI SINDH PAKISTAN', '0000-00-00', 'bbb.jpg', 1),
(158, '42153', 'MUHAMMAD', 'UMER', 'anyone@yahoo.com', '03001234567', 'Z10 BLOCK A CLIFTON KARACHI SINDH PAKISTAN', '0000-00-00', 'aaa.jpg', 1),
(159, '42153', 'MUHAMMAD', 'USMAN', 'anyone@yahoo.com', '03001234567', 'Z10 BLOCK A CLIFTON KARACHI SINDH PAKISTAN', '0000-00-00', 'aaa.jpg', 1),
(160, '42153', 'MUHAMMAD', 'ALI', 'anyone@yahoo.com', '03001234567', 'Z10 BLOCK A CLIFTON KARACHI SINDH PAKISTAN', '0000-00-00', 'aaa.jpg', 1),
(161, '42153', 'ABU', 'BAKKER', 'anyone@yahoo.com', '03001234567', 'Z10 BLOCK A CLIFTON KARACHI SINDH PAKISTAN', '0000-00-00', 'aaa.jpg', 1),
(162, '42153', 'ABDUL', 'KAREEM', 'anyone@yahoo.com', '03001234567', 'Z10 BLOCK A CLIFTON KARACHI SINDH PAKISTAN', '0000-00-00', 'aaa.jpg', 1),
(163, '42153', 'MUZZAMMIL', 'AHMED', 'anyone@yahoo.com', '03001234567', 'Z10 BLOCK A CLIFTON KARACHI SINDH PAKISTAN', '0000-00-00', 'aaa.jpg', 1),
(164, '42153', 'FAHAD', 'JILANI', 'anyone@yahoo.com', '03001234567', 'Z10 BLOCK A CLIFTON KARACHI SINDH PAKISTAN', '0000-00-00', 'aaa.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `TeamName` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `TeamName`) VALUES
(137, 'a'),
(139, 'b'),
(140, 'c'),
(142, 'd'),
(143, 'e'),
(144, 'f'),
(145, 'g'),
(146, 'h'),
(147, 'i'),
(148, 'j'),
(149, 'k');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(10) DEFAULT NULL,
  `rights` varchar(10) NOT NULL,
  `login_time` datetime DEFAULT NULL,
  `logout_time` datetime DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_id`, `password`, `role`, `rights`, `login_time`, `logout_time`, `created_on`) VALUES
(1, 'admin', 'admin', 'admin', 'crud', '2019-10-28 01:00:00', '2019-10-28 09:00:00', '2021-08-14 05:49:51'),
(0, 'gohar@gmail.com', '$2b$10$fDv4UBwRuz014xaA2nfpRuOmocEQ2Hnazsb5woAOXztPY7YNQIeQu', NULL, '', NULL, NULL, '2021-09-11 00:29:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=165;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=150;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
