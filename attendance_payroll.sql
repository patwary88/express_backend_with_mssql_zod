-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 23, 2025 at 10:45 AM
-- Server version: 8.3.0
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `attendance_payroll`
--

-- --------------------------------------------------------

--
-- Table structure for table `hrm_employees`
--

DROP TABLE IF EXISTS `hrm_employees`;
CREATE TABLE IF NOT EXISTS `hrm_employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emp_code` mediumint UNSIGNED DEFAULT NULL,
  `id_card_no` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `punch_card_no` varchar(20) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0000000000',
  `dob` datetime NOT NULL,
  `actual_dob` datetime DEFAULT NULL,
  `first_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `nick_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `full_name_local` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `father_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `father_name_local` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mother_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mother_name_local` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `spouse_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `spouse_name_local` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `birth_place` varchar(64) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `religion` smallint UNSIGNED NOT NULL DEFAULT '0',
  `blood_group` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `marital_status` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `sex` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `nationality` smallint UNSIGNED NOT NULL DEFAULT '0',
  `national_id` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `passport_no` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `joining_date` datetime NOT NULL,
  `confirmation_date` datetime DEFAULT NULL,
  `service_benifit_from` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `salary_grade` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `salary_rule` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `starting_salary` mediumint UNSIGNED NOT NULL DEFAULT '0',
  `gross_salary` mediumint UNSIGNED NOT NULL DEFAULT '0',
  `buyer_gross_salary` mediumint UNSIGNED NOT NULL DEFAULT '0',
  `bank_gross` mediumint UNSIGNED NOT NULL DEFAULT '0',
  `buyer_bank_gross` mediumint UNSIGNED NOT NULL DEFAULT '0',
  `is_suspension` tinyint(1) NOT NULL DEFAULT '0',
  `is_attendance` tinyint(1) NOT NULL DEFAULT '0',
  `is_salary` tinyint(1) NOT NULL DEFAULT '0',
  `category` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `company_id` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `location_id` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `division_id` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `department_id` smallint UNSIGNED NOT NULL DEFAULT '0',
  `section_id` smallint UNSIGNED NOT NULL DEFAULT '0',
  `subsection_id` smallint UNSIGNED NOT NULL DEFAULT '0',
  `job_location_id` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `unit_id` smallint UNSIGNED NOT NULL DEFAULT '0',
  `floor_id` smallint UNSIGNED NOT NULL DEFAULT '0',
  `building_id` smallint UNSIGNED NOT NULL DEFAULT '0',
  `line_id` smallint UNSIGNED NOT NULL DEFAULT '0',
  `designation_level` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `designation_id` smallint UNSIGNED NOT NULL DEFAULT '0',
  `skill_rank` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `cash_disbursement` tinyint(1) NOT NULL DEFAULT '0',
  `contract_start_date` datetime DEFAULT NULL,
  `contract_end_date` datetime DEFAULT NULL,
  `emp_ref_code` mediumint UNSIGNED DEFAULT NULL,
  `is_locked` tinyint(1) NOT NULL DEFAULT '0',
  `remark` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `is_posted_account` tinyint(1) NOT NULL DEFAULT '0',
  `is_advance_applicable` tinyint(1) NOT NULL DEFAULT '0',
  `confirmation_type` tinyint(1) NOT NULL DEFAULT '0',
  `functional_superior` mediumint UNSIGNED DEFAULT '0',
  `admin_superior` mediumint UNSIGNED DEFAULT '0',
  `leave_app_authority` mediumint UNSIGNED DEFAULT '0',
  `target_confirm_date` datetime DEFAULT NULL,
  `provisional_tenor` smallint UNSIGNED DEFAULT '0',
  `is_leave_app_process_use` tinyint(1) NOT NULL DEFAULT '0',
  `id_card_no_old` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `is_ot_req_applicable` tinyint(1) NOT NULL DEFAULT '0',
  `types_of_work` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `birth_registration_no` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ot_entitled` tinyint(1) NOT NULL DEFAULT '0',
  `staff_ot_entitled` tinyint(1) NOT NULL DEFAULT '0',
  `holiday_allowance_entitled` tinyint(1) NOT NULL DEFAULT '0',
  `pf_entitled` tinyint(1) NOT NULL DEFAULT '0',
  `gi_entitled` tinyint(1) NOT NULL DEFAULT '0',
  `salary_type_entitled` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `overtime_policy` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `holiday_incentive_policy` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `duty_roster_policy` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `leave_policy` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `maternity_leave_policy` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `attendance_bonus_policy` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `absent_deduction_policy` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `late_deduction_policy` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `bonus_policy` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `tax_policy` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `shift_policy` smallint UNSIGNED NOT NULL DEFAULT '0',
  `tiffin_policy` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `allowance_policy` smallint UNSIGNED NOT NULL DEFAULT '0',
  `early_deduction_policy` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `hd_deduct_policy` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `production_bonus_policy` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `missing_punch_policy` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `service_benefit_policy` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `tin_no` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `template_id` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `service_book_no` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `height` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `identification_sign` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `candidate_id` mediumint UNSIGNED NOT NULL DEFAULT '0',
  `weekend_id` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `is_external_transfer` tinyint(1) NOT NULL DEFAULT '0',
  `is_lunch_applicable` tinyint(1) NOT NULL DEFAULT '0',
  `manpower_type` tinyint UNSIGNED NOT NULL DEFAULT '0',
  `office_id` smallint UNSIGNED NOT NULL DEFAULT '0',
  `incre_month` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `inserted_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `status_active` tinyint(1) NOT NULL DEFAULT '1',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hrm_raw_data_attnd_backup`
