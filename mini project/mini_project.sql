-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 20, 2022 at 07:44 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mini_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `moneyvals`
--

CREATE TABLE `moneyvals` (
  `id` bigint UNSIGNED NOT NULL,
  `amount` varchar(255) NOT NULL,
  `is_deleted` tinyint UNSIGNED DEFAULT '0',
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `moneyvals`
--

INSERT INTO `moneyvals` (`id`, `amount`, `is_deleted`, `updated_at`) VALUES
(1, '10', 0, '2022-08-20 09:43:33'),
(2, '21', 0, '2022-08-20 09:55:05'),
(3, '21', 0, '2022-08-20 10:08:11'),
(4, '13', 0, '2022-08-20 10:08:23'),
(5, '15', 0, '2022-08-20 10:08:32'),
(6, '11', 0, '2022-08-20 10:08:38'),
(7, '16', 0, '2022-08-20 10:08:47'),
(8, '10', 0, '2022-08-20 10:08:56'),
(9, '10', 0, '2022-08-20 10:09:07'),
(10, '10', 0, '2022-08-20 10:06:27'),
(11, '10', 0, '2022-08-20 10:09:14'),
(12, '10', 0, '2022-08-20 10:06:57'),
(13, '3', 0, '2022-08-20 10:54:57'),
(14, '3', 0, '2022-08-20 10:55:27'),
(15, '30', 0, '2022-08-20 11:06:02'),
(16, '28', 0, '2022-08-20 11:05:54'),
(17, '11', 0, '2022-08-20 11:04:01'),
(18, '25', 0, '2022-08-20 11:05:17'),
(19, '16', 0, '2022-08-20 11:05:17'),
(20, '24', 0, '2022-08-20 11:05:17'),
(21, '20', 0, '2022-08-20 11:05:17'),
(22, '12', 0, '2022-08-20 11:05:17'),
(23, '23', 0, '2022-08-20 11:05:17'),
(24, '13', 0, '2022-08-20 11:05:17'),
(25, '22', 0, '2022-08-20 11:05:18'),
(26, '28', 0, '2022-08-20 11:05:18'),
(27, '15', 0, '2022-08-20 11:05:18'),
(28, '19', 0, '2022-08-20 11:10:44'),
(29, '26', 0, '2022-08-20 11:10:44'),
(30, '10', 0, '2022-08-20 11:10:44'),
(31, '15', 0, '2022-08-20 11:10:44'),
(32, '22', 0, '2022-08-20 11:10:44'),
(33, '13', 0, '2022-08-20 11:10:44'),
(34, '23', 0, '2022-08-20 11:10:44'),
(35, '28', 0, '2022-08-20 11:10:44'),
(36, '20', 0, '2022-08-20 11:10:44'),
(37, '27', 0, '2022-08-20 11:10:44'),
(38, '25', 0, '2022-08-20 11:11:18'),
(39, '20', 0, '2022-08-20 11:11:18'),
(40, '14', 0, '2022-08-20 11:11:18'),
(41, '23', 0, '2022-08-20 11:11:18'),
(42, '10', 0, '2022-08-20 11:11:18'),
(43, '11', 0, '2022-08-20 11:11:18'),
(44, '24', 0, '2022-08-20 11:11:18'),
(45, '23', 0, '2022-08-20 11:11:18'),
(46, '27', 0, '2022-08-20 11:11:18'),
(47, '29', 0, '2022-08-20 11:11:18'),
(48, '15', 0, '2022-08-20 11:11:54'),
(49, '12', 0, '2022-08-20 11:13:49'),
(50, '12', 0, '2022-08-20 11:14:23'),
(51, '15', 0, '2022-08-20 11:15:10'),
(52, '27', 0, '2022-08-20 11:15:10'),
(53, '21', 0, '2022-08-20 11:15:10'),
(54, '24', 0, '2022-08-20 11:15:10'),
(55, '15', 0, '2022-08-20 11:15:10'),
(56, '26', 0, '2022-08-20 11:15:10'),
(57, '12', 0, '2022-08-20 11:15:10'),
(58, '17', 0, '2022-08-20 11:15:10'),
(59, '19', 0, '2022-08-20 11:15:10'),
(60, '24', 0, '2022-08-20 11:15:10'),
(61, '20', 0, '2022-08-20 11:18:19'),
(62, '15', 0, '2022-08-20 11:18:19'),
(63, '20', 0, '2022-08-20 11:18:19'),
(64, '28', 0, '2022-08-20 11:18:19'),
(65, '18', 0, '2022-08-20 11:18:19'),
(66, '28', 0, '2022-08-20 11:18:19'),
(67, '12', 0, '2022-08-20 11:18:19'),
(68, '25', 0, '2022-08-20 11:18:19'),
(69, '19', 0, '2022-08-20 11:18:19'),
(70, '20', 0, '2022-08-20 11:18:19'),
(71, '10', 0, '2022-08-20 11:21:59'),
(72, '12', 0, '2022-08-20 11:21:59'),
(73, '12', 0, '2022-08-20 11:21:59'),
(74, '15', 0, '2022-08-20 11:22:00'),
(75, '22', 0, '2022-08-20 11:22:00'),
(76, '17', 0, '2022-08-20 11:22:00'),
(77, '17', 0, '2022-08-20 11:22:00'),
(78, '27', 0, '2022-08-20 11:22:00'),
(79, '17', 0, '2022-08-20 11:22:00'),
(80, '28', 0, '2022-08-20 11:22:00');

-- --------------------------------------------------------

--
-- Table structure for table `treasures`
--

CREATE TABLE `treasures` (
  `id` bigint UNSIGNED NOT NULL,
  `latitude` varchar(90) NOT NULL,
  `longitude` varchar(180) NOT NULL,
  `name` varchar(255) NOT NULL,
  `is_deleted` tinyint UNSIGNED DEFAULT '0',
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `treasures`
--

INSERT INTO `treasures` (`id`, `latitude`, `longitude`, `name`, `is_deleted`, `updated_at`) VALUES
(44, '14.5520365956368', '121.01696118778582', 'T0', 0, '2022-08-20 12:32:47'),
(45, '14.552036595370403', '121.01696118774662', 'T1', 0, '2022-08-20 12:32:47'),
(46, '14.552036595635602', '121.0169611877424', 'T2', 0, '2022-08-20 12:32:47'),
(47, '14.552036595723749', '121.01696118779866', 'T3', 0, '2022-08-20 12:32:47'),
(48, '14.552036595514025', '121.01696118776643', 'T4', 0, '2022-08-20 12:32:47'),
(49, '14.552036595564852', '121.01696118772144', 'T5', 0, '2022-08-20 12:32:47'),
(50, '14.552036595988977', '121.01696118772614', 'T6', 0, '2022-08-20 12:32:47'),
(51, '14.552036595584578', '121.01696118772912', 'T7', 0, '2022-08-20 12:32:47'),
(52, '14.55203659559377', '121.01696118775278', 'T8', 0, '2022-08-20 12:32:47'),
(53, '14.552036595653234', '121.01696118774103', 'T9', 0, '2022-08-20 12:32:47');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `age` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `is_deleted` tinyint UNSIGNED DEFAULT '0',
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `age`, `password`, `email`, `is_deleted`, `updated_at`) VALUES
(1, 'ace', '22', '123]', 'acer@gmail.com', 0, '2022-08-20 09:02:31'),
(2, 'ace', '24', 'sample1234', 'acevent@gmail.com', 0, '2022-08-20 09:54:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `moneyvals`
--
ALTER TABLE `moneyvals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `treasures`
--
ALTER TABLE `treasures`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `moneyvals`
--
ALTER TABLE `moneyvals`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `treasures`
--
ALTER TABLE `treasures`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
