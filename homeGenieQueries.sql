create schema homeGenie;

--Products table
Create table homeGenie.products (
id INT PRIMARY KEY IDENTITY(1,1),
product_name VARCHAR(200),
product_price INT,
slug NVARCHAR(MAX));

--services table
Create table homeGenie.services (
id INT PRIMARY KEY IDENTITY(1,1),
service_name VARCHAR(200),
service_price INT,
slug NVARCHAR(MAX));

--users table
CREATE TABLE [dbo].[users](
	[userid] [int] IDENTITY(1,1) NOT NULL,
	[username] [varchar](200) NULL,
	[password] [varbinary](max) NULL,
	[email] [varchar](200) NULL,
	[fullname] [varchar](200) NULL,
	[mobile] [varchar](20) NULL,
	[token] [varchar](max) NULL,
	[time_to_expire] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[userid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

--forget password table
CREATE TABLE [dbo].[forgot_password_table](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [int] NULL,
	[token] [nvarchar](max) NULL,
	[time_to_expire] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[forgot_password_table] ADD  DEFAULT (getdate()) FOR [time_to_expire]
GO

ALTER TABLE [dbo].[forgot_password_table]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([userid])
GO

--workers table
--Create table dbo.workers(
--id INT PRIMARY KEY IDENTITY(1,1),
--worker_name VARCHAR(MAX),
--mobile VARCHAR(MAX),
--service_id INT,
--worker_identity_proof VARCHAR(MAX),
--FOREIGN KEY (service_id) REFERENCES homeGenie.services(id)
--)

--admin table
--CREATE TABLE [dbo].[admin](
--	[adminid] [int] IDENTITY(1,1) NOT NULL,
--	[username] [varchar](200) NULL,
--	[password] [varbinary](max) NULL,
--	[email] [varchar](200) NULL,
--	[fullname] [varchar](200) NULL,
--	[mobile] [varchar](20) NULL,
--	[token] [varchar](max) NULL,
--	[time_to_expire] [datetime] NULL,
--PRIMARY KEY CLUSTERED 
--(
--	[adminid] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
--UNIQUE NONCLUSTERED 
--(
--	[email] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
--UNIQUE NONCLUSTERED 
--(
--	[username] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
--) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
--GO

--categories table
Create table homeGenie.categories(
id INT PRIMARY KEY IDENTITY(1,1),
service_id INT,
category_name VARCHAR(200),
price INT,
FOREIGN KEY (service_id) REFERENCES homeGenie.services(id)
);

-- bookings table
Create table homeGenie.bookings(
id INT PRIMARY KEY IDENTITY(1,1),
user_id INT,
service_id INT,
product_id INT,
location VARCHAR(MAX),
address VARCHAR(MAX),
time_slot VARCHAR(MAX),
date datetime,
active_yn BINARY DEFAULT 1,
FOREIGN KEY (service_id) REFERENCES homeGenie.services(id),
FOREIGN KEY (user_id) REFERENCES dbo.users(userid),
FOREIGN KEY (product_id) REFERENCES homeGenie.products(id)
);

--cart table
Create table homeGenie.cart(
id INT PRIMARY KEY IDENTITY(1,1),
user_id INT,
service_id INT,
product_id INT,
active_yn BINARY DEFAULT 1,
FOREIGN KEY (service_id) REFERENCES homeGenie.services(id),
FOREIGN KEY (user_id) REFERENCES dbo.users(userid),
FOREIGN KEY (product_id) REFERENCES homeGenie.products(id));

--tracking table
Create table homeGenie.tracking_table(
id INT PRIMARY KEY IDENTITY(1,1),
booking_id INT,
status VARCHAR(MAX),
FOREIGN KEY (booking_id) REFERENCES homeGenie.bookings(id)
);

--review_ratings table
Create table homeGenie.review_ratings(
id INT PRIMARY KEY IDENTITY(1,1),
user_id INT,
service_id INT,
product_id INT,
worker_id INT,
content VARCHAR(MAX),
rating INT,
FOREIGN KEY (user_id) REFERENCES dbo.users(userid),
FOREIGN KEY (worker_id) REFERENCES dbo.users(userid),
FOREIGN KEY (product_id) REFERENCES homeGenie.products(id),
FOREIGN KEY (service_id) REFERENCES homeGenie.services(id),
)

CREATE TABLE dbo.roles(
id INT PRIMARY KEY IDENTITY(1,1),
role_name VARCHAR(200));

ALTER TABLE dbo.users
ADD role_id INT;

ALTER TABLE dbo.users
ADD CONSTRAINT FK_User_Role FOREIGN KEY (role_id) REFERENCES dbo.roles(id);