--

DROP TABLE IF EXISTS `hrm_raw_data_attnd_backup`;
CREATE TABLE IF NOT EXISTS `hrm_raw_data_attnd_backup` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `pid` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `emp_code` int DEFAULT NULL,
  `dtime` date NOT NULL,
  `ctime` datetime NOT NULL,
  `shift_policy_id` int NOT NULL DEFAULT '0',
  `shift_type` tinyint(1) NOT NULL DEFAULT '0',
  `is_next_day` tinyint(1) NOT NULL DEFAULT '0',
  `shift_start` datetime DEFAULT NULL,
  `shift_end` datetime DEFAULT NULL,
  `overtime_policy_id` int NOT NULL DEFAULT '0',
  `punch_type` tinyint(1) NOT NULL DEFAULT '0',
  `is_manual` tinyint(1) NOT NULL DEFAULT '0',
  `ref_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `location_id` int NOT NULL DEFAULT '0',
  `grace_minutes` int NOT NULL DEFAULT '0',
  `exit_buffer_minutes` int NOT NULL DEFAULT '0',
  `entry_restriction_start` int NOT NULL DEFAULT '0',
  `lunch_break_min` int NOT NULL DEFAULT '0',
  `dinner_break_min` int NOT NULL DEFAULT '0',
  `tiffin_break_min` int NOT NULL DEFAULT '0',
  `ip_address` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `machine_name` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status_active` tinyint(1) NOT NULL DEFAULT '1',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `inserted_by` int NOT NULL DEFAULT '0',
  `insert_date` datetime DEFAULT NULL,
  `updated_by` int NOT NULL DEFAULT '0',
  `update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lib_policy_shift`
--

