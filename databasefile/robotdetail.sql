-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2022 at 11:02 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `robotmarket`
--

-- --------------------------------------------------------

--
-- Table structure for table `robotdetail`
--

CREATE TABLE `robotdetail` (
  `id` int(24) NOT NULL,
  `name` varchar(212) NOT NULL,
  `image` varchar(212) NOT NULL,
  `price` float DEFAULT NULL,
  `date` date NOT NULL,
  `material` varchar(212) NOT NULL,
  `stock` int(24) NOT NULL,
  `check_` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `robotdetail`
--

INSERT INTO `robotdetail` (`id`, `name`, `image`, `price`, `date`, `material`, `stock`, `check_`) VALUES
(1, 'Telechir', 'https://media.istockphoto.com/photos/mini-robot-finger-point-picture-id1050049486?s=612x612', 12000, '2022-02-03', 'plastic', 3, 1),
(2, 'Telepresence', 'https://media.istockphoto.com/photos/little-robot-waving-hand-cute-robot-isolated-on-white-background-3d-picture-id1250677553?s=612x612', 34000, '2022-02-03', 'iron', 8, 1),
(3, 'Robot', 'https://st4.depositphotos.com/1034582/26639/i/1600/depositphotos_266393952-stock-photo-robot-waving-hello.jpg', 2000, '2022-02-09', 'iron', 4, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `robotdetail`
--
ALTER TABLE `robotdetail`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `robotdetail`
--
ALTER TABLE `robotdetail`
  MODIFY `id` int(24) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
