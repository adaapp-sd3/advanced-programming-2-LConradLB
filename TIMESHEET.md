# Time Sheet
## Total Time: 33.6 hours worth of work

N.B. Quite a lot of time was spent trying to get save/Load game working. 
However due to the absurd number of circular references, this feature was not implemented.

### (1 hours)
commit e23e0ebcfa9554b9aaee175aeda3b793ab0201f8
Date:   Wed May 22 09:02:58 2019 +0100

    Feature - Added the ability to plant plants in fields of type Planting and content type of Plant.

### (.1 hours)
Date:   Wed May 22 00:02:14 2019 +0100

    TechDebt - correctly updates UI when field is wiped + Minor cleanup

### (.5 hours)
commit d5deb98695f25566ce39a4dd22f07251b6eaf323
Date:   Tue May 21 23:55:44 2019 +0100 

    TechDebt - Minor CSS style change. Updated Weather API text
    Updated farmerDashboard UI to not be debug colours. 
    Added temperature to the weather that is displayed (as it originally should have been).

### (2 hours)
commit ba89fe030e80d2a32fcc65fd18e184d20ddffc54
Date:   Mon May 20 19:38:24 2019 +0100 

    Added Weather API usage & refactored field cleanup
    Now using openWeatherApi to get weather and icon. Refactored how the field is doing clean up and fixed a bug where you couldn't place solar panels in a field
    Reacts was redirecting the fetch request to the localhost, ex: localhost:3000/api.openweather.... which was causing some issues.
    Added 'http://' to front of request and all works fine. Annoying small thing.


### (1 hours)
commit a614dc54173c8221649ea934eec546441c60bb5b (HEAD -> master, origin/master, origin/HEAD)
Date:   Mon May 20 13:49:11 2019 +0100 

    TechDebt - Refactored and cleaned up Field.ts

### (2 hours)
commit 86733b19bff18a6b1f0e6b6c584a5d3da5c8e7b7
Date:   Mon May 20 13:38:08 2019 +0100 

    Feature - Can successfully change the content of the field. Reflected in props and UI. Buying an animal adds it to the first field of that type. Can only buy an animal if you have a field for it - though you may still be charged.

### (1 hours)
commit d9a1846eaa7dfc1fecfa70f6de2fa22c265aa999
Date:   Mon May 20 13:15:38 2019 +0100 

    TechDebt - Field is now in charge of rendering everything in it.

### (3 hours)
commit c3dab878230d9a555d988fbc0c004a8c6f9a4273
Date:   Thu May 16 14:27:56 2019 +0100 

    Feature - Added the ability to change content of a field. FIXME: fix filter closure, give el a type

### (3 hours)
commit 37f89849751e877da53eadfb920af1cf90815094
Date:   Tue May 14 13:48:50 2019 +0100 

    Feature - Added the ability to buy solar panels. N.B. preload method in Infrastructure is broken - This took way too long to find.

### (2 hours)
commit ad58ecaba653922875ed1c7a43de565578525f14
Date:   Mon May 13 13:12:30 2019 +0100 

    Feature - Added ability to change field type using menu item.

### (3 hours)
commit c3cbc5470f071443e86c040dc3a36d15cea40b6b
Date:   Thu May 9 08:19:09 2019 +0100 

    TODO: Started work on save game method. 
    Everything has circular references to everything else. 
    Why is there not one source of truth?

### (1 hours)
commit 82163db720f6452e8a5feb9efa8030889b2ab824
Date:   Thu May 9 08:18:44 2019 +0100 

    TechDebt - Removed garbage collection logic. Altered enum to have associated value. Added class name to buttons

### (.5 hours)
commit 21a1f87bc05222382f72941e088e600ae1ddbc52
Date:   Thu May 9 08:16:34 2019 +0100 

    TechDebt - Updated CSS

### (.5 hours)
commit aaeed8b43dbf2daac7e802b88a5f7d8fcdfbc8cb
Date:   Thu May 9 08:16:05 2019 +0100 

    Feature - Added market resources to buy and sell. Added tabs to toggle between buy and sell on store.

### (3 hours)
commit 1a00a673abb6d19ce79ef4009a6c69f67b50ef4f
Date:   Wed May 1 13:59:00 2019 +0100 

    Feature - Added ability to place solar panels in an infrastructure field.

### (1 hours)
commit 48bf66dad6f69bb323e14b0645fe0ab7b9ac9b00
Date:   Wed May 1 13:58:03 2019 +0100 

    Feature - Added ability to buy solar panels, green gas generators and animals. Added ability to sell meat from animals and wool.

### (2 hours)
commit fdc15d96661da4303974dfeefaa4730b99b081c6
Date:   Wed May 1 13:49:49 2019 +0100 

    Feature - Given each field an enum type of FieldType; This gives each field a particular purpose. <U+2028>Added the Infrastructure class that has a type of TypeOfInfrastructure that allows instances to be of a specific type, such as a solar panel or gas generator

### (.5 hours)
commit 7e5d055dcf6904ee74fceb7f4730162f4cc5c980
Date:   Wed May 1 13:31:41 2019 +0100 

    Feature - Added the ability to gain meat from animals

### (.5 hours)
commit 76aecf3f575178050b4f57016ed38b1f3f08b3f2
Date:   Wed May 1 13:27:10 2019 +0100 

    TechDebt - Added CSS to make the market dashboard lay out with two columns, one for buying items and one for selling

### (6 hours)
commit 8a70db4a0cbe4076a0be49a08de22e39aaf4a4dd
Date:   Mon Apr 29 14:54:02 2019 +0100 

    Added chicken and sheep classes, that inherit from animal. All animal hunger starts from 0 and increases by 1 when an action is performed. You can now sell milk and beef at the market.
