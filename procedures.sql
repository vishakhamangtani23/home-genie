USE [homeGenie]
GO

/****** Object:  StoredProcedure [homeGenie].[insert_products]    Script Date: 11-05-2024 17:54:58 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE OR ALTER     PROCEDURE [homeGenie].[insert_products]
    @product_name VARCHAR(200),
	@product_price INT
AS
BEGIN
    DECLARE @new_slug NVARCHAR(MAX);
    SET @new_slug = CONCAT(@product_name, '_', NEWID());

    INSERT INTO homeGenie.products(product_name,product_price,slug)
    VALUES (@product_name,@product_price,LOWER(@new_slug));
END
GO

USE [homeGenie]
GO

/****** Object:  StoredProcedure [homeGenie].[insert_Services]    Script Date: 11-05-2024 17:55:45 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE OR ALTER   PROCEDURE [homeGenie].[insert_Services]
    @service_name VARCHAR(200)
AS
BEGIN
    DECLARE @new_slug NVARCHAR(MAX);
    SET @new_slug = CONCAT(@service_name, '_', NEWID());

    INSERT INTO homeGenie.services (service_name,slug)
    VALUES (@service_name,LOWER(@new_slug));
END
GO

USE [homeGenie]
GO

/****** Object:  StoredProcedure [homeGenie].[sp_fetch_products]    Script Date: 11-05-2024 17:56:03 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


/******************************
* Store Procedure : medium.sp_fetch_all_blogs
* Author      : Anjala
* Date        :  10/23/2023
* Description     : Script to fetch products
* Test Code      : EXEC homeGenie.sp_fetch_products
* Revision      : 
******************************/
CREATE OR ALTER     PROCEDURE [homeGenie].[sp_fetch_products]
AS
BEGIN
	SELECT p.id,p.product_name,p.product_price,r.rating
	FROM homeGenie.products p
	Inner Join homeGenie.review_ratings r
	ON p.id=r.product_id
END
GO
USE [homeGenie]
GO

/****** Object:  StoredProcedure [homeGenie].[sp_fetch_review]    Script Date: 11-05-2024 17:56:22 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


/******************************
* Store Procedure : medium.sp_fetch_all_blogs
* Author      : Anjala
* Date        :  10/23/2023
* Description     : Script to fetch services
* Test Code      : EXEC homeGenie.sp_fetch_review
* Revision      : 
******************************/
CREATE OR ALTER     PROCEDURE [homeGenie].[sp_fetch_review]
AS
BEGIN
	SELECT r.content,r.rating,u.username
	FROM homeGenie.review_ratings r
	Inner Join dbo.users u
	ON r.user_id=u.userid
END
GO


