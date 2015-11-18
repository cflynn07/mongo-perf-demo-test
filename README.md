# mongo-perf-demo-test

## Quick test of redis hash && mongodb unique-indexed collection fetch (seeded with 110,000 records)
#### Both lookups are O(1) time complex operations
```
/w/mongo-perf-demo-test git:master ❯❯❯ node index.js
connect null
-----------------------------
ed2e0094-030b-4fa6-b44e-09040a8e925f: 1ms
ed2e0094-030b-4fa6-b44e-09040a8e925f: 1ms
7f0ed8fd-37b2-4a3d-bc10-02a3a401aba7: 0ms
ce29a384-078b-43b9-b40d-877a011314c3: 0ms
7f0ed8fd-37b2-4a3d-bc10-02a3a401aba7: 1ms
ce29a384-078b-43b9-b40d-877a011314c3: 0ms
7f0ed8fd-37b2-4a3d-bc10-02a3a401aba7: 1ms
ed2e0094-030b-4fa6-b44e-09040a8e925f: 0ms
00634d6c-b8a5-41cc-90b0-b9de4baed281: 0ms
b5f552fa-2998-4c29-ab03-6632b9ec3597: 0ms
2b97ab4a-2263-47f2-b81e-8cfde41cbd7c: 1ms
953c2657-0bfd-4cf2-af1b-610185598360: 0ms
38108271-4a89-4375-80f8-64d6f1395097: 0ms
ce29a384-078b-43b9-b40d-877a011314c3: 1ms
902af78c-5c85-433e-be8a-326e2813aa16: 0ms
1a7ece78-eda2-4752-976a-bee597e946c2: 1ms
ed2e0094-030b-4fa6-b44e-09040a8e925f: 0ms
2b97ab4a-2263-47f2-b81e-8cfde41cbd7c: 0ms
87eaa0f1-7f5c-42af-a3e4-f535c890795d: 0ms
87eaa0f1-7f5c-42af-a3e4-f535c890795d: 1ms
aca95d57-5a62-42fe-a056-84fd1bbfa64c: 0ms
87eaa0f1-7f5c-42af-a3e4-f535c890795d: 2ms
87eaa0f1-7f5c-42af-a3e4-f535c890795d: 0ms
38108271-4a89-4375-80f8-64d6f1395097: 1ms
1a7ece78-eda2-4752-976a-bee597e946c2: 0ms
7f0ed8fd-37b2-4a3d-bc10-02a3a401aba7: 0ms
dd62d64e-512e-4b7d-bec6-2ad74e989e12: 1ms
f0c21399-3d60-400d-bc36-9d5ba6831b4f: 0ms
38108271-4a89-4375-80f8-64d6f1395097: 1ms
857be9bf-3aa8-4f39-b7e5-be6eb46c6899: 0ms
/w/mongo-perf-demo-test git:master ❯❯❯ node index-redis.js
-----------------------------
44300171-f272-4000-bc60-7758b3935b8d: 1ms
30510873-b2d1-45ba-8e4f-abd2c811ab7a: 0ms
7967c44e-0ffe-4cae-85de-53c2dda39d61: 1ms
79d205dc-abb2-4227-9dee-a42b6ead71a3: 0ms
a4005e85-4dfa-493a-b1f9-2ff60aa159b2: 0ms
b6d554d1-7022-4a26-be98-03551b7f0364: 0ms
328b8e46-ef69-4929-8c31-472b2e4ecc0d: 1ms
21015ff9-b11f-4065-bc90-7b117cfaa840: 1ms
82c91b6b-ef28-426d-b3ab-d3528233dc66: 0ms
bd129be1-7613-4d6b-b865-e76bb25df3a4: 0ms
11a375a8-3d96-4992-814b-b63629a8966e: 0ms
1cd403d7-5fc7-4c6b-9dad-8f22dcf52311: 0ms
1d906f53-b4a6-4745-9ff1-7645c0b3c32f: 0ms
92a60952-738f-48eb-a1e4-811674724c32: 0ms
4087ae6f-35fd-40b2-88f7-39361d618813: 0ms
752d2d86-1de2-4d2f-8927-40efbec69d5a: 1ms
0de1f2a1-b320-4fc2-9f98-ffdf6901182f: 0ms
f448c0e8-138a-49a2-b27a-c6f325dbcf0f: 0ms
e78c19ef-f5dd-44d9-b828-3f67edcacfd2: 0ms
e9ccb859-3566-470f-942f-717c1ce3dc62: 0ms
8c023bff-6ee1-4ede-8d57-9b86ffb7c775: 2ms
79004caa-7692-4c2f-aa72-c27b58fa5646: 0ms
125f4cfc-184d-4a4a-b954-759f1ee1ad96: 0ms
a1f73f49-46a7-4bc0-a687-409d32476b46: 0ms
44f43bc1-4be1-4c44-8d21-f125ec917746: 0ms
c85f16b2-9f28-4dc7-bf4f-74e4c107c218: 1ms
960169a9-b777-43ad-b40a-455a9c0155d7: 0ms
bb552d54-c5a2-40bd-a9c3-a81fa27764be: 0ms
2c41162d-33a2-4d84-ae5b-ddbeddd54e95: 0ms
698275f5-0ea7-4496-8eae-7f3a3abcf205: 0ms
```
