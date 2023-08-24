-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 27, 2022 at 11:58 AM
-- Server version: 8.0.21
-- PHP Version: 7.4.9


CREATE DATABASE nv_04;
USE nv_04;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nv_04`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uniqcart` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `product_id` bigint UNSIGNED NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniqcart` (`uniqcart`),
  KEY `cart_user_id_foreign` (`user_id`),
  KEY `cart_product_id_foreign` (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clubs`
--

DROP TABLE IF EXISTS `clubs`;
CREATE TABLE IF NOT EXISTS `clubs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `clubname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `clubinfo` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `agendas` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `clubname` (`clubname`),
  KEY `clubs_user_foreign` (`user`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `clubs`
--

INSERT INTO `clubs` (`id`, `clubname`, `clubinfo`, `agendas`, `image`, `user`, `created_at`, `updated_at`) VALUES
(1, 'Omnis elit ullam ip', 'Aut voluptatum quis ', 'At iste ipsam dolore', '/uploads/1669402099_qwe.png', '1', '2022-11-25 15:48:31', '2022-11-25 15:48:31'),
(2, 'Data Science', 'Ipsum in corporis et', 'Repudiandae incidunt', '/uploads/1669436841_analysis-1.png', '4', '2022-11-26 01:27:31', '2022-11-26 01:27:31'),
(3, 'Christmas Plans', 'Voluptatibus animi ', 'Quis in excepturi au', '/uploads/1669443805_download.jfif', '4', '2022-11-26 03:23:36', '2022-11-26 03:23:36');

-- --------------------------------------------------------

--
-- Table structure for table `club_member`
--

DROP TABLE IF EXISTS `club_member`;
CREATE TABLE IF NOT EXISTS `club_member` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `club_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `club_member_club_id_foreign` (`club_id`),
  KEY `club_member_user_id_foreign` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `club_member`
--

INSERT INTO `club_member` (`id`, `club_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2022-11-25 15:48:39', '2022-11-25 15:48:39'),
(2, 2, 4, '2022-11-26 01:28:39', '2022-11-26 01:28:39');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `post_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comments_user_id_foreign` (`user_id`),
  KEY `comments_post_id_foreign` (`post_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_11_22_091901_create_cart_table', 1),
(6, '2022_11_22_091901_create_clubs_table', 1),
(7, '2022_11_22_091901_create_posts_table', 1),
(8, '2022_11_22_091901_create_products_table', 1),
(9, '2022_11_24_071536_create_comments_table', 1),
(10, '2022_11_24_105249_create_club_member_table', 1),
(11, '2022_11_25_114653_create_user_school_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `post` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user` bigint UNSIGNED NOT NULL,
  `status` enum('active','inactive') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `type` enum('post','ad') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'post',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `posts_user_foreign` (`user`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `post`, `image`, `user`, `status`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Enim et ea est occa', '/uploads/1669401937_Gold_Seals.jpg', 1, 'active', 'post', '2022-11-25 15:45:38', '2022-11-25 15:45:38');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `business` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `names` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(6,2) NOT NULL,
  `quantity` int NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `names` (`names`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `business`, `names`, `price`, `quantity`, `description`, `image`, `user`, `created_at`, `updated_at`) VALUES
(1, 'Iure reiciendis ut e', 'Esse possimus paria', 40.00, 7, 'Sapiente sunt sit i', '', '1', '2022-11-25 15:43:23', '2022-11-25 15:43:23'),
(2, 'Qui eum sit aut quo', 'Modi deserunt ullamc', 4.00, 68, 'Esse alias ut eos as', '', '2', '2022-11-25 16:03:44', '2022-11-25 16:03:44');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `names` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT 'Others',
  `dob` date DEFAULT NULL,
  `course` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` text COLLATE utf8mb4_unicode_ci,
  `school` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `schooladdress` text COLLATE utf8mb4_unicode_ci,
  `bsname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bsdesc` text COLLATE utf8mb4_unicode_ci,
  `bsaddress` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT 'Active',
  `role` enum('student','business','school','superadmin') COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `names` (`names`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `names`, `email`, `gender`, `dob`, `course`, `address`, `school`, `schooladdress`, `bsname`, `bsdesc`, `bsaddress`, `image`, `status`, `role`, `password`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Quis aut fugiat cup', 'rudylumaze@mailinator.com', 'Male', '1985-09-06', 'Culpa nostrum non be', 'Numquam sed animi e', NULL, 'Magna eos pariatur ', NULL, NULL, NULL, '', 'Active', 'student', '$2y$10$pXB59tWploWk8MJmQQrZ4.6hyVEZwm2nmGJSuf1WpgFfZU4tOfMpC', NULL, NULL, '2022-11-25 15:42:14', '2022-11-25 15:42:14'),
(2, 'Voluptatem nihil es', 'nilunapub@mailinator.com', 'Female', '2018-11-19', 'Consectetur sunt e', 'Et cillum ipsa iure', NULL, 'Odit ex elit impedi', NULL, NULL, NULL, '', 'Active', 'student', '$2y$10$dWXiOvvsh8EtX42iefRjC.OsaLrVXyFVbOHBUiyrvTgam5cJzriAG', NULL, NULL, '2022-11-25 15:51:05', '2022-11-25 15:51:05'),
(3, 'A elit iste nisi si', 'hunune@mailinator.com', 'Others', NULL, '', '', NULL, NULL, 'Nulla est consequatu', 'Cumque dolores cillu', 'Quisquam duis volupt', '', 'Active', 'business', '$2y$10$UP05glDuYUbzFpnCXxsKwe0qUEr/MS3.9tNKis4zQKO/FyNZ9TB1C', NULL, NULL, '2022-11-25 16:06:17', '2022-11-25 16:06:17'),
(4, 'Aliqua Soluta eiusm', 'xycytotode@mailinator.com', 'Male', '2010-10-23', 'Expedita numquam con', 'Sint in totam reicie', NULL, 'Necessitatibus repre', NULL, NULL, NULL, '', 'Active', 'student', '$2y$10$cGu78NbfA.fdMYLlFP.wMODXoJaUzVRgkfwRU4gFglPvU7WkI2/Ae', NULL, NULL, '2022-11-26 01:26:40', '2022-11-26 01:26:40'),
(5, 'Repudiandae adipisic', 'liqehu@mailinator.com', 'Others', NULL, '', '', NULL, NULL, 'Eum id dolores velit', 'Ipsa et totam esse ', 'Sint in eu culpa cum', '', 'Active', 'school', '$2y$10$5Ke5PLJ5RC0FC6dMlvCGee/7WlYm/VyZ73kEzGP72U5Mzgs/tfyH2', NULL, NULL, '2022-11-27 08:56:34', '2022-11-27 08:56:34');

-- --------------------------------------------------------

--
-- Table structure for table `user_school`
--

DROP TABLE IF EXISTS `user_school`;
CREATE TABLE IF NOT EXISTS `user_school` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `school_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_school_user_id_foreign` (`user_id`),
  KEY `user_school_school_id_foreign` (`school_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