DROP TABLE IF EXISTS `lib_policy_shift`;
CREATE TABLE IF NOT EXISTS `lib_policy_shift` (
  `id` int NOT NULL AUTO_INCREMENT,
  `shift_name` varchar(64) COLLATE utf8mb4_general_ci NOT NULL,
  `shift_prefix` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `shift_type` tinyint(1) NOT NULL DEFAULT '0',
  `is_shift_crossdate` tinyint(1) NOT NULL DEFAULT '0',
  `shift_start` datetime NOT NULL,
  `shift_end` datetime NOT NULL,
  `grace_minutes` smallint NOT NULL DEFAULT '0',
  `exit_buffer_minutes` smallint NOT NULL DEFAULT '0',
  `entry_restriction_start` smallint NOT NULL DEFAULT '0',
  `early_out_start` smallint NOT NULL DEFAULT '0',
  `tiffin_start` datetime DEFAULT NULL,
  `tiffin_end` datetime DEFAULT NULL,
  `is_tiffin_crossdate` tinyint(1) NOT NULL DEFAULT '0',
  `dinner_start` datetime DEFAULT NULL,
  `dinner_end` datetime DEFAULT NULL,
  `is_dinner_crossdate` tinyint(1) NOT NULL DEFAULT '0',
  `lunch_start` datetime DEFAULT NULL,
  `lunch_end` datetime DEFAULT NULL,
  `is_lunch_crossdate` tinyint(1) NOT NULL DEFAULT '0',
  `intime_buffer` smallint NOT NULL DEFAULT '0',
  `is_access_control` tinyint(1) NOT NULL DEFAULT '0',
  `shift_closing` datetime DEFAULT NULL,
  `is_shift_closing_crossdate` tinyint(1) NOT NULL DEFAULT '0',
  `is_allow_ot_before_shift_start` tinyint(1) NOT NULL DEFAULT '0',
  `is_deduct_tiffin_time` tinyint(1) NOT NULL DEFAULT '0',
  `is_deduct_dinner_time` tinyint(1) NOT NULL DEFAULT '0',
  `is_entry_restriction_treat_absent` tinyint(1) NOT NULL DEFAULT '0',
  `overtime_policy_id` tinyint NOT NULL DEFAULT '0',
  `hd_start_min` smallint NOT NULL DEFAULT '0',
  `hd_end_min` smallint NOT NULL DEFAULT '0',
  `company_id` tinyint NOT NULL DEFAULT '0',
  `is_night_allowance_applicable` tinyint(1) NOT NULL DEFAULT '0',
  `is_buyer_mode` tinyint(1) NOT NULL DEFAULT '0',
  `inserted_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `status_active` tinyint(1) NOT NULL DEFAULT '1',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lib_policy_shift`
--

INSERT INTO `lib_policy_shift` (`id`, `shift_name`, `shift_prefix`, `shift_type`, `is_shift_crossdate`, `shift_start`, `shift_end`, `grace_minutes`, `exit_buffer_minutes`, `entry_restriction_start`, `early_out_start`, `tiffin_start`, `tiffin_end`, `is_tiffin_crossdate`, `dinner_start`, `dinner_end`, `is_dinner_crossdate`, `lunch_start`, `lunch_end`, `is_lunch_crossdate`, `intime_buffer`, `is_access_control`, `shift_closing`, `is_shift_closing_crossdate`, `is_allow_ot_before_shift_start`, `is_deduct_tiffin_time`, `is_deduct_dinner_time`, `is_entry_restriction_treat_absent`, `overtime_policy_id`, `hd_start_min`, `hd_end_min`, `company_id`, `is_night_allowance_applicable`, `is_buyer_mode`, `inserted_by`, `updated_by`, `status_active`, `is_deleted`, `createdAt`, `updatedAt`) VALUES
(1, 'General Shift', 'G', 0, 0, '2025-03-11 02:00:00', '2025-03-11 11:00:00', 0, 0, 0, 0, '2025-03-10 18:00:00', '2025-03-10 18:00:00', 0, '2025-03-10 18:00:00', '2025-03-10 18:00:00', 0, '2025-03-11 07:00:00', '2025-03-11 08:00:00', 0, 60, 0, '2025-03-12 01:00:00', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 1, 0, '2025-03-13 05:44:05', '2025-03-13 05:44:05');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `username_2` (`username`),
  UNIQUE KEY `username_3` (`username`),
  UNIQUE KEY `username_4` (`username`),
  UNIQUE KEY `username_5` (`username`),
  UNIQUE KEY `username_6` (`username`),
  UNIQUE KEY `username_7` (`username`),
  UNIQUE KEY `username_8` (`username`),
  UNIQUE KEY `username_9` (`username`),
  UNIQUE KEY `username_10` (`username`),
  UNIQUE KEY `username_11` (`username`),
  UNIQUE KEY `username_12` (`username`),
  UNIQUE KEY `username_13` (`username`),
  UNIQUE KEY `username_14` (`username`),
  UNIQUE KEY `username_15` (`username`),
  UNIQUE KEY `username_16` (`username`),
  UNIQUE KEY `username_17` (`username`),
  UNIQUE KEY `username_18` (`username`),
  UNIQUE KEY `username_19` (`username`),
  UNIQUE KEY `username_20` (`username`),
  UNIQUE KEY `username_21` (`username`),
  UNIQUE KEY `username_22` (`username`),
  UNIQUE KEY `username_23` (`username`),
  UNIQUE KEY `username_24` (`username`),
  UNIQUE KEY `username_25` (`username`),
  UNIQUE KEY `username_26` (`username`),
  UNIQUE KEY `username_27` (`username`),
  UNIQUE KEY `username_28` (`username`),
  UNIQUE KEY `username_29` (`username`),
  UNIQUE KEY `username_30` (`username`),
  UNIQUE KEY `username_31` (`username`),
  UNIQUE KEY `username_32` (`username`),
  UNIQUE KEY `username_33` (`username`),
  UNIQUE KEY `username_34` (`username`),
  UNIQUE KEY `username_35` (`username`),
  UNIQUE KEY `username_36` (`username`),
  UNIQUE KEY `username_37` (`username`),
  UNIQUE KEY `username_38` (`username`),
  UNIQUE KEY `username_39` (`username`),
  UNIQUE KEY `username_40` (`username`),
  UNIQUE KEY `username_41` (`username`),
  UNIQUE KEY `username_42` (`username`),
  UNIQUE KEY `username_43` (`username`),
  UNIQUE KEY `username_44` (`username`),
  UNIQUE KEY `username_45` (`username`),
  UNIQUE KEY `username_46` (`username`),
  UNIQUE KEY `username_47` (`username`),
  UNIQUE KEY `username_48` (`username`),
  UNIQUE KEY `username_49` (`username`),
  UNIQUE KEY `username_50` (`username`),
  UNIQUE KEY `username_51` (`username`),
  UNIQUE KEY `username_52` (`username`),
  UNIQUE KEY `username_53` (`username`),
  UNIQUE KEY `username_54` (`username`),
  UNIQUE KEY `username_55` (`username`),
  UNIQUE KEY `username_56` (`username`),
  UNIQUE KEY `username_57` (`username`),
  UNIQUE KEY `username_58` (`username`),
  UNIQUE KEY `username_59` (`username`),
  UNIQUE KEY `username_60` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'hello@example.com', '$2a$10$ryZuQ5d3WkzrHjMP7Bh3Au5ihnzrhSKELfaR.iuZvmGlKwsiryWpK', '2025-02-10 11:44:23', '2025-02-10 11:44:23'),
(5, 'hello2@example.com', '$2a$10$Ln/Kw6aWZFlKapu3rC8uTek4n0YEq.DviToWjF1mY7nfzcrpRsHVO', '2025-02-11 04:22:26', '2025-02-11 04:22:26'),
(6, 'hello3@example.com', '$2a$10$USFxr7bRG8361S4080S3BOFH.h0UbaijTA8aXEw0c0C1Ju1ceWngy', '2025-02-11 04:24:34', '2025-02-11 04:24:34');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
