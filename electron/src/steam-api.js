"use strict";
exports.__esModule = true;
exports.SteamAPIDef = void 0;
exports.SteamAPIDef = {
    callback_structs: [
        {
            callback_id: 101,
            fields: [],
            struct: "SteamServersConnected_t"
        },
        {
            callback_id: 102,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_bStillRetrying", fieldtype: "bool" },
            ],
            struct: "SteamServerConnectFailure_t"
        },
        {
            callback_id: 103,
            fields: [{ fieldname: "m_eResult", fieldtype: "EResult" }],
            struct: "SteamServersDisconnected_t"
        },
        {
            callback_id: 113,
            fields: [
                { fieldname: "m_uAppID", fieldtype: "uint32" },
                { fieldname: "m_unGameServerIP", fieldtype: "uint32" },
                { fieldname: "m_usGameServerPort", fieldtype: "uint16" },
                { fieldname: "m_bSecure", fieldtype: "uint16" },
                { fieldname: "m_uReason", fieldtype: "uint32" },
            ],
            struct: "ClientGameServerDeny_t"
        },
        {
            callback_id: 117,
            enums: [
                {
                    enumname: "EFailureType",
                    fqname: "IPCFailure_t::EFailureType",
                    values: [
                        { name: "k_EFailureFlushedCallbackQueue", value: "0" },
                        { name: "k_EFailurePipeFail", value: "1" },
                    ]
                },
            ],
            fields: [{ fieldname: "m_eFailureType", fieldtype: "uint8" }],
            struct: "IPCFailure_t"
        },
        {
            callback_id: 125,
            fields: [],
            struct: "LicensesUpdated_t"
        },
        {
            callback_id: 143,
            fields: [
                { fieldname: "m_SteamID", fieldtype: "CSteamID" },
                { fieldname: "m_eAuthSessionResponse", fieldtype: "EAuthSessionResponse" },
                { fieldname: "m_OwnerSteamID", fieldtype: "CSteamID" },
            ],
            struct: "ValidateAuthTicketResponse_t"
        },
        {
            callback_id: 152,
            fields: [
                { fieldname: "m_unAppID", fieldtype: "uint32" },
                { fieldname: "m_ulOrderID", fieldtype: "uint64" },
                { fieldname: "m_bAuthorized", fieldtype: "uint8" },
            ],
            struct: "MicroTxnAuthorizationResponse_t"
        },
        {
            callback_id: 154,
            fields: [{ fieldname: "m_eResult", fieldtype: "EResult" }],
            struct: "EncryptedAppTicketResponse_t"
        },
        {
            callback_id: 163,
            fields: [
                { fieldname: "m_hAuthTicket", fieldtype: "HAuthTicket" },
                { fieldname: "m_eResult", fieldtype: "EResult" },
            ],
            struct: "GetAuthSessionTicketResponse_t"
        },
        {
            callback_id: 164,
            fields: [{ fieldname: "m_szURL", fieldtype: "char [256]" }],
            struct: "GameWebCallback_t"
        },
        {
            callback_id: 165,
            fields: [{ fieldname: "m_szURL", fieldtype: "char [512]" }],
            struct: "StoreAuthURLResponse_t"
        },
        {
            callback_id: 166,
            fields: [
                { fieldname: "m_bAllowed", fieldtype: "bool" },
                { fieldname: "m_eNotAllowedReason", fieldtype: "EMarketNotAllowedReasonFlags" },
                { fieldname: "m_rtAllowedAtTime", fieldtype: "RTime32" },
                { fieldname: "m_cdaySteamGuardRequiredDays", fieldtype: "int" },
                { fieldname: "m_cdayNewDeviceCooldown", fieldtype: "int" },
            ],
            struct: "MarketEligibilityResponse_t"
        },
        {
            callback_id: 167,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_appid", fieldtype: "AppId_t" },
                { fieldname: "m_bApplicable", fieldtype: "bool" },
                { fieldname: "m_csecsLast5h", fieldtype: "int32" },
                { fieldname: "m_progress", fieldtype: "EDurationControlProgress" },
                { fieldname: "m_notification", fieldtype: "EDurationControlNotification" },
                { fieldname: "m_csecsToday", fieldtype: "int32" },
                { fieldname: "m_csecsRemaining", fieldtype: "int32" },
            ],
            struct: "DurationControl_t"
        },
        {
            callback_id: 304,
            fields: [
                { fieldname: "m_ulSteamID", fieldtype: "uint64" },
                { fieldname: "m_nChangeFlags", fieldtype: "int" },
            ],
            struct: "PersonaStateChange_t"
        },
        {
            callback_id: 331,
            fields: [{ fieldname: "m_bActive", fieldtype: "uint8" }],
            struct: "GameOverlayActivated_t"
        },
        {
            callback_id: 332,
            fields: [
                { fieldname: "m_rgchServer", fieldtype: "char [64]" },
                { fieldname: "m_rgchPassword", fieldtype: "char [64]" },
            ],
            struct: "GameServerChangeRequested_t"
        },
        {
            callback_id: 333,
            fields: [
                { fieldname: "m_steamIDLobby", fieldtype: "CSteamID" },
                { fieldname: "m_steamIDFriend", fieldtype: "CSteamID" },
            ],
            struct: "GameLobbyJoinRequested_t"
        },
        {
            callback_id: 334,
            fields: [
                { fieldname: "m_steamID", fieldtype: "CSteamID" },
                { fieldname: "m_iImage", fieldtype: "int" },
                { fieldname: "m_iWide", fieldtype: "int" },
                { fieldname: "m_iTall", fieldtype: "int" },
            ],
            struct: "AvatarImageLoaded_t"
        },
        {
            callback_id: 335,
            fields: [
                { fieldname: "m_steamIDClan", fieldtype: "CSteamID" },
                { fieldname: "m_cOfficers", fieldtype: "int" },
                { fieldname: "m_bSuccess", fieldtype: "uint8" },
            ],
            struct: "ClanOfficerListResponse_t"
        },
        {
            callback_id: 336,
            fields: [
                { fieldname: "m_steamIDFriend", fieldtype: "CSteamID" },
                { fieldname: "m_nAppID", fieldtype: "AppId_t" },
            ],
            struct: "FriendRichPresenceUpdate_t"
        },
        {
            callback_id: 337,
            fields: [
                { fieldname: "m_steamIDFriend", fieldtype: "CSteamID" },
                { fieldname: "m_rgchConnect", fieldtype: "char [256]" },
            ],
            struct: "GameRichPresenceJoinRequested_t"
        },
        {
            callback_id: 338,
            fields: [
                { fieldname: "m_steamIDClanChat", fieldtype: "CSteamID" },
                { fieldname: "m_steamIDUser", fieldtype: "CSteamID" },
                { fieldname: "m_iMessageID", fieldtype: "int" },
            ],
            struct: "GameConnectedClanChatMsg_t"
        },
        {
            callback_id: 339,
            fields: [
                { fieldname: "m_steamIDClanChat", fieldtype: "CSteamID" },
                { fieldname: "m_steamIDUser", fieldtype: "CSteamID" },
            ],
            struct: "GameConnectedChatJoin_t"
        },
        {
            callback_id: 340,
            fields: [
                { fieldname: "m_steamIDClanChat", fieldtype: "CSteamID" },
                { fieldname: "m_steamIDUser", fieldtype: "CSteamID" },
                { fieldname: "m_bKicked", fieldtype: "bool" },
                { fieldname: "m_bDropped", fieldtype: "bool" },
            ],
            struct: "GameConnectedChatLeave_t"
        },
        {
            callback_id: 341,
            fields: [{ fieldname: "m_bSuccess", fieldtype: "bool" }],
            struct: "DownloadClanActivityCountsResult_t"
        },
        {
            callback_id: 342,
            fields: [
                { fieldname: "m_steamIDClanChat", fieldtype: "CSteamID" },
                { fieldname: "m_eChatRoomEnterResponse", fieldtype: "EChatRoomEnterResponse" },
            ],
            struct: "JoinClanChatRoomCompletionResult_t"
        },
        {
            callback_id: 343,
            fields: [
                { fieldname: "m_steamIDUser", fieldtype: "CSteamID" },
                { fieldname: "m_iMessageID", fieldtype: "int" },
            ],
            struct: "GameConnectedFriendChatMsg_t"
        },
        {
            callback_id: 344,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_steamID", fieldtype: "CSteamID" },
                { fieldname: "m_nCount", fieldtype: "int" },
            ],
            struct: "FriendsGetFollowerCount_t"
        },
        {
            callback_id: 345,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_steamID", fieldtype: "CSteamID" },
                { fieldname: "m_bIsFollowing", fieldtype: "bool" },
            ],
            struct: "FriendsIsFollowing_t"
        },
        {
            callback_id: 346,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_rgSteamID", fieldtype: "CSteamID [50]" },
                { fieldname: "m_nResultsReturned", fieldtype: "int32" },
                { fieldname: "m_nTotalResultCount", fieldtype: "int32" },
            ],
            struct: "FriendsEnumerateFollowingList_t"
        },
        {
            callback_id: 347,
            fields: [
                { fieldname: "m_bSuccess", fieldtype: "bool" },
                { fieldname: "m_bLocalSuccess", fieldtype: "bool" },
                { fieldname: "m_result", fieldtype: "EResult" },
            ],
            struct: "SetPersonaNameResponse_t"
        },
        {
            callback_id: 348,
            fields: [],
            struct: "UnreadChatMessagesChanged_t"
        },
        {
            callback_id: 349,
            fields: [{ fieldname: "rgchURI", fieldtype: "char [1024]" }],
            struct: "OverlayBrowserProtocolNavigation_t"
        },
        {
            callback_id: 701,
            fields: [],
            struct: "IPCountry_t"
        },
        {
            callback_id: 702,
            fields: [{ fieldname: "m_nMinutesBatteryLeft", fieldtype: "uint8" }],
            struct: "LowBatteryPower_t"
        },
        {
            callback_id: 703,
            fields: [
                { fieldname: "m_hAsyncCall", fieldtype: "SteamAPICall_t" },
                { fieldname: "m_iCallback", fieldtype: "int" },
                { fieldname: "m_cubParam", fieldtype: "uint32" },
            ],
            struct: "SteamAPICallCompleted_t"
        },
        {
            callback_id: 704,
            fields: [],
            struct: "SteamShutdown_t"
        },
        {
            callback_id: 705,
            fields: [{ fieldname: "m_eCheckFileSignature", fieldtype: "ECheckFileSignature" }],
            struct: "CheckFileSignature_t"
        },
        {
            callback_id: 714,
            fields: [
                { fieldname: "m_bSubmitted", fieldtype: "bool" },
                { fieldname: "m_unSubmittedText", fieldtype: "uint32" },
            ],
            struct: "GamepadTextInputDismissed_t"
        },
        {
            callback_id: 736,
            fields: [],
            struct: "AppResumingFromSuspend_t"
        },
        {
            callback_id: 738,
            fields: [],
            struct: "FloatingGamepadTextInputDismissed_t"
        },
        {
            callback_id: 502,
            fields: [
                { fieldname: "m_nIP", fieldtype: "uint32" },
                { fieldname: "m_nQueryPort", fieldtype: "uint32" },
                { fieldname: "m_nConnPort", fieldtype: "uint32" },
                { fieldname: "m_nAppID", fieldtype: "uint32" },
                { fieldname: "m_nFlags", fieldtype: "uint32" },
                { fieldname: "m_bAdd", fieldtype: "bool" },
                { fieldname: "m_unAccountId", fieldtype: "AccountID_t" },
            ],
            struct: "FavoritesListChanged_t"
        },
        {
            callback_id: 503,
            fields: [
                { fieldname: "m_ulSteamIDUser", fieldtype: "uint64" },
                { fieldname: "m_ulSteamIDLobby", fieldtype: "uint64" },
                { fieldname: "m_ulGameID", fieldtype: "uint64" },
            ],
            struct: "LobbyInvite_t"
        },
        {
            callback_id: 504,
            fields: [
                { fieldname: "m_ulSteamIDLobby", fieldtype: "uint64" },
                { fieldname: "m_rgfChatPermissions", fieldtype: "uint32" },
                { fieldname: "m_bLocked", fieldtype: "bool" },
                { fieldname: "m_EChatRoomEnterResponse", fieldtype: "uint32" },
            ],
            struct: "LobbyEnter_t"
        },
        {
            callback_id: 505,
            fields: [
                { fieldname: "m_ulSteamIDLobby", fieldtype: "uint64" },
                { fieldname: "m_ulSteamIDMember", fieldtype: "uint64" },
                { fieldname: "m_bSuccess", fieldtype: "uint8" },
            ],
            struct: "LobbyDataUpdate_t"
        },
        {
            callback_id: 506,
            fields: [
                { fieldname: "m_ulSteamIDLobby", fieldtype: "uint64" },
                { fieldname: "m_ulSteamIDUserChanged", fieldtype: "uint64" },
                { fieldname: "m_ulSteamIDMakingChange", fieldtype: "uint64" },
                { fieldname: "m_rgfChatMemberStateChange", fieldtype: "uint32" },
            ],
            struct: "LobbyChatUpdate_t"
        },
        {
            callback_id: 507,
            fields: [
                { fieldname: "m_ulSteamIDLobby", fieldtype: "uint64" },
                { fieldname: "m_ulSteamIDUser", fieldtype: "uint64" },
                { fieldname: "m_eChatEntryType", fieldtype: "uint8" },
                { fieldname: "m_iChatID", fieldtype: "uint32" },
            ],
            struct: "LobbyChatMsg_t"
        },
        {
            callback_id: 509,
            fields: [
                { fieldname: "m_ulSteamIDLobby", fieldtype: "uint64" },
                { fieldname: "m_ulSteamIDGameServer", fieldtype: "uint64" },
                { fieldname: "m_unIP", fieldtype: "uint32" },
                { fieldname: "m_usPort", fieldtype: "uint16" },
            ],
            struct: "LobbyGameCreated_t"
        },
        {
            callback_id: 510,
            fields: [{ fieldname: "m_nLobbiesMatching", fieldtype: "uint32" }],
            struct: "LobbyMatchList_t"
        },
        {
            callback_id: 512,
            fields: [
                { fieldname: "m_ulSteamIDLobby", fieldtype: "uint64" },
                { fieldname: "m_ulSteamIDAdmin", fieldtype: "uint64" },
                { fieldname: "m_bKickedDueToDisconnect", fieldtype: "uint8" },
            ],
            struct: "LobbyKicked_t"
        },
        {
            callback_id: 513,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_ulSteamIDLobby", fieldtype: "uint64" },
            ],
            struct: "LobbyCreated_t"
        },
        {
            callback_id: 515,
            fields: [
                { fieldname: "m_bGameBootInviteExists", fieldtype: "bool" },
                { fieldname: "m_steamIDLobby", fieldtype: "CSteamID" },
            ],
            struct: "PSNGameBootInviteResult_t"
        },
        {
            callback_id: 516,
            fields: [{ fieldname: "m_eResult", fieldtype: "EResult" }],
            struct: "FavoritesListAccountsUpdated_t"
        },
        {
            callback_id: 5201,
            fields: [
                { fieldname: "m_ullSearchID", fieldtype: "uint64" },
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_lobbyID", fieldtype: "CSteamID" },
                { fieldname: "m_steamIDEndedSearch", fieldtype: "CSteamID" },
                { fieldname: "m_nSecondsRemainingEstimate", fieldtype: "int32" },
                { fieldname: "m_cPlayersSearching", fieldtype: "int32" },
            ],
            struct: "SearchForGameProgressCallback_t"
        },
        {
            callback_id: 5202,
            fields: [
                { fieldname: "m_ullSearchID", fieldtype: "uint64" },
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nCountPlayersInGame", fieldtype: "int32" },
                { fieldname: "m_nCountAcceptedGame", fieldtype: "int32" },
                { fieldname: "m_steamIDHost", fieldtype: "CSteamID" },
                { fieldname: "m_bFinalCallback", fieldtype: "bool" },
            ],
            struct: "SearchForGameResultCallback_t"
        },
        {
            callback_id: 5211,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_ullSearchID", fieldtype: "uint64" },
            ],
            struct: "RequestPlayersForGameProgressCallback_t"
        },
        {
            callback_id: 5212,
            enums: [
                {
                    enumname: "PlayerAcceptState_t",
                    fqname: "RequestPlayersForGameResultCallback_t::PlayerAcceptState_t",
                    values: [
                        { name: "k_EStateUnknown", value: "0" },
                        { name: "k_EStatePlayerAccepted", value: "1" },
                        { name: "k_EStatePlayerDeclined", value: "2" },
                    ]
                },
            ],
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_ullSearchID", fieldtype: "uint64" },
                { fieldname: "m_SteamIDPlayerFound", fieldtype: "CSteamID" },
                { fieldname: "m_SteamIDLobby", fieldtype: "CSteamID" },
                {
                    fieldname: "m_ePlayerAcceptState",
                    fieldtype: "RequestPlayersForGameResultCallback_t::PlayerAcceptState_t"
                },
                { fieldname: "m_nPlayerIndex", fieldtype: "int32" },
                { fieldname: "m_nTotalPlayersFound", fieldtype: "int32" },
                { fieldname: "m_nTotalPlayersAcceptedGame", fieldtype: "int32" },
                { fieldname: "m_nSuggestedTeamIndex", fieldtype: "int32" },
                { fieldname: "m_ullUniqueGameID", fieldtype: "uint64" },
            ],
            struct: "RequestPlayersForGameResultCallback_t"
        },
        {
            callback_id: 5213,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_ullSearchID", fieldtype: "uint64" },
                { fieldname: "m_ullUniqueGameID", fieldtype: "uint64" },
            ],
            struct: "RequestPlayersForGameFinalResultCallback_t"
        },
        {
            callback_id: 5214,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "ullUniqueGameID", fieldtype: "uint64" },
                { fieldname: "steamIDPlayer", fieldtype: "CSteamID" },
            ],
            struct: "SubmitPlayerResultResultCallback_t"
        },
        {
            callback_id: 5215,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "ullUniqueGameID", fieldtype: "uint64" },
            ],
            struct: "EndGameResultCallback_t"
        },
        {
            callback_id: 5301,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_ulBeaconID", fieldtype: "PartyBeaconID_t" },
                { fieldname: "m_SteamIDBeaconOwner", fieldtype: "CSteamID" },
                { fieldname: "m_rgchConnectString", fieldtype: "char [256]" },
            ],
            struct: "JoinPartyCallback_t"
        },
        {
            callback_id: 5302,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_ulBeaconID", fieldtype: "PartyBeaconID_t" },
            ],
            struct: "CreateBeaconCallback_t"
        },
        {
            callback_id: 5303,
            fields: [
                { fieldname: "m_ulBeaconID", fieldtype: "PartyBeaconID_t" },
                { fieldname: "m_steamIDJoiner", fieldtype: "CSteamID" },
            ],
            struct: "ReservationNotificationCallback_t"
        },
        {
            callback_id: 5304,
            fields: [{ fieldname: "m_eResult", fieldtype: "EResult" }],
            struct: "ChangeNumOpenSlotsCallback_t"
        },
        {
            callback_id: 5305,
            fields: [],
            struct: "AvailableBeaconLocationsUpdated_t"
        },
        {
            callback_id: 5306,
            fields: [],
            struct: "ActiveBeaconsUpdated_t"
        },
        {
            callback_id: 1307,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_hFile", fieldtype: "UGCHandle_t" },
                { fieldname: "m_rgchFilename", fieldtype: "char [260]" },
            ],
            struct: "RemoteStorageFileShareResult_t"
        },
        {
            callback_id: 1309,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_bUserNeedsToAcceptWorkshopLegalAgreement", fieldtype: "bool" },
            ],
            struct: "RemoteStoragePublishFileResult_t"
        },
        {
            callback_id: 1311,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
            ],
            struct: "RemoteStorageDeletePublishedFileResult_t"
        },
        {
            callback_id: 1312,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nResultsReturned", fieldtype: "int32" },
                { fieldname: "m_nTotalResultCount", fieldtype: "int32" },
                { fieldname: "m_rgPublishedFileId", fieldtype: "PublishedFileId_t [50]" },
            ],
            struct: "RemoteStorageEnumerateUserPublishedFilesResult_t"
        },
        {
            callback_id: 1313,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
            ],
            struct: "RemoteStorageSubscribePublishedFileResult_t"
        },
        {
            callback_id: 1314,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nResultsReturned", fieldtype: "int32" },
                { fieldname: "m_nTotalResultCount", fieldtype: "int32" },
                { fieldname: "m_rgPublishedFileId", fieldtype: "PublishedFileId_t [50]" },
                { fieldname: "m_rgRTimeSubscribed", fieldtype: "uint32 [50]" },
            ],
            struct: "RemoteStorageEnumerateUserSubscribedFilesResult_t"
        },
        {
            callback_id: 1315,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
            ],
            struct: "RemoteStorageUnsubscribePublishedFileResult_t"
        },
        {
            callback_id: 1316,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_bUserNeedsToAcceptWorkshopLegalAgreement", fieldtype: "bool" },
            ],
            struct: "RemoteStorageUpdatePublishedFileResult_t"
        },
        {
            callback_id: 1317,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_hFile", fieldtype: "UGCHandle_t" },
                { fieldname: "m_nAppID", fieldtype: "AppId_t" },
                { fieldname: "m_nSizeInBytes", fieldtype: "int32" },
                { fieldname: "m_pchFileName", fieldtype: "char [260]" },
                { fieldname: "m_ulSteamIDOwner", fieldtype: "uint64" },
            ],
            struct: "RemoteStorageDownloadUGCResult_t"
        },
        {
            callback_id: 1318,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_nCreatorAppID", fieldtype: "AppId_t" },
                { fieldname: "m_nConsumerAppID", fieldtype: "AppId_t" },
                { fieldname: "m_rgchTitle", fieldtype: "char [129]" },
                { fieldname: "m_rgchDescription", fieldtype: "char [8000]" },
                { fieldname: "m_hFile", fieldtype: "UGCHandle_t" },
                { fieldname: "m_hPreviewFile", fieldtype: "UGCHandle_t" },
                { fieldname: "m_ulSteamIDOwner", fieldtype: "uint64" },
                { fieldname: "m_rtimeCreated", fieldtype: "uint32" },
                { fieldname: "m_rtimeUpdated", fieldtype: "uint32" },
                { fieldname: "m_eVisibility", fieldtype: "ERemoteStoragePublishedFileVisibility" },
                { fieldname: "m_bBanned", fieldtype: "bool" },
                { fieldname: "m_rgchTags", fieldtype: "char [1025]" },
                { fieldname: "m_bTagsTruncated", fieldtype: "bool" },
                { fieldname: "m_pchFileName", fieldtype: "char [260]" },
                { fieldname: "m_nFileSize", fieldtype: "int32" },
                { fieldname: "m_nPreviewFileSize", fieldtype: "int32" },
                { fieldname: "m_rgchURL", fieldtype: "char [256]" },
                { fieldname: "m_eFileType", fieldtype: "EWorkshopFileType" },
                { fieldname: "m_bAcceptedForUse", fieldtype: "bool" },
            ],
            struct: "RemoteStorageGetPublishedFileDetailsResult_t"
        },
        {
            callback_id: 1319,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nResultsReturned", fieldtype: "int32" },
                { fieldname: "m_nTotalResultCount", fieldtype: "int32" },
                { fieldname: "m_rgPublishedFileId", fieldtype: "PublishedFileId_t [50]" },
                { fieldname: "m_rgScore", fieldtype: "float [50]" },
                { fieldname: "m_nAppId", fieldtype: "AppId_t" },
                { fieldname: "m_unStartIndex", fieldtype: "uint32" },
            ],
            struct: "RemoteStorageEnumerateWorkshopFilesResult_t"
        },
        {
            callback_id: 1320,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_unPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_nVotesFor", fieldtype: "int32" },
                { fieldname: "m_nVotesAgainst", fieldtype: "int32" },
                { fieldname: "m_nReports", fieldtype: "int32" },
                { fieldname: "m_fScore", fieldtype: "float" },
            ],
            struct: "RemoteStorageGetPublishedItemVoteDetailsResult_t"
        },
        {
            callback_id: 1321,
            fields: [
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_nAppID", fieldtype: "AppId_t" },
            ],
            struct: "RemoteStoragePublishedFileSubscribed_t"
        },
        {
            callback_id: 1322,
            fields: [
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_nAppID", fieldtype: "AppId_t" },
            ],
            struct: "RemoteStoragePublishedFileUnsubscribed_t"
        },
        {
            callback_id: 1323,
            fields: [
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_nAppID", fieldtype: "AppId_t" },
            ],
            struct: "RemoteStoragePublishedFileDeleted_t"
        },
        {
            callback_id: 1324,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
            ],
            struct: "RemoteStorageUpdateUserPublishedItemVoteResult_t"
        },
        {
            callback_id: 1325,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_eVote", fieldtype: "EWorkshopVote" },
            ],
            struct: "RemoteStorageUserVoteDetails_t"
        },
        {
            callback_id: 1326,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nResultsReturned", fieldtype: "int32" },
                { fieldname: "m_nTotalResultCount", fieldtype: "int32" },
                { fieldname: "m_rgPublishedFileId", fieldtype: "PublishedFileId_t [50]" },
            ],
            struct: "RemoteStorageEnumerateUserSharedWorkshopFilesResult_t"
        },
        {
            callback_id: 1327,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_eAction", fieldtype: "EWorkshopFileAction" },
            ],
            struct: "RemoteStorageSetUserPublishedFileActionResult_t"
        },
        {
            callback_id: 1328,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_eAction", fieldtype: "EWorkshopFileAction" },
                { fieldname: "m_nResultsReturned", fieldtype: "int32" },
                { fieldname: "m_nTotalResultCount", fieldtype: "int32" },
                { fieldname: "m_rgPublishedFileId", fieldtype: "PublishedFileId_t [50]" },
                { fieldname: "m_rgRTimeUpdated", fieldtype: "uint32 [50]" },
            ],
            struct: "RemoteStorageEnumeratePublishedFilesByUserActionResult_t"
        },
        {
            callback_id: 1329,
            fields: [
                { fieldname: "m_dPercentFile", fieldtype: "double" },
                { fieldname: "m_bPreview", fieldtype: "bool" },
            ],
            struct: "RemoteStoragePublishFileProgress_t"
        },
        {
            callback_id: 1330,
            fields: [
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_nAppID", fieldtype: "AppId_t" },
                { fieldname: "m_ulUnused", fieldtype: "uint64" },
            ],
            struct: "RemoteStoragePublishedFileUpdated_t"
        },
        {
            callback_id: 1331,
            fields: [{ fieldname: "m_eResult", fieldtype: "EResult" }],
            struct: "RemoteStorageFileWriteAsyncComplete_t"
        },
        {
            callback_id: 1332,
            fields: [
                { fieldname: "m_hFileReadAsync", fieldtype: "SteamAPICall_t" },
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nOffset", fieldtype: "uint32" },
                { fieldname: "m_cubRead", fieldtype: "uint32" },
            ],
            struct: "RemoteStorageFileReadAsyncComplete_t"
        },
        {
            callback_id: 1333,
            fields: [],
            struct: "RemoteStorageLocalFileChange_t"
        },
        {
            callback_id: 1101,
            fields: [
                { fieldname: "m_nGameID", fieldtype: "uint64" },
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_steamIDUser", fieldtype: "CSteamID" },
            ],
            struct: "UserStatsReceived_t"
        },
        {
            callback_id: 1102,
            fields: [
                { fieldname: "m_nGameID", fieldtype: "uint64" },
                { fieldname: "m_eResult", fieldtype: "EResult" },
            ],
            struct: "UserStatsStored_t"
        },
        {
            callback_id: 1103,
            fields: [
                { fieldname: "m_nGameID", fieldtype: "uint64" },
                { fieldname: "m_bGroupAchievement", fieldtype: "bool" },
                { fieldname: "m_rgchAchievementName", fieldtype: "char [128]" },
                { fieldname: "m_nCurProgress", fieldtype: "uint32" },
                { fieldname: "m_nMaxProgress", fieldtype: "uint32" },
            ],
            struct: "UserAchievementStored_t"
        },
        {
            callback_id: 1104,
            fields: [
                { fieldname: "m_hSteamLeaderboard", fieldtype: "SteamLeaderboard_t" },
                { fieldname: "m_bLeaderboardFound", fieldtype: "uint8" },
            ],
            struct: "LeaderboardFindResult_t"
        },
        {
            callback_id: 1105,
            fields: [
                { fieldname: "m_hSteamLeaderboard", fieldtype: "SteamLeaderboard_t" },
                { fieldname: "m_hSteamLeaderboardEntries", fieldtype: "SteamLeaderboardEntries_t" },
                { fieldname: "m_cEntryCount", fieldtype: "int" },
            ],
            struct: "LeaderboardScoresDownloaded_t"
        },
        {
            callback_id: 1106,
            fields: [
                { fieldname: "m_bSuccess", fieldtype: "uint8" },
                { fieldname: "m_hSteamLeaderboard", fieldtype: "SteamLeaderboard_t" },
                { fieldname: "m_nScore", fieldtype: "int32" },
                { fieldname: "m_bScoreChanged", fieldtype: "uint8" },
                { fieldname: "m_nGlobalRankNew", fieldtype: "int" },
                { fieldname: "m_nGlobalRankPrevious", fieldtype: "int" },
            ],
            struct: "LeaderboardScoreUploaded_t"
        },
        {
            callback_id: 1107,
            fields: [
                { fieldname: "m_bSuccess", fieldtype: "uint8" },
                { fieldname: "m_cPlayers", fieldtype: "int32" },
            ],
            struct: "NumberOfCurrentPlayers_t"
        },
        {
            callback_id: 1108,
            fields: [{ fieldname: "m_steamIDUser", fieldtype: "CSteamID" }],
            struct: "UserStatsUnloaded_t"
        },
        {
            callback_id: 1109,
            fields: [
                { fieldname: "m_nGameID", fieldtype: "CGameID" },
                { fieldname: "m_rgchAchievementName", fieldtype: "char [128]" },
                { fieldname: "m_bAchieved", fieldtype: "bool" },
                { fieldname: "m_nIconHandle", fieldtype: "int" },
            ],
            struct: "UserAchievementIconFetched_t"
        },
        {
            callback_id: 1110,
            fields: [
                { fieldname: "m_nGameID", fieldtype: "uint64" },
                { fieldname: "m_eResult", fieldtype: "EResult" },
            ],
            struct: "GlobalAchievementPercentagesReady_t"
        },
        {
            callback_id: 1111,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_hSteamLeaderboard", fieldtype: "SteamLeaderboard_t" },
            ],
            struct: "LeaderboardUGCSet_t"
        },
        {
            callback_id: 1112,
            fields: [
                { fieldname: "m_nGameID", fieldtype: "uint64" },
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_ulRequiredDiskSpace", fieldtype: "uint64" },
            ],
            struct: "PS3TrophiesInstalled_t"
        },
        {
            callback_id: 1112,
            fields: [
                { fieldname: "m_nGameID", fieldtype: "uint64" },
                { fieldname: "m_eResult", fieldtype: "EResult" },
            ],
            struct: "GlobalStatsReceived_t"
        },
        {
            callback_id: 1005,
            fields: [{ fieldname: "m_nAppID", fieldtype: "AppId_t" }],
            struct: "DlcInstalled_t"
        },
        {
            callback_id: 1008,
            fields: [
                { fieldname: "m_eResult", fieldtype: "ERegisterActivationCodeResult" },
                { fieldname: "m_unPackageRegistered", fieldtype: "uint32" },
            ],
            struct: "RegisterActivationCodeResponse_t"
        },
        {
            callback_id: 1014,
            fields: [],
            struct: "NewUrlLaunchParameters_t"
        },
        {
            callback_id: 1021,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nAppID", fieldtype: "uint32" },
                { fieldname: "m_cchKeyLength", fieldtype: "uint32" },
                { fieldname: "m_rgchKey", fieldtype: "char [240]" },
            ],
            struct: "AppProofOfPurchaseKeyResponse_t"
        },
        {
            callback_id: 1023,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_ulFileSize", fieldtype: "uint64" },
                { fieldname: "m_FileSHA", fieldtype: "uint8 [20]" },
                { fieldname: "m_unFlags", fieldtype: "uint32" },
            ],
            struct: "FileDetailsResult_t"
        },
        {
            callback_id: 1030,
            fields: [
                { fieldname: "m_unAppID", fieldtype: "AppId_t" },
                { fieldname: "m_bIsOffline", fieldtype: "bool" },
                { fieldname: "m_unSecondsAllowed", fieldtype: "uint32" },
                { fieldname: "m_unSecondsPlayed", fieldtype: "uint32" },
            ],
            struct: "TimedTrialStatus_t"
        },
        {
            callback_id: 1202,
            fields: [{ fieldname: "m_steamIDRemote", fieldtype: "CSteamID" }],
            struct: "P2PSessionRequest_t"
        },
        {
            callback_id: 1203,
            fields: [
                { fieldname: "m_steamIDRemote", fieldtype: "CSteamID" },
                { fieldname: "m_eP2PSessionError", fieldtype: "uint8" },
            ],
            struct: "P2PSessionConnectFail_t"
        },
        {
            callback_id: 1201,
            fields: [
                { fieldname: "m_hSocket", fieldtype: "SNetSocket_t" },
                { fieldname: "m_hListenSocket", fieldtype: "SNetListenSocket_t" },
                { fieldname: "m_steamIDRemote", fieldtype: "CSteamID" },
                { fieldname: "m_eSNetSocketState", fieldtype: "int" },
            ],
            struct: "SocketStatusCallback_t"
        },
        {
            callback_id: 2301,
            fields: [
                { fieldname: "m_hLocal", fieldtype: "ScreenshotHandle" },
                { fieldname: "m_eResult", fieldtype: "EResult" },
            ],
            struct: "ScreenshotReady_t"
        },
        {
            callback_id: 2302,
            fields: [],
            struct: "ScreenshotRequested_t"
        },
        {
            callback_id: 4001,
            fields: [],
            struct: "PlaybackStatusHasChanged_t"
        },
        {
            callback_id: 4002,
            fields: [{ fieldname: "m_flNewVolume", fieldtype: "float" }],
            struct: "VolumeHasChanged_t"
        },
        {
            callback_id: 4101,
            fields: [],
            struct: "MusicPlayerRemoteWillActivate_t"
        },
        {
            callback_id: 4102,
            fields: [],
            struct: "MusicPlayerRemoteWillDeactivate_t"
        },
        {
            callback_id: 4103,
            fields: [],
            struct: "MusicPlayerRemoteToFront_t"
        },
        {
            callback_id: 4104,
            fields: [],
            struct: "MusicPlayerWillQuit_t"
        },
        {
            callback_id: 4105,
            fields: [],
            struct: "MusicPlayerWantsPlay_t"
        },
        {
            callback_id: 4106,
            fields: [],
            struct: "MusicPlayerWantsPause_t"
        },
        {
            callback_id: 4107,
            fields: [],
            struct: "MusicPlayerWantsPlayPrevious_t"
        },
        {
            callback_id: 4108,
            fields: [],
            struct: "MusicPlayerWantsPlayNext_t"
        },
        {
            callback_id: 4109,
            fields: [{ fieldname: "m_bShuffled", fieldtype: "bool" }],
            struct: "MusicPlayerWantsShuffled_t"
        },
        {
            callback_id: 4110,
            fields: [{ fieldname: "m_bLooped", fieldtype: "bool" }],
            struct: "MusicPlayerWantsLooped_t"
        },
        {
            callback_id: 4011,
            fields: [{ fieldname: "m_flNewVolume", fieldtype: "float" }],
            struct: "MusicPlayerWantsVolume_t"
        },
        {
            callback_id: 4012,
            fields: [{ fieldname: "nID", fieldtype: "int" }],
            struct: "MusicPlayerSelectsQueueEntry_t"
        },
        {
            callback_id: 4013,
            fields: [{ fieldname: "nID", fieldtype: "int" }],
            struct: "MusicPlayerSelectsPlaylistEntry_t"
        },
        {
            callback_id: 4114,
            fields: [{ fieldname: "m_nPlayingRepeatStatus", fieldtype: "int" }],
            struct: "MusicPlayerWantsPlayingRepeatStatus_t"
        },
        {
            callback_id: 2101,
            fields: [
                { fieldname: "m_hRequest", fieldtype: "HTTPRequestHandle" },
                { fieldname: "m_ulContextValue", fieldtype: "uint64" },
                { fieldname: "m_bRequestSuccessful", fieldtype: "bool" },
                { fieldname: "m_eStatusCode", fieldtype: "EHTTPStatusCode" },
                { fieldname: "m_unBodySize", fieldtype: "uint32" },
            ],
            struct: "HTTPRequestCompleted_t"
        },
        {
            callback_id: 2102,
            fields: [
                { fieldname: "m_hRequest", fieldtype: "HTTPRequestHandle" },
                { fieldname: "m_ulContextValue", fieldtype: "uint64" },
            ],
            struct: "HTTPRequestHeadersReceived_t"
        },
        {
            callback_id: 2103,
            fields: [
                { fieldname: "m_hRequest", fieldtype: "HTTPRequestHandle" },
                { fieldname: "m_ulContextValue", fieldtype: "uint64" },
                { fieldname: "m_cOffset", fieldtype: "uint32" },
                { fieldname: "m_cBytesReceived", fieldtype: "uint32" },
            ],
            struct: "HTTPRequestDataReceived_t"
        },
        {
            callback_id: 2801,
            fields: [{ fieldname: "m_ulConnectedDeviceHandle", fieldtype: "InputHandle_t" }],
            struct: "SteamInputDeviceConnected_t"
        },
        {
            callback_id: 2802,
            fields: [{ fieldname: "m_ulDisconnectedDeviceHandle", fieldtype: "InputHandle_t" }],
            struct: "SteamInputDeviceDisconnected_t"
        },
        {
            callback_id: 2803,
            fields: [
                { fieldname: "m_unAppID", fieldtype: "AppId_t" },
                { fieldname: "m_ulDeviceHandle", fieldtype: "InputHandle_t" },
                { fieldname: "m_ulMappingCreator", fieldtype: "CSteamID" },
                { fieldname: "m_unMajorRevision", fieldtype: "uint32" },
                { fieldname: "m_unMinorRevision", fieldtype: "uint32" },
                { fieldname: "m_bUsesSteamInputAPI", fieldtype: "bool" },
                { fieldname: "m_bUsesGamepadAPI", fieldtype: "bool" },
            ],
            struct: "SteamInputConfigurationLoaded_t"
        },
        {
            callback_id: 3401,
            fields: [
                { fieldname: "m_handle", fieldtype: "UGCQueryHandle_t" },
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_unNumResultsReturned", fieldtype: "uint32" },
                { fieldname: "m_unTotalMatchingResults", fieldtype: "uint32" },
                { fieldname: "m_bCachedData", fieldtype: "bool" },
                { fieldname: "m_rgchNextCursor", fieldtype: "char [256]" },
            ],
            struct: "SteamUGCQueryCompleted_t"
        },
        {
            callback_id: 3402,
            fields: [
                { fieldname: "m_details", fieldtype: "SteamUGCDetails_t" },
                { fieldname: "m_bCachedData", fieldtype: "bool" },
            ],
            struct: "SteamUGCRequestUGCDetailsResult_t"
        },
        {
            callback_id: 3403,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_bUserNeedsToAcceptWorkshopLegalAgreement", fieldtype: "bool" },
            ],
            struct: "CreateItemResult_t"
        },
        {
            callback_id: 3404,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_bUserNeedsToAcceptWorkshopLegalAgreement", fieldtype: "bool" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
            ],
            struct: "SubmitItemUpdateResult_t"
        },
        {
            callback_id: 3405,
            fields: [
                { fieldname: "m_unAppID", fieldtype: "AppId_t" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
            ],
            struct: "ItemInstalled_t"
        },
        {
            callback_id: 3406,
            fields: [
                { fieldname: "m_unAppID", fieldtype: "AppId_t" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_eResult", fieldtype: "EResult" },
            ],
            struct: "DownloadItemResult_t"
        },
        {
            callback_id: 3407,
            fields: [
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_bWasAddRequest", fieldtype: "bool" },
            ],
            struct: "UserFavoriteItemsListChanged_t"
        },
        {
            callback_id: 3408,
            fields: [
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_bVoteUp", fieldtype: "bool" },
            ],
            struct: "SetUserItemVoteResult_t"
        },
        {
            callback_id: 3409,
            fields: [
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_bVotedUp", fieldtype: "bool" },
                { fieldname: "m_bVotedDown", fieldtype: "bool" },
                { fieldname: "m_bVoteSkipped", fieldtype: "bool" },
            ],
            struct: "GetUserItemVoteResult_t"
        },
        {
            callback_id: 3410,
            fields: [{ fieldname: "m_eResult", fieldtype: "EResult" }],
            struct: "StartPlaytimeTrackingResult_t"
        },
        {
            callback_id: 3411,
            fields: [{ fieldname: "m_eResult", fieldtype: "EResult" }],
            struct: "StopPlaytimeTrackingResult_t"
        },
        {
            callback_id: 3412,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_nChildPublishedFileId", fieldtype: "PublishedFileId_t" },
            ],
            struct: "AddUGCDependencyResult_t"
        },
        {
            callback_id: 3413,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_nChildPublishedFileId", fieldtype: "PublishedFileId_t" },
            ],
            struct: "RemoveUGCDependencyResult_t"
        },
        {
            callback_id: 3414,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_nAppID", fieldtype: "AppId_t" },
            ],
            struct: "AddAppDependencyResult_t"
        },
        {
            callback_id: 3415,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_nAppID", fieldtype: "AppId_t" },
            ],
            struct: "RemoveAppDependencyResult_t"
        },
        {
            callback_id: 3416,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_rgAppIDs", fieldtype: "AppId_t [32]" },
                { fieldname: "m_nNumAppDependencies", fieldtype: "uint32" },
                { fieldname: "m_nTotalNumAppDependencies", fieldtype: "uint32" },
            ],
            struct: "GetAppDependenciesResult_t"
        },
        {
            callback_id: 3417,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
            ],
            struct: "DeleteItemResult_t"
        },
        {
            callback_id: 3418,
            fields: [{ fieldname: "m_nAppID", fieldtype: "AppId_t" }],
            struct: "UserSubscribedItemsListChanged_t"
        },
        {
            callback_id: 3420,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nAppID", fieldtype: "AppId_t" },
                { fieldname: "m_unVersion", fieldtype: "uint32" },
                { fieldname: "m_rtAction", fieldtype: "RTime32" },
                { fieldname: "m_bAccepted", fieldtype: "bool" },
                { fieldname: "m_bNeedsAction", fieldtype: "bool" },
            ],
            struct: "WorkshopEULAStatus_t"
        },
        {
            callback_id: 3901,
            fields: [
                { fieldname: "m_nAppID", fieldtype: "AppId_t" },
                { fieldname: "m_iInstallFolderIndex", fieldtype: "int" },
            ],
            struct: "SteamAppInstalled_t"
        },
        {
            callback_id: 3902,
            fields: [
                { fieldname: "m_nAppID", fieldtype: "AppId_t" },
                { fieldname: "m_iInstallFolderIndex", fieldtype: "int" },
            ],
            struct: "SteamAppUninstalled_t"
        },
        {
            callback_id: 4501,
            fields: [{ fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" }],
            struct: "HTML_BrowserReady_t"
        },
        {
            callback_id: 4502,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "pBGRA", fieldtype: "const char *" },
                { fieldname: "unWide", fieldtype: "uint32" },
                { fieldname: "unTall", fieldtype: "uint32" },
                { fieldname: "unUpdateX", fieldtype: "uint32" },
                { fieldname: "unUpdateY", fieldtype: "uint32" },
                { fieldname: "unUpdateWide", fieldtype: "uint32" },
                { fieldname: "unUpdateTall", fieldtype: "uint32" },
                { fieldname: "unScrollX", fieldtype: "uint32" },
                { fieldname: "unScrollY", fieldtype: "uint32" },
                { fieldname: "flPageScale", fieldtype: "float" },
                { fieldname: "unPageSerial", fieldtype: "uint32" },
            ],
            struct: "HTML_NeedsPaint_t"
        },
        {
            callback_id: 4503,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "pchURL", fieldtype: "const char *" },
                { fieldname: "pchTarget", fieldtype: "const char *" },
                { fieldname: "pchPostData", fieldtype: "const char *" },
                { fieldname: "bIsRedirect", fieldtype: "bool" },
            ],
            struct: "HTML_StartRequest_t"
        },
        {
            callback_id: 4504,
            fields: [{ fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" }],
            struct: "HTML_CloseBrowser_t"
        },
        {
            callback_id: 4505,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "pchURL", fieldtype: "const char *" },
                { fieldname: "pchPostData", fieldtype: "const char *" },
                { fieldname: "bIsRedirect", fieldtype: "bool" },
                { fieldname: "pchPageTitle", fieldtype: "const char *" },
                { fieldname: "bNewNavigation", fieldtype: "bool" },
            ],
            struct: "HTML_URLChanged_t"
        },
        {
            callback_id: 4506,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "pchURL", fieldtype: "const char *" },
                { fieldname: "pchPageTitle", fieldtype: "const char *" },
            ],
            struct: "HTML_FinishedRequest_t"
        },
        {
            callback_id: 4507,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "pchURL", fieldtype: "const char *" },
            ],
            struct: "HTML_OpenLinkInNewTab_t"
        },
        {
            callback_id: 4508,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "pchTitle", fieldtype: "const char *" },
            ],
            struct: "HTML_ChangedTitle_t"
        },
        {
            callback_id: 4509,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "unResults", fieldtype: "uint32" },
                { fieldname: "unCurrentMatch", fieldtype: "uint32" },
            ],
            struct: "HTML_SearchResults_t"
        },
        {
            callback_id: 4510,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "bCanGoBack", fieldtype: "bool" },
                { fieldname: "bCanGoForward", fieldtype: "bool" },
            ],
            struct: "HTML_CanGoBackAndForward_t"
        },
        {
            callback_id: 4511,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "unScrollMax", fieldtype: "uint32" },
                { fieldname: "unScrollCurrent", fieldtype: "uint32" },
                { fieldname: "flPageScale", fieldtype: "float" },
                { fieldname: "bVisible", fieldtype: "bool" },
                { fieldname: "unPageSize", fieldtype: "uint32" },
            ],
            struct: "HTML_HorizontalScroll_t"
        },
        {
            callback_id: 4512,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "unScrollMax", fieldtype: "uint32" },
                { fieldname: "unScrollCurrent", fieldtype: "uint32" },
                { fieldname: "flPageScale", fieldtype: "float" },
                { fieldname: "bVisible", fieldtype: "bool" },
                { fieldname: "unPageSize", fieldtype: "uint32" },
            ],
            struct: "HTML_VerticalScroll_t"
        },
        {
            callback_id: 4513,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "x", fieldtype: "uint32" },
                { fieldname: "y", fieldtype: "uint32" },
                { fieldname: "pchURL", fieldtype: "const char *" },
                { fieldname: "bInput", fieldtype: "bool" },
                { fieldname: "bLiveLink", fieldtype: "bool" },
            ],
            struct: "HTML_LinkAtPosition_t"
        },
        {
            callback_id: 4514,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "pchMessage", fieldtype: "const char *" },
            ],
            struct: "HTML_JSAlert_t"
        },
        {
            callback_id: 4515,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "pchMessage", fieldtype: "const char *" },
            ],
            struct: "HTML_JSConfirm_t"
        },
        {
            callback_id: 4516,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "pchTitle", fieldtype: "const char *" },
                { fieldname: "pchInitialFile", fieldtype: "const char *" },
            ],
            struct: "HTML_FileOpenDialog_t"
        },
        {
            callback_id: 4521,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "pchURL", fieldtype: "const char *" },
                { fieldname: "unX", fieldtype: "uint32" },
                { fieldname: "unY", fieldtype: "uint32" },
                { fieldname: "unWide", fieldtype: "uint32" },
                { fieldname: "unTall", fieldtype: "uint32" },
                { fieldname: "unNewWindow_BrowserHandle_IGNORE", fieldtype: "HHTMLBrowser" },
            ],
            struct: "HTML_NewWindow_t"
        },
        {
            callback_id: 4522,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "eMouseCursor", fieldtype: "uint32" },
            ],
            struct: "HTML_SetCursor_t"
        },
        {
            callback_id: 4523,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "pchMsg", fieldtype: "const char *" },
            ],
            struct: "HTML_StatusText_t"
        },
        {
            callback_id: 4524,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "pchMsg", fieldtype: "const char *" },
            ],
            struct: "HTML_ShowToolTip_t"
        },
        {
            callback_id: 4525,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "pchMsg", fieldtype: "const char *" },
            ],
            struct: "HTML_UpdateToolTip_t"
        },
        {
            callback_id: 4526,
            fields: [{ fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" }],
            struct: "HTML_HideToolTip_t"
        },
        {
            callback_id: 4527,
            fields: [
                { fieldname: "unBrowserHandle", fieldtype: "HHTMLBrowser" },
                { fieldname: "unOldBrowserHandle", fieldtype: "HHTMLBrowser" },
            ],
            struct: "HTML_BrowserRestarted_t"
        },
        {
            callback_id: 4700,
            fields: [
                { fieldname: "m_handle", fieldtype: "SteamInventoryResult_t" },
                { fieldname: "m_result", fieldtype: "EResult" },
            ],
            struct: "SteamInventoryResultReady_t"
        },
        {
            callback_id: 4701,
            fields: [{ fieldname: "m_handle", fieldtype: "SteamInventoryResult_t" }],
            struct: "SteamInventoryFullUpdate_t"
        },
        {
            callback_id: 4702,
            fields: [],
            struct: "SteamInventoryDefinitionUpdate_t"
        },
        {
            callback_id: 4703,
            fields: [
                { fieldname: "m_result", fieldtype: "EResult" },
                { fieldname: "m_steamID", fieldtype: "CSteamID" },
                { fieldname: "m_numEligiblePromoItemDefs", fieldtype: "int" },
                { fieldname: "m_bCachedData", fieldtype: "bool" },
            ],
            struct: "SteamInventoryEligiblePromoItemDefIDs_t"
        },
        {
            callback_id: 4704,
            fields: [
                { fieldname: "m_result", fieldtype: "EResult" },
                { fieldname: "m_ulOrderID", fieldtype: "uint64" },
                { fieldname: "m_ulTransID", fieldtype: "uint64" },
            ],
            struct: "SteamInventoryStartPurchaseResult_t"
        },
        {
            callback_id: 4705,
            fields: [
                { fieldname: "m_result", fieldtype: "EResult" },
                { fieldname: "m_rgchCurrency", fieldtype: "char [4]" },
            ],
            struct: "SteamInventoryRequestPricesResult_t"
        },
        {
            callback_id: 4611,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_unVideoAppID", fieldtype: "AppId_t" },
                { fieldname: "m_rgchURL", fieldtype: "char [256]" },
            ],
            struct: "GetVideoURLResult_t"
        },
        {
            callback_id: 4624,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_unVideoAppID", fieldtype: "AppId_t" },
            ],
            struct: "GetOPFSettingsResult_t"
        },
        {
            callback_id: 5001,
            fields: [],
            struct: "SteamParentalSettingsChanged_t"
        },
        {
            callback_id: 5701,
            fields: [{ fieldname: "m_unSessionID", fieldtype: "RemotePlaySessionID_t" }],
            struct: "SteamRemotePlaySessionConnected_t"
        },
        {
            callback_id: 5702,
            fields: [{ fieldname: "m_unSessionID", fieldtype: "RemotePlaySessionID_t" }],
            struct: "SteamRemotePlaySessionDisconnected_t"
        },
        {
            callback_id: 1251,
            fields: [{ fieldname: "m_identityRemote", fieldtype: "SteamNetworkingIdentity" }],
            struct: "SteamNetworkingMessagesSessionRequest_t"
        },
        {
            callback_id: 1252,
            fields: [{ fieldname: "m_info", fieldtype: "SteamNetConnectionInfo_t" }],
            struct: "SteamNetworkingMessagesSessionFailed_t"
        },
        {
            callback_id: 1221,
            fields: [
                { fieldname: "m_hConn", fieldtype: "HSteamNetConnection" },
                { fieldname: "m_info", fieldtype: "SteamNetConnectionInfo_t" },
                { fieldname: "m_eOldState", fieldtype: "ESteamNetworkingConnectionState" },
            ],
            struct: "SteamNetConnectionStatusChangedCallback_t"
        },
        {
            callback_id: 1222,
            fields: [
                { fieldname: "m_eAvail", fieldtype: "ESteamNetworkingAvailability" },
                { fieldname: "m_debugMsg", fieldtype: "char [256]" },
            ],
            struct: "SteamNetAuthenticationStatus_t"
        },
        {
            callback_id: 1281,
            fields: [
                { fieldname: "m_eAvail", fieldtype: "ESteamNetworkingAvailability" },
                { fieldname: "m_bPingMeasurementInProgress", fieldtype: "int" },
                { fieldname: "m_eAvailNetworkConfig", fieldtype: "ESteamNetworkingAvailability" },
                { fieldname: "m_eAvailAnyRelay", fieldtype: "ESteamNetworkingAvailability" },
                { fieldname: "m_debugMsg", fieldtype: "char [256]" },
            ],
            struct: "SteamRelayNetworkStatus_t"
        },
        {
            callback_id: 201,
            fields: [
                { fieldname: "m_SteamID", fieldtype: "CSteamID" },
                { fieldname: "m_OwnerSteamID", fieldtype: "CSteamID" },
            ],
            struct: "GSClientApprove_t"
        },
        {
            callback_id: 202,
            fields: [
                { fieldname: "m_SteamID", fieldtype: "CSteamID" },
                { fieldname: "m_eDenyReason", fieldtype: "EDenyReason" },
                { fieldname: "m_rgchOptionalText", fieldtype: "char [128]" },
            ],
            struct: "GSClientDeny_t"
        },
        {
            callback_id: 203,
            fields: [
                { fieldname: "m_SteamID", fieldtype: "CSteamID" },
                { fieldname: "m_eDenyReason", fieldtype: "EDenyReason" },
            ],
            struct: "GSClientKick_t"
        },
        {
            callback_id: 206,
            fields: [
                { fieldname: "m_SteamID", fieldtype: "uint64" },
                { fieldname: "m_pchAchievement", fieldtype: "char [128]" },
                { fieldname: "m_bUnlocked", fieldtype: "bool" },
            ],
            struct: "GSClientAchievementStatus_t"
        },
        {
            callback_id: 115,
            fields: [{ fieldname: "m_bSecure", fieldtype: "uint8" }],
            struct: "GSPolicyResponse_t"
        },
        {
            callback_id: 207,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_nRank", fieldtype: "int32" },
                { fieldname: "m_unTotalConnects", fieldtype: "uint32" },
                { fieldname: "m_unTotalMinutesPlayed", fieldtype: "uint32" },
            ],
            struct: "GSGameplayStats_t"
        },
        {
            callback_id: 208,
            fields: [
                { fieldname: "m_SteamIDUser", fieldtype: "CSteamID" },
                { fieldname: "m_SteamIDGroup", fieldtype: "CSteamID" },
                { fieldname: "m_bMember", fieldtype: "bool" },
                { fieldname: "m_bOfficer", fieldtype: "bool" },
            ],
            struct: "GSClientGroupStatus_t"
        },
        {
            callback_id: 209,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_unReputationScore", fieldtype: "uint32" },
                { fieldname: "m_bBanned", fieldtype: "bool" },
                { fieldname: "m_unBannedIP", fieldtype: "uint32" },
                { fieldname: "m_usBannedPort", fieldtype: "uint16" },
                { fieldname: "m_ulBannedGameID", fieldtype: "uint64" },
                { fieldname: "m_unBanExpires", fieldtype: "uint32" },
            ],
            struct: "GSReputation_t"
        },
        {
            callback_id: 210,
            fields: [{ fieldname: "m_eResult", fieldtype: "EResult" }],
            struct: "AssociateWithClanResult_t"
        },
        {
            callback_id: 211,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_cPlayersThatDontLikeCandidate", fieldtype: "int" },
                { fieldname: "m_cPlayersThatCandidateDoesntLike", fieldtype: "int" },
                { fieldname: "m_cClanPlayersThatDontLikeCandidate", fieldtype: "int" },
                { fieldname: "m_SteamIDCandidate", fieldtype: "CSteamID" },
            ],
            struct: "ComputeNewPlayerCompatibilityResult_t"
        },
        {
            callback_id: 1800,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_steamIDUser", fieldtype: "CSteamID" },
            ],
            struct: "GSStatsReceived_t"
        },
        {
            callback_id: 1801,
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_steamIDUser", fieldtype: "CSteamID" },
            ],
            struct: "GSStatsStored_t"
        },
        {
            callback_id: 1108,
            fields: [{ fieldname: "m_steamIDUser", fieldtype: "CSteamID" }],
            struct: "GSStatsUnloaded_t"
        },
        {
            callback_id: 1223,
            consts: [{ constname: "k_nMaxReturnPorts", consttype: "int", constval: "8" }],
            fields: [
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_identity", fieldtype: "SteamNetworkingIdentity" },
                { fieldname: "m_unIP", fieldtype: "uint32" },
                { fieldname: "m_unPorts", fieldtype: "uint16 [8]" },
            ],
            struct: "SteamNetworkingFakeIPResult_t"
        },
    ],
    consts: [
        { constname: "k_uAppIdInvalid", consttype: "AppId_t", constval: "0x0" },
        { constname: "k_uDepotIdInvalid", consttype: "DepotId_t", constval: "0x0" },
        { constname: "k_uAPICallInvalid", consttype: "SteamAPICall_t", constval: "0x0" },
        { constname: "k_ulPartyBeaconIdInvalid", consttype: "PartyBeaconID_t", constval: "0" },
        { constname: "k_HAuthTicketInvalid", consttype: "HAuthTicket", constval: "0" },
        { constname: "k_unSteamAccountIDMask", consttype: "unsigned int", constval: "0xFFFFFFFF" },
        { constname: "k_unSteamAccountInstanceMask", consttype: "unsigned int", constval: "0x000FFFFF" },
        { constname: "k_unSteamUserDefaultInstance", consttype: "unsigned int", constval: "1" },
        { constname: "k_cchGameExtraInfoMax", consttype: "int", constval: "64" },
        { constname: "k_cchMaxFriendsGroupName", consttype: "int", constval: "64" },
        { constname: "k_cFriendsGroupLimit", consttype: "int", constval: "100" },
        { constname: "k_FriendsGroupID_Invalid", consttype: "FriendsGroupID_t", constval: "- 1" },
        { constname: "k_cEnumerateFollowersMax", consttype: "int", constval: "50" },
        { constname: "k_cubChatMetadataMax", consttype: "uint32", constval: "8192" },
        { constname: "k_cbMaxGameServerGameDir", consttype: "int", constval: "32" },
        { constname: "k_cbMaxGameServerMapName", consttype: "int", constval: "32" },
        { constname: "k_cbMaxGameServerGameDescription", consttype: "int", constval: "64" },
        { constname: "k_cbMaxGameServerName", consttype: "int", constval: "64" },
        { constname: "k_cbMaxGameServerTags", consttype: "int", constval: "128" },
        { constname: "k_cbMaxGameServerGameData", consttype: "int", constval: "2048" },
        { constname: "HSERVERQUERY_INVALID", consttype: "int", constval: "0xffffffff" },
        { constname: "k_unFavoriteFlagNone", consttype: "uint32", constval: "0x00" },
        { constname: "k_unFavoriteFlagFavorite", consttype: "uint32", constval: "0x01" },
        { constname: "k_unFavoriteFlagHistory", consttype: "uint32", constval: "0x02" },
        { constname: "k_unMaxCloudFileChunkSize", consttype: "uint32", constval: "100 * 1024 * 1024" },
        { constname: "k_PublishedFileIdInvalid", consttype: "PublishedFileId_t", constval: "0" },
        { constname: "k_UGCHandleInvalid", consttype: "UGCHandle_t", constval: "0xffffffffffffffffull" },
        {
            constname: "k_PublishedFileUpdateHandleInvalid",
            consttype: "PublishedFileUpdateHandle_t",
            constval: "0xffffffffffffffffull"
        },
        {
            constname: "k_UGCFileStreamHandleInvalid",
            consttype: "UGCFileWriteStreamHandle_t",
            constval: "0xffffffffffffffffull"
        },
        { constname: "k_cchPublishedDocumentTitleMax", consttype: "uint32", constval: "128 + 1" },
        { constname: "k_cchPublishedDocumentDescriptionMax", consttype: "uint32", constval: "8000" },
        { constname: "k_cchPublishedDocumentChangeDescriptionMax", consttype: "uint32", constval: "8000" },
        { constname: "k_unEnumeratePublishedFilesMaxResults", consttype: "uint32", constval: "50" },
        { constname: "k_cchTagListMax", consttype: "uint32", constval: "1024 + 1" },
        { constname: "k_cchFilenameMax", consttype: "uint32", constval: "260" },
        { constname: "k_cchPublishedFileURLMax", consttype: "uint32", constval: "256" },
        { constname: "k_cubAppProofOfPurchaseKeyMax", consttype: "int", constval: "240" },
        { constname: "k_nScreenshotMaxTaggedUsers", consttype: "uint32", constval: "32" },
        { constname: "k_nScreenshotMaxTaggedPublishedFiles", consttype: "uint32", constval: "32" },
        { constname: "k_cubUFSTagTypeMax", consttype: "int", constval: "255" },
        { constname: "k_cubUFSTagValueMax", consttype: "int", constval: "255" },
        { constname: "k_ScreenshotThumbWidth", consttype: "int", constval: "200" },
        { constname: "k_UGCQueryHandleInvalid", consttype: "UGCQueryHandle_t", constval: "0xffffffffffffffffull" },
        { constname: "k_UGCUpdateHandleInvalid", consttype: "UGCUpdateHandle_t", constval: "0xffffffffffffffffull" },
        { constname: "kNumUGCResultsPerPage", consttype: "uint32", constval: "50" },
        { constname: "k_cchDeveloperMetadataMax", consttype: "uint32", constval: "5000" },
        { constname: "INVALID_HTMLBROWSER", consttype: "uint32", constval: "0" },
        {
            constname: "k_SteamItemInstanceIDInvalid",
            consttype: "SteamItemInstanceID_t",
            constval: "( SteamItemInstanceID_t ) ~ 0"
        },
        { constname: "k_SteamInventoryResultInvalid", consttype: "SteamInventoryResult_t", constval: "- 1" },
        {
            constname: "k_SteamInventoryUpdateHandleInvalid",
            consttype: "SteamInventoryUpdateHandle_t",
            constval: "0xffffffffffffffffull"
        },
        { constname: "k_HSteamNetConnection_Invalid", consttype: "HSteamNetConnection", constval: "0" },
        { constname: "k_HSteamListenSocket_Invalid", consttype: "HSteamListenSocket", constval: "0" },
        { constname: "k_HSteamNetPollGroup_Invalid", consttype: "HSteamNetPollGroup", constval: "0" },
        { constname: "k_cchMaxSteamNetworkingErrMsg", consttype: "int", constval: "1024" },
        { constname: "k_cchSteamNetworkingMaxConnectionCloseReason", consttype: "int", constval: "128" },
        { constname: "k_cchSteamNetworkingMaxConnectionDescription", consttype: "int", constval: "128" },
        { constname: "k_cchSteamNetworkingMaxConnectionAppName", consttype: "int", constval: "32" },
        { constname: "k_nSteamNetworkConnectionInfoFlags_Unauthenticated", consttype: "int", constval: "1" },
        { constname: "k_nSteamNetworkConnectionInfoFlags_Unencrypted", consttype: "int", constval: "2" },
        { constname: "k_nSteamNetworkConnectionInfoFlags_LoopbackBuffers", consttype: "int", constval: "4" },
        { constname: "k_nSteamNetworkConnectionInfoFlags_Fast", consttype: "int", constval: "8" },
        { constname: "k_nSteamNetworkConnectionInfoFlags_Relayed", consttype: "int", constval: "16" },
        { constname: "k_nSteamNetworkConnectionInfoFlags_DualWifi", consttype: "int", constval: "32" },
        { constname: "k_cbMaxSteamNetworkingSocketsMessageSizeSend", consttype: "int", constval: "512 * 1024" },
        { constname: "k_nSteamNetworkingSend_Unreliable", consttype: "int", constval: "0" },
        { constname: "k_nSteamNetworkingSend_NoNagle", consttype: "int", constval: "1" },
        {
            constname: "k_nSteamNetworkingSend_UnreliableNoNagle",
            consttype: "int",
            constval: "k_nSteamNetworkingSend_Unreliable | k_nSteamNetworkingSend_NoNagle"
        },
        { constname: "k_nSteamNetworkingSend_NoDelay", consttype: "int", constval: "4" },
        {
            constname: "k_nSteamNetworkingSend_UnreliableNoDelay",
            consttype: "int",
            constval: "k_nSteamNetworkingSend_Unreliable | k_nSteamNetworkingSend_NoDelay | k_nSteamNetworkingSend_NoNagle"
        },
        { constname: "k_nSteamNetworkingSend_Reliable", consttype: "int", constval: "8" },
        {
            constname: "k_nSteamNetworkingSend_ReliableNoNagle",
            consttype: "int",
            constval: "k_nSteamNetworkingSend_Reliable | k_nSteamNetworkingSend_NoNagle"
        },
        { constname: "k_nSteamNetworkingSend_UseCurrentThread", consttype: "int", constval: "16" },
        { constname: "k_nSteamNetworkingSend_AutoRestartBrokenSession", consttype: "int", constval: "32" },
        { constname: "k_cchMaxSteamNetworkingPingLocationString", consttype: "int", constval: "1024" },
        { constname: "k_nSteamNetworkingPing_Failed", consttype: "int", constval: "- 1" },
        { constname: "k_nSteamNetworkingPing_Unknown", consttype: "int", constval: "- 2" },
        { constname: "k_nSteamNetworkingConfig_P2P_Transport_ICE_Enable_Default", consttype: "int", constval: "- 1" },
        { constname: "k_nSteamNetworkingConfig_P2P_Transport_ICE_Enable_Disable", consttype: "int", constval: "0" },
        { constname: "k_nSteamNetworkingConfig_P2P_Transport_ICE_Enable_Relay", consttype: "int", constval: "1" },
        { constname: "k_nSteamNetworkingConfig_P2P_Transport_ICE_Enable_Private", consttype: "int", constval: "2" },
        { constname: "k_nSteamNetworkingConfig_P2P_Transport_ICE_Enable_Public", consttype: "int", constval: "4" },
        { constname: "k_nSteamNetworkingConfig_P2P_Transport_ICE_Enable_All", consttype: "int", constval: "0x7fffffff" },
        {
            constname: "k_SteamDatagramPOPID_dev",
            consttype: "SteamNetworkingPOPID",
            constval: "( ( uint32 ) 'd' << 16U ) | ( ( uint32 ) 'e' << 8U ) | ( uint32 ) 'v'"
        },
        { constname: "STEAMGAMESERVER_QUERY_PORT_SHARED", consttype: "uint16", constval: "0xffff" },
        {
            constname: "MASTERSERVERUPDATERPORT_USEGAMESOCKETSHARE",
            consttype: "uint16",
            constval: "STEAMGAMESERVER_QUERY_PORT_SHARED"
        },
        { constname: "k_cbSteamDatagramMaxSerializedTicket", consttype: "uint32", constval: "512" },
        { constname: "k_cbMaxSteamDatagramGameCoordinatorServerLoginAppData", consttype: "uint32", constval: "2048" },
        { constname: "k_cbMaxSteamDatagramGameCoordinatorServerLoginSerialized", consttype: "uint32", constval: "4096" },
        { constname: "k_cbSteamNetworkingSocketsFakeUDPPortRecommendedMTU", consttype: "int", constval: "1200" },
        { constname: "k_cbSteamNetworkingSocketsFakeUDPPortMaxMessageSize", consttype: "int", constval: "4096" },
    ],
    enums: [
        {
            enumname: "ESteamIPType",
            values: [
                { name: "k_ESteamIPTypeIPv4", value: "0" },
                { name: "k_ESteamIPTypeIPv6", value: "1" },
            ]
        },
        {
            enumname: "EUniverse",
            values: [
                { name: "k_EUniverseInvalid", value: "0" },
                { name: "k_EUniversePublic", value: "1" },
                { name: "k_EUniverseBeta", value: "2" },
                { name: "k_EUniverseInternal", value: "3" },
                { name: "k_EUniverseDev", value: "4" },
                { name: "k_EUniverseMax", value: "5" },
            ]
        },
        {
            enumname: "EResult",
            values: [
                { name: "k_EResultNone", value: "0" },
                { name: "k_EResultOK", value: "1" },
                { name: "k_EResultFail", value: "2" },
                { name: "k_EResultNoConnection", value: "3" },
                { name: "k_EResultInvalidPassword", value: "5" },
                { name: "k_EResultLoggedInElsewhere", value: "6" },
                { name: "k_EResultInvalidProtocolVer", value: "7" },
                { name: "k_EResultInvalidParam", value: "8" },
                { name: "k_EResultFileNotFound", value: "9" },
                { name: "k_EResultBusy", value: "10" },
                { name: "k_EResultInvalidState", value: "11" },
                { name: "k_EResultInvalidName", value: "12" },
                { name: "k_EResultInvalidEmail", value: "13" },
                { name: "k_EResultDuplicateName", value: "14" },
                { name: "k_EResultAccessDenied", value: "15" },
                { name: "k_EResultTimeout", value: "16" },
                { name: "k_EResultBanned", value: "17" },
                { name: "k_EResultAccountNotFound", value: "18" },
                { name: "k_EResultInvalidSteamID", value: "19" },
                { name: "k_EResultServiceUnavailable", value: "20" },
                { name: "k_EResultNotLoggedOn", value: "21" },
                { name: "k_EResultPending", value: "22" },
                { name: "k_EResultEncryptionFailure", value: "23" },
                { name: "k_EResultInsufficientPrivilege", value: "24" },
                { name: "k_EResultLimitExceeded", value: "25" },
                { name: "k_EResultRevoked", value: "26" },
                { name: "k_EResultExpired", value: "27" },
                { name: "k_EResultAlreadyRedeemed", value: "28" },
                { name: "k_EResultDuplicateRequest", value: "29" },
                { name: "k_EResultAlreadyOwned", value: "30" },
                { name: "k_EResultIPNotFound", value: "31" },
                { name: "k_EResultPersistFailed", value: "32" },
                { name: "k_EResultLockingFailed", value: "33" },
                { name: "k_EResultLogonSessionReplaced", value: "34" },
                { name: "k_EResultConnectFailed", value: "35" },
                { name: "k_EResultHandshakeFailed", value: "36" },
                { name: "k_EResultIOFailure", value: "37" },
                { name: "k_EResultRemoteDisconnect", value: "38" },
                { name: "k_EResultShoppingCartNotFound", value: "39" },
                { name: "k_EResultBlocked", value: "40" },
                { name: "k_EResultIgnored", value: "41" },
                { name: "k_EResultNoMatch", value: "42" },
                { name: "k_EResultAccountDisabled", value: "43" },
                { name: "k_EResultServiceReadOnly", value: "44" },
                { name: "k_EResultAccountNotFeatured", value: "45" },
                { name: "k_EResultAdministratorOK", value: "46" },
                { name: "k_EResultContentVersion", value: "47" },
                { name: "k_EResultTryAnotherCM", value: "48" },
                { name: "k_EResultPasswordRequiredToKickSession", value: "49" },
                { name: "k_EResultAlreadyLoggedInElsewhere", value: "50" },
                { name: "k_EResultSuspended", value: "51" },
                { name: "k_EResultCancelled", value: "52" },
                { name: "k_EResultDataCorruption", value: "53" },
                { name: "k_EResultDiskFull", value: "54" },
                { name: "k_EResultRemoteCallFailed", value: "55" },
                { name: "k_EResultPasswordUnset", value: "56" },
                { name: "k_EResultExternalAccountUnlinked", value: "57" },
                { name: "k_EResultPSNTicketInvalid", value: "58" },
                { name: "k_EResultExternalAccountAlreadyLinked", value: "59" },
                { name: "k_EResultRemoteFileConflict", value: "60" },
                { name: "k_EResultIllegalPassword", value: "61" },
                { name: "k_EResultSameAsPreviousValue", value: "62" },
                { name: "k_EResultAccountLogonDenied", value: "63" },
                { name: "k_EResultCannotUseOldPassword", value: "64" },
                { name: "k_EResultInvalidLoginAuthCode", value: "65" },
                { name: "k_EResultAccountLogonDeniedNoMail", value: "66" },
                { name: "k_EResultHardwareNotCapableOfIPT", value: "67" },
                { name: "k_EResultIPTInitError", value: "68" },
                { name: "k_EResultParentalControlRestricted", value: "69" },
                { name: "k_EResultFacebookQueryError", value: "70" },
                { name: "k_EResultExpiredLoginAuthCode", value: "71" },
                { name: "k_EResultIPLoginRestrictionFailed", value: "72" },
                { name: "k_EResultAccountLockedDown", value: "73" },
                { name: "k_EResultAccountLogonDeniedVerifiedEmailRequired", value: "74" },
                { name: "k_EResultNoMatchingURL", value: "75" },
                { name: "k_EResultBadResponse", value: "76" },
                { name: "k_EResultRequirePasswordReEntry", value: "77" },
                { name: "k_EResultValueOutOfRange", value: "78" },
                { name: "k_EResultUnexpectedError", value: "79" },
                { name: "k_EResultDisabled", value: "80" },
                { name: "k_EResultInvalidCEGSubmission", value: "81" },
                { name: "k_EResultRestrictedDevice", value: "82" },
                { name: "k_EResultRegionLocked", value: "83" },
                { name: "k_EResultRateLimitExceeded", value: "84" },
                { name: "k_EResultAccountLoginDeniedNeedTwoFactor", value: "85" },
                { name: "k_EResultItemDeleted", value: "86" },
                { name: "k_EResultAccountLoginDeniedThrottle", value: "87" },
                { name: "k_EResultTwoFactorCodeMismatch", value: "88" },
                { name: "k_EResultTwoFactorActivationCodeMismatch", value: "89" },
                { name: "k_EResultAccountAssociatedToMultiplePartners", value: "90" },
                { name: "k_EResultNotModified", value: "91" },
                { name: "k_EResultNoMobileDevice", value: "92" },
                { name: "k_EResultTimeNotSynced", value: "93" },
                { name: "k_EResultSmsCodeFailed", value: "94" },
                { name: "k_EResultAccountLimitExceeded", value: "95" },
                { name: "k_EResultAccountActivityLimitExceeded", value: "96" },
                { name: "k_EResultPhoneActivityLimitExceeded", value: "97" },
                { name: "k_EResultRefundToWallet", value: "98" },
                { name: "k_EResultEmailSendFailure", value: "99" },
                { name: "k_EResultNotSettled", value: "100" },
                { name: "k_EResultNeedCaptcha", value: "101" },
                { name: "k_EResultGSLTDenied", value: "102" },
                { name: "k_EResultGSOwnerDenied", value: "103" },
                { name: "k_EResultInvalidItemType", value: "104" },
                { name: "k_EResultIPBanned", value: "105" },
                { name: "k_EResultGSLTExpired", value: "106" },
                { name: "k_EResultInsufficientFunds", value: "107" },
                { name: "k_EResultTooManyPending", value: "108" },
                { name: "k_EResultNoSiteLicensesFound", value: "109" },
                { name: "k_EResultWGNetworkSendExceeded", value: "110" },
                { name: "k_EResultAccountNotFriends", value: "111" },
                { name: "k_EResultLimitedUserAccount", value: "112" },
                { name: "k_EResultCantRemoveItem", value: "113" },
                { name: "k_EResultAccountDeleted", value: "114" },
                { name: "k_EResultExistingUserCancelledLicense", value: "115" },
                { name: "k_EResultCommunityCooldown", value: "116" },
                { name: "k_EResultNoLauncherSpecified", value: "117" },
                { name: "k_EResultMustAgreeToSSA", value: "118" },
                { name: "k_EResultLauncherMigrated", value: "119" },
                { name: "k_EResultSteamRealmMismatch", value: "120" },
                { name: "k_EResultInvalidSignature", value: "121" },
                { name: "k_EResultParseFailure", value: "122" },
                { name: "k_EResultNoVerifiedPhone", value: "123" },
            ]
        },
        {
            enumname: "EVoiceResult",
            values: [
                { name: "k_EVoiceResultOK", value: "0" },
                { name: "k_EVoiceResultNotInitialized", value: "1" },
                { name: "k_EVoiceResultNotRecording", value: "2" },
                { name: "k_EVoiceResultNoData", value: "3" },
                { name: "k_EVoiceResultBufferTooSmall", value: "4" },
                { name: "k_EVoiceResultDataCorrupted", value: "5" },
                { name: "k_EVoiceResultRestricted", value: "6" },
                { name: "k_EVoiceResultUnsupportedCodec", value: "7" },
                { name: "k_EVoiceResultReceiverOutOfDate", value: "8" },
                { name: "k_EVoiceResultReceiverDidNotAnswer", value: "9" },
            ]
        },
        {
            enumname: "EDenyReason",
            values: [
                { name: "k_EDenyInvalid", value: "0" },
                { name: "k_EDenyInvalidVersion", value: "1" },
                { name: "k_EDenyGeneric", value: "2" },
                { name: "k_EDenyNotLoggedOn", value: "3" },
                { name: "k_EDenyNoLicense", value: "4" },
                { name: "k_EDenyCheater", value: "5" },
                { name: "k_EDenyLoggedInElseWhere", value: "6" },
                { name: "k_EDenyUnknownText", value: "7" },
                { name: "k_EDenyIncompatibleAnticheat", value: "8" },
                { name: "k_EDenyMemoryCorruption", value: "9" },
                { name: "k_EDenyIncompatibleSoftware", value: "10" },
                { name: "k_EDenySteamConnectionLost", value: "11" },
                { name: "k_EDenySteamConnectionError", value: "12" },
                { name: "k_EDenySteamResponseTimedOut", value: "13" },
                { name: "k_EDenySteamValidationStalled", value: "14" },
                { name: "k_EDenySteamOwnerLeftGuestUser", value: "15" },
            ]
        },
        {
            enumname: "EBeginAuthSessionResult",
            values: [
                { name: "k_EBeginAuthSessionResultOK", value: "0" },
                { name: "k_EBeginAuthSessionResultInvalidTicket", value: "1" },
                { name: "k_EBeginAuthSessionResultDuplicateRequest", value: "2" },
                { name: "k_EBeginAuthSessionResultInvalidVersion", value: "3" },
                { name: "k_EBeginAuthSessionResultGameMismatch", value: "4" },
                { name: "k_EBeginAuthSessionResultExpiredTicket", value: "5" },
            ]
        },
        {
            enumname: "EAuthSessionResponse",
            values: [
                { name: "k_EAuthSessionResponseOK", value: "0" },
                { name: "k_EAuthSessionResponseUserNotConnectedToSteam", value: "1" },
                { name: "k_EAuthSessionResponseNoLicenseOrExpired", value: "2" },
                { name: "k_EAuthSessionResponseVACBanned", value: "3" },
                { name: "k_EAuthSessionResponseLoggedInElseWhere", value: "4" },
                { name: "k_EAuthSessionResponseVACCheckTimedOut", value: "5" },
                { name: "k_EAuthSessionResponseAuthTicketCanceled", value: "6" },
                { name: "k_EAuthSessionResponseAuthTicketInvalidAlreadyUsed", value: "7" },
                { name: "k_EAuthSessionResponseAuthTicketInvalid", value: "8" },
                { name: "k_EAuthSessionResponsePublisherIssuedBan", value: "9" },
            ]
        },
        {
            enumname: "EUserHasLicenseForAppResult",
            values: [
                { name: "k_EUserHasLicenseResultHasLicense", value: "0" },
                { name: "k_EUserHasLicenseResultDoesNotHaveLicense", value: "1" },
                { name: "k_EUserHasLicenseResultNoAuth", value: "2" },
            ]
        },
        {
            enumname: "EAccountType",
            values: [
                { name: "k_EAccountTypeInvalid", value: "0" },
                { name: "k_EAccountTypeIndividual", value: "1" },
                { name: "k_EAccountTypeMultiseat", value: "2" },
                { name: "k_EAccountTypeGameServer", value: "3" },
                { name: "k_EAccountTypeAnonGameServer", value: "4" },
                { name: "k_EAccountTypePending", value: "5" },
                { name: "k_EAccountTypeContentServer", value: "6" },
                { name: "k_EAccountTypeClan", value: "7" },
                { name: "k_EAccountTypeChat", value: "8" },
                { name: "k_EAccountTypeConsoleUser", value: "9" },
                { name: "k_EAccountTypeAnonUser", value: "10" },
                { name: "k_EAccountTypeMax", value: "11" },
            ]
        },
        {
            enumname: "EChatEntryType",
            values: [
                { name: "k_EChatEntryTypeInvalid", value: "0" },
                { name: "k_EChatEntryTypeChatMsg", value: "1" },
                { name: "k_EChatEntryTypeTyping", value: "2" },
                { name: "k_EChatEntryTypeInviteGame", value: "3" },
                { name: "k_EChatEntryTypeEmote", value: "4" },
                { name: "k_EChatEntryTypeLeftConversation", value: "6" },
                { name: "k_EChatEntryTypeEntered", value: "7" },
                { name: "k_EChatEntryTypeWasKicked", value: "8" },
                { name: "k_EChatEntryTypeWasBanned", value: "9" },
                { name: "k_EChatEntryTypeDisconnected", value: "10" },
                { name: "k_EChatEntryTypeHistoricalChat", value: "11" },
                { name: "k_EChatEntryTypeLinkBlocked", value: "14" },
            ]
        },
        {
            enumname: "EChatRoomEnterResponse",
            values: [
                { name: "k_EChatRoomEnterResponseSuccess", value: "1" },
                { name: "k_EChatRoomEnterResponseDoesntExist", value: "2" },
                { name: "k_EChatRoomEnterResponseNotAllowed", value: "3" },
                { name: "k_EChatRoomEnterResponseFull", value: "4" },
                { name: "k_EChatRoomEnterResponseError", value: "5" },
                { name: "k_EChatRoomEnterResponseBanned", value: "6" },
                { name: "k_EChatRoomEnterResponseLimited", value: "7" },
                { name: "k_EChatRoomEnterResponseClanDisabled", value: "8" },
                { name: "k_EChatRoomEnterResponseCommunityBan", value: "9" },
                { name: "k_EChatRoomEnterResponseMemberBlockedYou", value: "10" },
                { name: "k_EChatRoomEnterResponseYouBlockedMember", value: "11" },
                { name: "k_EChatRoomEnterResponseRatelimitExceeded", value: "15" },
            ]
        },
        {
            enumname: "EChatSteamIDInstanceFlags",
            values: [
                { name: "k_EChatAccountInstanceMask", value: "4095" },
                { name: "k_EChatInstanceFlagClan", value: "524288" },
                { name: "k_EChatInstanceFlagLobby", value: "262144" },
                { name: "k_EChatInstanceFlagMMSLobby", value: "131072" },
            ]
        },
        {
            enumname: "ENotificationPosition",
            values: [
                { name: "k_EPositionTopLeft", value: "0" },
                { name: "k_EPositionTopRight", value: "1" },
                { name: "k_EPositionBottomLeft", value: "2" },
                { name: "k_EPositionBottomRight", value: "3" },
            ]
        },
        {
            enumname: "EBroadcastUploadResult",
            values: [
                { name: "k_EBroadcastUploadResultNone", value: "0" },
                { name: "k_EBroadcastUploadResultOK", value: "1" },
                { name: "k_EBroadcastUploadResultInitFailed", value: "2" },
                { name: "k_EBroadcastUploadResultFrameFailed", value: "3" },
                { name: "k_EBroadcastUploadResultTimeout", value: "4" },
                { name: "k_EBroadcastUploadResultBandwidthExceeded", value: "5" },
                { name: "k_EBroadcastUploadResultLowFPS", value: "6" },
                { name: "k_EBroadcastUploadResultMissingKeyFrames", value: "7" },
                { name: "k_EBroadcastUploadResultNoConnection", value: "8" },
                { name: "k_EBroadcastUploadResultRelayFailed", value: "9" },
                { name: "k_EBroadcastUploadResultSettingsChanged", value: "10" },
                { name: "k_EBroadcastUploadResultMissingAudio", value: "11" },
                { name: "k_EBroadcastUploadResultTooFarBehind", value: "12" },
                { name: "k_EBroadcastUploadResultTranscodeBehind", value: "13" },
                { name: "k_EBroadcastUploadResultNotAllowedToPlay", value: "14" },
                { name: "k_EBroadcastUploadResultBusy", value: "15" },
                { name: "k_EBroadcastUploadResultBanned", value: "16" },
                { name: "k_EBroadcastUploadResultAlreadyActive", value: "17" },
                { name: "k_EBroadcastUploadResultForcedOff", value: "18" },
                { name: "k_EBroadcastUploadResultAudioBehind", value: "19" },
                { name: "k_EBroadcastUploadResultShutdown", value: "20" },
                { name: "k_EBroadcastUploadResultDisconnect", value: "21" },
                { name: "k_EBroadcastUploadResultVideoInitFailed", value: "22" },
                { name: "k_EBroadcastUploadResultAudioInitFailed", value: "23" },
            ]
        },
        {
            enumname: "EMarketNotAllowedReasonFlags",
            values: [
                { name: "k_EMarketNotAllowedReason_None", value: "0" },
                { name: "k_EMarketNotAllowedReason_TemporaryFailure", value: "1" },
                { name: "k_EMarketNotAllowedReason_AccountDisabled", value: "2" },
                { name: "k_EMarketNotAllowedReason_AccountLockedDown", value: "4" },
                { name: "k_EMarketNotAllowedReason_AccountLimited", value: "8" },
                { name: "k_EMarketNotAllowedReason_TradeBanned", value: "16" },
                { name: "k_EMarketNotAllowedReason_AccountNotTrusted", value: "32" },
                { name: "k_EMarketNotAllowedReason_SteamGuardNotEnabled", value: "64" },
                { name: "k_EMarketNotAllowedReason_SteamGuardOnlyRecentlyEnabled", value: "128" },
                { name: "k_EMarketNotAllowedReason_RecentPasswordReset", value: "256" },
                { name: "k_EMarketNotAllowedReason_NewPaymentMethod", value: "512" },
                { name: "k_EMarketNotAllowedReason_InvalidCookie", value: "1024" },
                { name: "k_EMarketNotAllowedReason_UsingNewDevice", value: "2048" },
                { name: "k_EMarketNotAllowedReason_RecentSelfRefund", value: "4096" },
                { name: "k_EMarketNotAllowedReason_NewPaymentMethodCannotBeVerified", value: "8192" },
                { name: "k_EMarketNotAllowedReason_NoRecentPurchases", value: "16384" },
                { name: "k_EMarketNotAllowedReason_AcceptedWalletGift", value: "32768" },
            ]
        },
        {
            enumname: "EDurationControlProgress",
            values: [
                { name: "k_EDurationControlProgress_Full", value: "0" },
                { name: "k_EDurationControlProgress_Half", value: "1" },
                { name: "k_EDurationControlProgress_None", value: "2" },
                { name: "k_EDurationControl_ExitSoon_3h", value: "3" },
                { name: "k_EDurationControl_ExitSoon_5h", value: "4" },
                { name: "k_EDurationControl_ExitSoon_Night", value: "5" },
            ]
        },
        {
            enumname: "EDurationControlNotification",
            values: [
                { name: "k_EDurationControlNotification_None", value: "0" },
                { name: "k_EDurationControlNotification_1Hour", value: "1" },
                { name: "k_EDurationControlNotification_3Hours", value: "2" },
                { name: "k_EDurationControlNotification_HalfProgress", value: "3" },
                { name: "k_EDurationControlNotification_NoProgress", value: "4" },
                { name: "k_EDurationControlNotification_ExitSoon_3h", value: "5" },
                { name: "k_EDurationControlNotification_ExitSoon_5h", value: "6" },
                { name: "k_EDurationControlNotification_ExitSoon_Night", value: "7" },
            ]
        },
        {
            enumname: "EDurationControlOnlineState",
            values: [
                { name: "k_EDurationControlOnlineState_Invalid", value: "0" },
                { name: "k_EDurationControlOnlineState_Offline", value: "1" },
                { name: "k_EDurationControlOnlineState_Online", value: "2" },
                { name: "k_EDurationControlOnlineState_OnlineHighPri", value: "3" },
            ]
        },
        {
            enumname: "EGameSearchErrorCode_t",
            values: [
                { name: "k_EGameSearchErrorCode_OK", value: "1" },
                { name: "k_EGameSearchErrorCode_Failed_Search_Already_In_Progress", value: "2" },
                { name: "k_EGameSearchErrorCode_Failed_No_Search_In_Progress", value: "3" },
                { name: "k_EGameSearchErrorCode_Failed_Not_Lobby_Leader", value: "4" },
                { name: "k_EGameSearchErrorCode_Failed_No_Host_Available", value: "5" },
                { name: "k_EGameSearchErrorCode_Failed_Search_Params_Invalid", value: "6" },
                { name: "k_EGameSearchErrorCode_Failed_Offline", value: "7" },
                { name: "k_EGameSearchErrorCode_Failed_NotAuthorized", value: "8" },
                { name: "k_EGameSearchErrorCode_Failed_Unknown_Error", value: "9" },
            ]
        },
        {
            enumname: "EPlayerResult_t",
            values: [
                { name: "k_EPlayerResultFailedToConnect", value: "1" },
                { name: "k_EPlayerResultAbandoned", value: "2" },
                { name: "k_EPlayerResultKicked", value: "3" },
                { name: "k_EPlayerResultIncomplete", value: "4" },
                { name: "k_EPlayerResultCompleted", value: "5" },
            ]
        },
        {
            enumname: "ESteamIPv6ConnectivityProtocol",
            values: [
                { name: "k_ESteamIPv6ConnectivityProtocol_Invalid", value: "0" },
                { name: "k_ESteamIPv6ConnectivityProtocol_HTTP", value: "1" },
                { name: "k_ESteamIPv6ConnectivityProtocol_UDP", value: "2" },
            ]
        },
        {
            enumname: "ESteamIPv6ConnectivityState",
            values: [
                { name: "k_ESteamIPv6ConnectivityState_Unknown", value: "0" },
                { name: "k_ESteamIPv6ConnectivityState_Good", value: "1" },
                { name: "k_ESteamIPv6ConnectivityState_Bad", value: "2" },
            ]
        },
        {
            enumname: "EFriendRelationship",
            values: [
                { name: "k_EFriendRelationshipNone", value: "0" },
                { name: "k_EFriendRelationshipBlocked", value: "1" },
                { name: "k_EFriendRelationshipRequestRecipient", value: "2" },
                { name: "k_EFriendRelationshipFriend", value: "3" },
                { name: "k_EFriendRelationshipRequestInitiator", value: "4" },
                { name: "k_EFriendRelationshipIgnored", value: "5" },
                { name: "k_EFriendRelationshipIgnoredFriend", value: "6" },
                { name: "k_EFriendRelationshipSuggested_DEPRECATED", value: "7" },
                { name: "k_EFriendRelationshipMax", value: "8" },
            ]
        },
        {
            enumname: "EPersonaState",
            values: [
                { name: "k_EPersonaStateOffline", value: "0" },
                { name: "k_EPersonaStateOnline", value: "1" },
                { name: "k_EPersonaStateBusy", value: "2" },
                { name: "k_EPersonaStateAway", value: "3" },
                { name: "k_EPersonaStateSnooze", value: "4" },
                { name: "k_EPersonaStateLookingToTrade", value: "5" },
                { name: "k_EPersonaStateLookingToPlay", value: "6" },
                { name: "k_EPersonaStateInvisible", value: "7" },
                { name: "k_EPersonaStateMax", value: "8" },
            ]
        },
        {
            enumname: "EFriendFlags",
            values: [
                { name: "k_EFriendFlagNone", value: "0" },
                { name: "k_EFriendFlagBlocked", value: "1" },
                { name: "k_EFriendFlagFriendshipRequested", value: "2" },
                { name: "k_EFriendFlagImmediate", value: "4" },
                { name: "k_EFriendFlagClanMember", value: "8" },
                { name: "k_EFriendFlagOnGameServer", value: "16" },
                { name: "k_EFriendFlagRequestingFriendship", value: "128" },
                { name: "k_EFriendFlagRequestingInfo", value: "256" },
                { name: "k_EFriendFlagIgnored", value: "512" },
                { name: "k_EFriendFlagIgnoredFriend", value: "1024" },
                { name: "k_EFriendFlagChatMember", value: "4096" },
                { name: "k_EFriendFlagAll", value: "65535" },
            ]
        },
        {
            enumname: "EUserRestriction",
            values: [
                { name: "k_nUserRestrictionNone", value: "0" },
                { name: "k_nUserRestrictionUnknown", value: "1" },
                { name: "k_nUserRestrictionAnyChat", value: "2" },
                { name: "k_nUserRestrictionVoiceChat", value: "4" },
                { name: "k_nUserRestrictionGroupChat", value: "8" },
                { name: "k_nUserRestrictionRating", value: "16" },
                { name: "k_nUserRestrictionGameInvites", value: "32" },
                { name: "k_nUserRestrictionTrading", value: "64" },
            ]
        },
        {
            enumname: "EOverlayToStoreFlag",
            values: [
                { name: "k_EOverlayToStoreFlag_None", value: "0" },
                { name: "k_EOverlayToStoreFlag_AddToCart", value: "1" },
                { name: "k_EOverlayToStoreFlag_AddToCartAndShow", value: "2" },
            ]
        },
        {
            enumname: "EActivateGameOverlayToWebPageMode",
            values: [
                { name: "k_EActivateGameOverlayToWebPageMode_Default", value: "0" },
                { name: "k_EActivateGameOverlayToWebPageMode_Modal", value: "1" },
            ]
        },
        {
            enumname: "EPersonaChange",
            values: [
                { name: "k_EPersonaChangeName", value: "1" },
                { name: "k_EPersonaChangeStatus", value: "2" },
                { name: "k_EPersonaChangeComeOnline", value: "4" },
                { name: "k_EPersonaChangeGoneOffline", value: "8" },
                { name: "k_EPersonaChangeGamePlayed", value: "16" },
                { name: "k_EPersonaChangeGameServer", value: "32" },
                { name: "k_EPersonaChangeAvatar", value: "64" },
                { name: "k_EPersonaChangeJoinedSource", value: "128" },
                { name: "k_EPersonaChangeLeftSource", value: "256" },
                { name: "k_EPersonaChangeRelationshipChanged", value: "512" },
                { name: "k_EPersonaChangeNameFirstSet", value: "1024" },
                { name: "k_EPersonaChangeBroadcast", value: "2048" },
                { name: "k_EPersonaChangeNickname", value: "4096" },
                { name: "k_EPersonaChangeSteamLevel", value: "8192" },
                { name: "k_EPersonaChangeRichPresence", value: "16384" },
            ]
        },
        {
            enumname: "ESteamAPICallFailure",
            values: [
                { name: "k_ESteamAPICallFailureNone", value: "-1" },
                { name: "k_ESteamAPICallFailureSteamGone", value: "0" },
                { name: "k_ESteamAPICallFailureNetworkFailure", value: "1" },
                { name: "k_ESteamAPICallFailureInvalidHandle", value: "2" },
                { name: "k_ESteamAPICallFailureMismatchedCallback", value: "3" },
            ]
        },
        {
            enumname: "EGamepadTextInputMode",
            values: [
                { name: "k_EGamepadTextInputModeNormal", value: "0" },
                { name: "k_EGamepadTextInputModePassword", value: "1" },
            ]
        },
        {
            enumname: "EGamepadTextInputLineMode",
            values: [
                { name: "k_EGamepadTextInputLineModeSingleLine", value: "0" },
                { name: "k_EGamepadTextInputLineModeMultipleLines", value: "1" },
            ]
        },
        {
            enumname: "EFloatingGamepadTextInputMode",
            values: [
                { name: "k_EFloatingGamepadTextInputModeModeSingleLine", value: "0" },
                { name: "k_EFloatingGamepadTextInputModeModeMultipleLines", value: "1" },
                { name: "k_EFloatingGamepadTextInputModeModeEmail", value: "2" },
                { name: "k_EFloatingGamepadTextInputModeModeNumeric", value: "3" },
            ]
        },
        {
            enumname: "ETextFilteringContext",
            values: [
                { name: "k_ETextFilteringContextUnknown", value: "0" },
                { name: "k_ETextFilteringContextGameContent", value: "1" },
                { name: "k_ETextFilteringContextChat", value: "2" },
                { name: "k_ETextFilteringContextName", value: "3" },
            ]
        },
        {
            enumname: "ECheckFileSignature",
            values: [
                { name: "k_ECheckFileSignatureInvalidSignature", value: "0" },
                { name: "k_ECheckFileSignatureValidSignature", value: "1" },
                { name: "k_ECheckFileSignatureFileNotFound", value: "2" },
                { name: "k_ECheckFileSignatureNoSignaturesFoundForThisApp", value: "3" },
                { name: "k_ECheckFileSignatureNoSignaturesFoundForThisFile", value: "4" },
            ]
        },
        {
            enumname: "EMatchMakingServerResponse",
            values: [
                { name: "eServerResponded", value: "0" },
                { name: "eServerFailedToRespond", value: "1" },
                { name: "eNoServersListedOnMasterServer", value: "2" },
            ]
        },
        {
            enumname: "ELobbyType",
            values: [
                { name: "k_ELobbyTypePrivate", value: "0" },
                { name: "k_ELobbyTypeFriendsOnly", value: "1" },
                { name: "k_ELobbyTypePublic", value: "2" },
                { name: "k_ELobbyTypeInvisible", value: "3" },
                { name: "k_ELobbyTypePrivateUnique", value: "4" },
            ]
        },
        {
            enumname: "ELobbyComparison",
            values: [
                { name: "k_ELobbyComparisonEqualToOrLessThan", value: "-2" },
                { name: "k_ELobbyComparisonLessThan", value: "-1" },
                { name: "k_ELobbyComparisonEqual", value: "0" },
                { name: "k_ELobbyComparisonGreaterThan", value: "1" },
                { name: "k_ELobbyComparisonEqualToOrGreaterThan", value: "2" },
                { name: "k_ELobbyComparisonNotEqual", value: "3" },
            ]
        },
        {
            enumname: "ELobbyDistanceFilter",
            values: [
                { name: "k_ELobbyDistanceFilterClose", value: "0" },
                { name: "k_ELobbyDistanceFilterDefault", value: "1" },
                { name: "k_ELobbyDistanceFilterFar", value: "2" },
                { name: "k_ELobbyDistanceFilterWorldwide", value: "3" },
            ]
        },
        {
            enumname: "EChatMemberStateChange",
            values: [
                { name: "k_EChatMemberStateChangeEntered", value: "1" },
                { name: "k_EChatMemberStateChangeLeft", value: "2" },
                { name: "k_EChatMemberStateChangeDisconnected", value: "4" },
                { name: "k_EChatMemberStateChangeKicked", value: "8" },
                { name: "k_EChatMemberStateChangeBanned", value: "16" },
            ]
        },
        {
            enumname: "ESteamPartyBeaconLocationType",
            values: [
                { name: "k_ESteamPartyBeaconLocationType_Invalid", value: "0" },
                { name: "k_ESteamPartyBeaconLocationType_ChatGroup", value: "1" },
                { name: "k_ESteamPartyBeaconLocationType_Max", value: "2" },
            ]
        },
        {
            enumname: "ESteamPartyBeaconLocationData",
            values: [
                { name: "k_ESteamPartyBeaconLocationDataInvalid", value: "0" },
                { name: "k_ESteamPartyBeaconLocationDataName", value: "1" },
                { name: "k_ESteamPartyBeaconLocationDataIconURLSmall", value: "2" },
                { name: "k_ESteamPartyBeaconLocationDataIconURLMedium", value: "3" },
                { name: "k_ESteamPartyBeaconLocationDataIconURLLarge", value: "4" },
            ]
        },
        {
            enumname: "ERemoteStoragePlatform",
            values: [
                { name: "k_ERemoteStoragePlatformNone", value: "0" },
                { name: "k_ERemoteStoragePlatformWindows", value: "1" },
                { name: "k_ERemoteStoragePlatformOSX", value: "2" },
                { name: "k_ERemoteStoragePlatformPS3", value: "4" },
                { name: "k_ERemoteStoragePlatformLinux", value: "8" },
                { name: "k_ERemoteStoragePlatformSwitch", value: "16" },
                { name: "k_ERemoteStoragePlatformAndroid", value: "32" },
                { name: "k_ERemoteStoragePlatformIOS", value: "64" },
                { name: "k_ERemoteStoragePlatformAll", value: "-1" },
            ]
        },
        {
            enumname: "ERemoteStoragePublishedFileVisibility",
            values: [
                { name: "k_ERemoteStoragePublishedFileVisibilityPublic", value: "0" },
                { name: "k_ERemoteStoragePublishedFileVisibilityFriendsOnly", value: "1" },
                { name: "k_ERemoteStoragePublishedFileVisibilityPrivate", value: "2" },
                { name: "k_ERemoteStoragePublishedFileVisibilityUnlisted", value: "3" },
            ]
        },
        {
            enumname: "EWorkshopFileType",
            values: [
                { name: "k_EWorkshopFileTypeFirst", value: "0" },
                { name: "k_EWorkshopFileTypeCommunity", value: "0" },
                { name: "k_EWorkshopFileTypeMicrotransaction", value: "1" },
                { name: "k_EWorkshopFileTypeCollection", value: "2" },
                { name: "k_EWorkshopFileTypeArt", value: "3" },
                { name: "k_EWorkshopFileTypeVideo", value: "4" },
                { name: "k_EWorkshopFileTypeScreenshot", value: "5" },
                { name: "k_EWorkshopFileTypeGame", value: "6" },
                { name: "k_EWorkshopFileTypeSoftware", value: "7" },
                { name: "k_EWorkshopFileTypeConcept", value: "8" },
                { name: "k_EWorkshopFileTypeWebGuide", value: "9" },
                { name: "k_EWorkshopFileTypeIntegratedGuide", value: "10" },
                { name: "k_EWorkshopFileTypeMerch", value: "11" },
                { name: "k_EWorkshopFileTypeControllerBinding", value: "12" },
                { name: "k_EWorkshopFileTypeSteamworksAccessInvite", value: "13" },
                { name: "k_EWorkshopFileTypeSteamVideo", value: "14" },
                { name: "k_EWorkshopFileTypeGameManagedItem", value: "15" },
                { name: "k_EWorkshopFileTypeMax", value: "16" },
            ]
        },
        {
            enumname: "EWorkshopVote",
            values: [
                { name: "k_EWorkshopVoteUnvoted", value: "0" },
                { name: "k_EWorkshopVoteFor", value: "1" },
                { name: "k_EWorkshopVoteAgainst", value: "2" },
                { name: "k_EWorkshopVoteLater", value: "3" },
            ]
        },
        {
            enumname: "EWorkshopFileAction",
            values: [
                { name: "k_EWorkshopFileActionPlayed", value: "0" },
                { name: "k_EWorkshopFileActionCompleted", value: "1" },
            ]
        },
        {
            enumname: "EWorkshopEnumerationType",
            values: [
                { name: "k_EWorkshopEnumerationTypeRankedByVote", value: "0" },
                { name: "k_EWorkshopEnumerationTypeRecent", value: "1" },
                { name: "k_EWorkshopEnumerationTypeTrending", value: "2" },
                { name: "k_EWorkshopEnumerationTypeFavoritesOfFriends", value: "3" },
                { name: "k_EWorkshopEnumerationTypeVotedByFriends", value: "4" },
                { name: "k_EWorkshopEnumerationTypeContentByFriends", value: "5" },
                { name: "k_EWorkshopEnumerationTypeRecentFromFollowedUsers", value: "6" },
            ]
        },
        {
            enumname: "EWorkshopVideoProvider",
            values: [
                { name: "k_EWorkshopVideoProviderNone", value: "0" },
                { name: "k_EWorkshopVideoProviderYoutube", value: "1" },
            ]
        },
        {
            enumname: "EUGCReadAction",
            values: [
                { name: "k_EUGCRead_ContinueReadingUntilFinished", value: "0" },
                { name: "k_EUGCRead_ContinueReading", value: "1" },
                { name: "k_EUGCRead_Close", value: "2" },
            ]
        },
        {
            enumname: "ERemoteStorageLocalFileChange",
            values: [
                { name: "k_ERemoteStorageLocalFileChange_Invalid", value: "0" },
                { name: "k_ERemoteStorageLocalFileChange_FileUpdated", value: "1" },
                { name: "k_ERemoteStorageLocalFileChange_FileDeleted", value: "2" },
            ]
        },
        {
            enumname: "ERemoteStorageFilePathType",
            values: [
                { name: "k_ERemoteStorageFilePathType_Invalid", value: "0" },
                { name: "k_ERemoteStorageFilePathType_Absolute", value: "1" },
                { name: "k_ERemoteStorageFilePathType_APIFilename", value: "2" },
            ]
        },
        {
            enumname: "ELeaderboardDataRequest",
            values: [
                { name: "k_ELeaderboardDataRequestGlobal", value: "0" },
                { name: "k_ELeaderboardDataRequestGlobalAroundUser", value: "1" },
                { name: "k_ELeaderboardDataRequestFriends", value: "2" },
                { name: "k_ELeaderboardDataRequestUsers", value: "3" },
            ]
        },
        {
            enumname: "ELeaderboardSortMethod",
            values: [
                { name: "k_ELeaderboardSortMethodNone", value: "0" },
                { name: "k_ELeaderboardSortMethodAscending", value: "1" },
                { name: "k_ELeaderboardSortMethodDescending", value: "2" },
            ]
        },
        {
            enumname: "ELeaderboardDisplayType",
            values: [
                { name: "k_ELeaderboardDisplayTypeNone", value: "0" },
                { name: "k_ELeaderboardDisplayTypeNumeric", value: "1" },
                { name: "k_ELeaderboardDisplayTypeTimeSeconds", value: "2" },
                { name: "k_ELeaderboardDisplayTypeTimeMilliSeconds", value: "3" },
            ]
        },
        {
            enumname: "ELeaderboardUploadScoreMethod",
            values: [
                { name: "k_ELeaderboardUploadScoreMethodNone", value: "0" },
                { name: "k_ELeaderboardUploadScoreMethodKeepBest", value: "1" },
                { name: "k_ELeaderboardUploadScoreMethodForceUpdate", value: "2" },
            ]
        },
        {
            enumname: "ERegisterActivationCodeResult",
            values: [
                { name: "k_ERegisterActivationCodeResultOK", value: "0" },
                { name: "k_ERegisterActivationCodeResultFail", value: "1" },
                { name: "k_ERegisterActivationCodeResultAlreadyRegistered", value: "2" },
                { name: "k_ERegisterActivationCodeResultTimeout", value: "3" },
                { name: "k_ERegisterActivationCodeAlreadyOwned", value: "4" },
            ]
        },
        {
            enumname: "EP2PSessionError",
            values: [
                { name: "k_EP2PSessionErrorNone", value: "0" },
                { name: "k_EP2PSessionErrorNoRightsToApp", value: "2" },
                { name: "k_EP2PSessionErrorTimeout", value: "4" },
                { name: "k_EP2PSessionErrorNotRunningApp_DELETED", value: "1" },
                { name: "k_EP2PSessionErrorDestinationNotLoggedIn_DELETED", value: "3" },
                { name: "k_EP2PSessionErrorMax", value: "5" },
            ]
        },
        {
            enumname: "EP2PSend",
            values: [
                { name: "k_EP2PSendUnreliable", value: "0" },
                { name: "k_EP2PSendUnreliableNoDelay", value: "1" },
                { name: "k_EP2PSendReliable", value: "2" },
                { name: "k_EP2PSendReliableWithBuffering", value: "3" },
            ]
        },
        {
            enumname: "ESNetSocketState",
            values: [
                { name: "k_ESNetSocketStateInvalid", value: "0" },
                { name: "k_ESNetSocketStateConnected", value: "1" },
                { name: "k_ESNetSocketStateInitiated", value: "10" },
                { name: "k_ESNetSocketStateLocalCandidatesFound", value: "11" },
                { name: "k_ESNetSocketStateReceivedRemoteCandidates", value: "12" },
                { name: "k_ESNetSocketStateChallengeHandshake", value: "15" },
                { name: "k_ESNetSocketStateDisconnecting", value: "21" },
                { name: "k_ESNetSocketStateLocalDisconnect", value: "22" },
                { name: "k_ESNetSocketStateTimeoutDuringConnect", value: "23" },
                { name: "k_ESNetSocketStateRemoteEndDisconnected", value: "24" },
                { name: "k_ESNetSocketStateConnectionBroken", value: "25" },
            ]
        },
        {
            enumname: "ESNetSocketConnectionType",
            values: [
                { name: "k_ESNetSocketConnectionTypeNotConnected", value: "0" },
                { name: "k_ESNetSocketConnectionTypeUDP", value: "1" },
                { name: "k_ESNetSocketConnectionTypeUDPRelay", value: "2" },
            ]
        },
        {
            enumname: "EVRScreenshotType",
            values: [
                { name: "k_EVRScreenshotType_None", value: "0" },
                { name: "k_EVRScreenshotType_Mono", value: "1" },
                { name: "k_EVRScreenshotType_Stereo", value: "2" },
                { name: "k_EVRScreenshotType_MonoCubemap", value: "3" },
                { name: "k_EVRScreenshotType_MonoPanorama", value: "4" },
                { name: "k_EVRScreenshotType_StereoPanorama", value: "5" },
            ]
        },
        {
            enumname: "AudioPlayback_Status",
            values: [
                { name: "AudioPlayback_Undefined", value: "0" },
                { name: "AudioPlayback_Playing", value: "1" },
                { name: "AudioPlayback_Paused", value: "2" },
                { name: "AudioPlayback_Idle", value: "3" },
            ]
        },
        {
            enumname: "EHTTPMethod",
            values: [
                { name: "k_EHTTPMethodInvalid", value: "0" },
                { name: "k_EHTTPMethodGET", value: "1" },
                { name: "k_EHTTPMethodHEAD", value: "2" },
                { name: "k_EHTTPMethodPOST", value: "3" },
                { name: "k_EHTTPMethodPUT", value: "4" },
                { name: "k_EHTTPMethodDELETE", value: "5" },
                { name: "k_EHTTPMethodOPTIONS", value: "6" },
                { name: "k_EHTTPMethodPATCH", value: "7" },
            ]
        },
        {
            enumname: "EHTTPStatusCode",
            values: [
                { name: "k_EHTTPStatusCodeInvalid", value: "0" },
                { name: "k_EHTTPStatusCode100Continue", value: "100" },
                { name: "k_EHTTPStatusCode101SwitchingProtocols", value: "101" },
                { name: "k_EHTTPStatusCode200OK", value: "200" },
                { name: "k_EHTTPStatusCode201Created", value: "201" },
                { name: "k_EHTTPStatusCode202Accepted", value: "202" },
                { name: "k_EHTTPStatusCode203NonAuthoritative", value: "203" },
                { name: "k_EHTTPStatusCode204NoContent", value: "204" },
                { name: "k_EHTTPStatusCode205ResetContent", value: "205" },
                { name: "k_EHTTPStatusCode206PartialContent", value: "206" },
                { name: "k_EHTTPStatusCode300MultipleChoices", value: "300" },
                { name: "k_EHTTPStatusCode301MovedPermanently", value: "301" },
                { name: "k_EHTTPStatusCode302Found", value: "302" },
                { name: "k_EHTTPStatusCode303SeeOther", value: "303" },
                { name: "k_EHTTPStatusCode304NotModified", value: "304" },
                { name: "k_EHTTPStatusCode305UseProxy", value: "305" },
                { name: "k_EHTTPStatusCode307TemporaryRedirect", value: "307" },
                { name: "k_EHTTPStatusCode400BadRequest", value: "400" },
                { name: "k_EHTTPStatusCode401Unauthorized", value: "401" },
                { name: "k_EHTTPStatusCode402PaymentRequired", value: "402" },
                { name: "k_EHTTPStatusCode403Forbidden", value: "403" },
                { name: "k_EHTTPStatusCode404NotFound", value: "404" },
                { name: "k_EHTTPStatusCode405MethodNotAllowed", value: "405" },
                { name: "k_EHTTPStatusCode406NotAcceptable", value: "406" },
                { name: "k_EHTTPStatusCode407ProxyAuthRequired", value: "407" },
                { name: "k_EHTTPStatusCode408RequestTimeout", value: "408" },
                { name: "k_EHTTPStatusCode409Conflict", value: "409" },
                { name: "k_EHTTPStatusCode410Gone", value: "410" },
                { name: "k_EHTTPStatusCode411LengthRequired", value: "411" },
                { name: "k_EHTTPStatusCode412PreconditionFailed", value: "412" },
                { name: "k_EHTTPStatusCode413RequestEntityTooLarge", value: "413" },
                { name: "k_EHTTPStatusCode414RequestURITooLong", value: "414" },
                { name: "k_EHTTPStatusCode415UnsupportedMediaType", value: "415" },
                { name: "k_EHTTPStatusCode416RequestedRangeNotSatisfiable", value: "416" },
                { name: "k_EHTTPStatusCode417ExpectationFailed", value: "417" },
                { name: "k_EHTTPStatusCode4xxUnknown", value: "418" },
                { name: "k_EHTTPStatusCode429TooManyRequests", value: "429" },
                { name: "k_EHTTPStatusCode444ConnectionClosed", value: "444" },
                { name: "k_EHTTPStatusCode500InternalServerError", value: "500" },
                { name: "k_EHTTPStatusCode501NotImplemented", value: "501" },
                { name: "k_EHTTPStatusCode502BadGateway", value: "502" },
                { name: "k_EHTTPStatusCode503ServiceUnavailable", value: "503" },
                { name: "k_EHTTPStatusCode504GatewayTimeout", value: "504" },
                { name: "k_EHTTPStatusCode505HTTPVersionNotSupported", value: "505" },
                { name: "k_EHTTPStatusCode5xxUnknown", value: "599" },
            ]
        },
        {
            enumname: "EInputSourceMode",
            values: [
                { name: "k_EInputSourceMode_None", value: "0" },
                { name: "k_EInputSourceMode_Dpad", value: "1" },
                { name: "k_EInputSourceMode_Buttons", value: "2" },
                { name: "k_EInputSourceMode_FourButtons", value: "3" },
                { name: "k_EInputSourceMode_AbsoluteMouse", value: "4" },
                { name: "k_EInputSourceMode_RelativeMouse", value: "5" },
                { name: "k_EInputSourceMode_JoystickMove", value: "6" },
                { name: "k_EInputSourceMode_JoystickMouse", value: "7" },
                { name: "k_EInputSourceMode_JoystickCamera", value: "8" },
                { name: "k_EInputSourceMode_ScrollWheel", value: "9" },
                { name: "k_EInputSourceMode_Trigger", value: "10" },
                { name: "k_EInputSourceMode_TouchMenu", value: "11" },
                { name: "k_EInputSourceMode_MouseJoystick", value: "12" },
                { name: "k_EInputSourceMode_MouseRegion", value: "13" },
                { name: "k_EInputSourceMode_RadialMenu", value: "14" },
                { name: "k_EInputSourceMode_SingleButton", value: "15" },
                { name: "k_EInputSourceMode_Switches", value: "16" },
            ]
        },
        {
            enumname: "EInputActionOrigin",
            values: [
                { name: "k_EInputActionOrigin_None", value: "0" },
                { name: "k_EInputActionOrigin_SteamController_A", value: "1" },
                { name: "k_EInputActionOrigin_SteamController_B", value: "2" },
                { name: "k_EInputActionOrigin_SteamController_X", value: "3" },
                { name: "k_EInputActionOrigin_SteamController_Y", value: "4" },
                { name: "k_EInputActionOrigin_SteamController_LeftBumper", value: "5" },
                { name: "k_EInputActionOrigin_SteamController_RightBumper", value: "6" },
                { name: "k_EInputActionOrigin_SteamController_LeftGrip", value: "7" },
                { name: "k_EInputActionOrigin_SteamController_RightGrip", value: "8" },
                { name: "k_EInputActionOrigin_SteamController_Start", value: "9" },
                { name: "k_EInputActionOrigin_SteamController_Back", value: "10" },
                { name: "k_EInputActionOrigin_SteamController_LeftPad_Touch", value: "11" },
                { name: "k_EInputActionOrigin_SteamController_LeftPad_Swipe", value: "12" },
                { name: "k_EInputActionOrigin_SteamController_LeftPad_Click", value: "13" },
                { name: "k_EInputActionOrigin_SteamController_LeftPad_DPadNorth", value: "14" },
                { name: "k_EInputActionOrigin_SteamController_LeftPad_DPadSouth", value: "15" },
                { name: "k_EInputActionOrigin_SteamController_LeftPad_DPadWest", value: "16" },
                { name: "k_EInputActionOrigin_SteamController_LeftPad_DPadEast", value: "17" },
                { name: "k_EInputActionOrigin_SteamController_RightPad_Touch", value: "18" },
                { name: "k_EInputActionOrigin_SteamController_RightPad_Swipe", value: "19" },
                { name: "k_EInputActionOrigin_SteamController_RightPad_Click", value: "20" },
                { name: "k_EInputActionOrigin_SteamController_RightPad_DPadNorth", value: "21" },
                { name: "k_EInputActionOrigin_SteamController_RightPad_DPadSouth", value: "22" },
                { name: "k_EInputActionOrigin_SteamController_RightPad_DPadWest", value: "23" },
                { name: "k_EInputActionOrigin_SteamController_RightPad_DPadEast", value: "24" },
                { name: "k_EInputActionOrigin_SteamController_LeftTrigger_Pull", value: "25" },
                { name: "k_EInputActionOrigin_SteamController_LeftTrigger_Click", value: "26" },
                { name: "k_EInputActionOrigin_SteamController_RightTrigger_Pull", value: "27" },
                { name: "k_EInputActionOrigin_SteamController_RightTrigger_Click", value: "28" },
                { name: "k_EInputActionOrigin_SteamController_LeftStick_Move", value: "29" },
                { name: "k_EInputActionOrigin_SteamController_LeftStick_Click", value: "30" },
                { name: "k_EInputActionOrigin_SteamController_LeftStick_DPadNorth", value: "31" },
                { name: "k_EInputActionOrigin_SteamController_LeftStick_DPadSouth", value: "32" },
                { name: "k_EInputActionOrigin_SteamController_LeftStick_DPadWest", value: "33" },
                { name: "k_EInputActionOrigin_SteamController_LeftStick_DPadEast", value: "34" },
                { name: "k_EInputActionOrigin_SteamController_Gyro_Move", value: "35" },
                { name: "k_EInputActionOrigin_SteamController_Gyro_Pitch", value: "36" },
                { name: "k_EInputActionOrigin_SteamController_Gyro_Yaw", value: "37" },
                { name: "k_EInputActionOrigin_SteamController_Gyro_Roll", value: "38" },
                { name: "k_EInputActionOrigin_SteamController_Reserved0", value: "39" },
                { name: "k_EInputActionOrigin_SteamController_Reserved1", value: "40" },
                { name: "k_EInputActionOrigin_SteamController_Reserved2", value: "41" },
                { name: "k_EInputActionOrigin_SteamController_Reserved3", value: "42" },
                { name: "k_EInputActionOrigin_SteamController_Reserved4", value: "43" },
                { name: "k_EInputActionOrigin_SteamController_Reserved5", value: "44" },
                { name: "k_EInputActionOrigin_SteamController_Reserved6", value: "45" },
                { name: "k_EInputActionOrigin_SteamController_Reserved7", value: "46" },
                { name: "k_EInputActionOrigin_SteamController_Reserved8", value: "47" },
                { name: "k_EInputActionOrigin_SteamController_Reserved9", value: "48" },
                { name: "k_EInputActionOrigin_SteamController_Reserved10", value: "49" },
                { name: "k_EInputActionOrigin_PS4_X", value: "50" },
                { name: "k_EInputActionOrigin_PS4_Circle", value: "51" },
                { name: "k_EInputActionOrigin_PS4_Triangle", value: "52" },
                { name: "k_EInputActionOrigin_PS4_Square", value: "53" },
                { name: "k_EInputActionOrigin_PS4_LeftBumper", value: "54" },
                { name: "k_EInputActionOrigin_PS4_RightBumper", value: "55" },
                { name: "k_EInputActionOrigin_PS4_Options", value: "56" },
                { name: "k_EInputActionOrigin_PS4_Share", value: "57" },
                { name: "k_EInputActionOrigin_PS4_LeftPad_Touch", value: "58" },
                { name: "k_EInputActionOrigin_PS4_LeftPad_Swipe", value: "59" },
                { name: "k_EInputActionOrigin_PS4_LeftPad_Click", value: "60" },
                { name: "k_EInputActionOrigin_PS4_LeftPad_DPadNorth", value: "61" },
                { name: "k_EInputActionOrigin_PS4_LeftPad_DPadSouth", value: "62" },
                { name: "k_EInputActionOrigin_PS4_LeftPad_DPadWest", value: "63" },
                { name: "k_EInputActionOrigin_PS4_LeftPad_DPadEast", value: "64" },
                { name: "k_EInputActionOrigin_PS4_RightPad_Touch", value: "65" },
                { name: "k_EInputActionOrigin_PS4_RightPad_Swipe", value: "66" },
                { name: "k_EInputActionOrigin_PS4_RightPad_Click", value: "67" },
                { name: "k_EInputActionOrigin_PS4_RightPad_DPadNorth", value: "68" },
                { name: "k_EInputActionOrigin_PS4_RightPad_DPadSouth", value: "69" },
                { name: "k_EInputActionOrigin_PS4_RightPad_DPadWest", value: "70" },
                { name: "k_EInputActionOrigin_PS4_RightPad_DPadEast", value: "71" },
                { name: "k_EInputActionOrigin_PS4_CenterPad_Touch", value: "72" },
                { name: "k_EInputActionOrigin_PS4_CenterPad_Swipe", value: "73" },
                { name: "k_EInputActionOrigin_PS4_CenterPad_Click", value: "74" },
                { name: "k_EInputActionOrigin_PS4_CenterPad_DPadNorth", value: "75" },
                { name: "k_EInputActionOrigin_PS4_CenterPad_DPadSouth", value: "76" },
                { name: "k_EInputActionOrigin_PS4_CenterPad_DPadWest", value: "77" },
                { name: "k_EInputActionOrigin_PS4_CenterPad_DPadEast", value: "78" },
                { name: "k_EInputActionOrigin_PS4_LeftTrigger_Pull", value: "79" },
                { name: "k_EInputActionOrigin_PS4_LeftTrigger_Click", value: "80" },
                { name: "k_EInputActionOrigin_PS4_RightTrigger_Pull", value: "81" },
                { name: "k_EInputActionOrigin_PS4_RightTrigger_Click", value: "82" },
                { name: "k_EInputActionOrigin_PS4_LeftStick_Move", value: "83" },
                { name: "k_EInputActionOrigin_PS4_LeftStick_Click", value: "84" },
                { name: "k_EInputActionOrigin_PS4_LeftStick_DPadNorth", value: "85" },
                { name: "k_EInputActionOrigin_PS4_LeftStick_DPadSouth", value: "86" },
                { name: "k_EInputActionOrigin_PS4_LeftStick_DPadWest", value: "87" },
                { name: "k_EInputActionOrigin_PS4_LeftStick_DPadEast", value: "88" },
                { name: "k_EInputActionOrigin_PS4_RightStick_Move", value: "89" },
                { name: "k_EInputActionOrigin_PS4_RightStick_Click", value: "90" },
                { name: "k_EInputActionOrigin_PS4_RightStick_DPadNorth", value: "91" },
                { name: "k_EInputActionOrigin_PS4_RightStick_DPadSouth", value: "92" },
                { name: "k_EInputActionOrigin_PS4_RightStick_DPadWest", value: "93" },
                { name: "k_EInputActionOrigin_PS4_RightStick_DPadEast", value: "94" },
                { name: "k_EInputActionOrigin_PS4_DPad_North", value: "95" },
                { name: "k_EInputActionOrigin_PS4_DPad_South", value: "96" },
                { name: "k_EInputActionOrigin_PS4_DPad_West", value: "97" },
                { name: "k_EInputActionOrigin_PS4_DPad_East", value: "98" },
                { name: "k_EInputActionOrigin_PS4_Gyro_Move", value: "99" },
                { name: "k_EInputActionOrigin_PS4_Gyro_Pitch", value: "100" },
                { name: "k_EInputActionOrigin_PS4_Gyro_Yaw", value: "101" },
                { name: "k_EInputActionOrigin_PS4_Gyro_Roll", value: "102" },
                { name: "k_EInputActionOrigin_PS4_DPad_Move", value: "103" },
                { name: "k_EInputActionOrigin_PS4_Reserved1", value: "104" },
                { name: "k_EInputActionOrigin_PS4_Reserved2", value: "105" },
                { name: "k_EInputActionOrigin_PS4_Reserved3", value: "106" },
                { name: "k_EInputActionOrigin_PS4_Reserved4", value: "107" },
                { name: "k_EInputActionOrigin_PS4_Reserved5", value: "108" },
                { name: "k_EInputActionOrigin_PS4_Reserved6", value: "109" },
                { name: "k_EInputActionOrigin_PS4_Reserved7", value: "110" },
                { name: "k_EInputActionOrigin_PS4_Reserved8", value: "111" },
                { name: "k_EInputActionOrigin_PS4_Reserved9", value: "112" },
                { name: "k_EInputActionOrigin_PS4_Reserved10", value: "113" },
                { name: "k_EInputActionOrigin_XBoxOne_A", value: "114" },
                { name: "k_EInputActionOrigin_XBoxOne_B", value: "115" },
                { name: "k_EInputActionOrigin_XBoxOne_X", value: "116" },
                { name: "k_EInputActionOrigin_XBoxOne_Y", value: "117" },
                { name: "k_EInputActionOrigin_XBoxOne_LeftBumper", value: "118" },
                { name: "k_EInputActionOrigin_XBoxOne_RightBumper", value: "119" },
                { name: "k_EInputActionOrigin_XBoxOne_Menu", value: "120" },
                { name: "k_EInputActionOrigin_XBoxOne_View", value: "121" },
                { name: "k_EInputActionOrigin_XBoxOne_LeftTrigger_Pull", value: "122" },
                { name: "k_EInputActionOrigin_XBoxOne_LeftTrigger_Click", value: "123" },
                { name: "k_EInputActionOrigin_XBoxOne_RightTrigger_Pull", value: "124" },
                { name: "k_EInputActionOrigin_XBoxOne_RightTrigger_Click", value: "125" },
                { name: "k_EInputActionOrigin_XBoxOne_LeftStick_Move", value: "126" },
                { name: "k_EInputActionOrigin_XBoxOne_LeftStick_Click", value: "127" },
                { name: "k_EInputActionOrigin_XBoxOne_LeftStick_DPadNorth", value: "128" },
                { name: "k_EInputActionOrigin_XBoxOne_LeftStick_DPadSouth", value: "129" },
                { name: "k_EInputActionOrigin_XBoxOne_LeftStick_DPadWest", value: "130" },
                { name: "k_EInputActionOrigin_XBoxOne_LeftStick_DPadEast", value: "131" },
                { name: "k_EInputActionOrigin_XBoxOne_RightStick_Move", value: "132" },
                { name: "k_EInputActionOrigin_XBoxOne_RightStick_Click", value: "133" },
                { name: "k_EInputActionOrigin_XBoxOne_RightStick_DPadNorth", value: "134" },
                { name: "k_EInputActionOrigin_XBoxOne_RightStick_DPadSouth", value: "135" },
                { name: "k_EInputActionOrigin_XBoxOne_RightStick_DPadWest", value: "136" },
                { name: "k_EInputActionOrigin_XBoxOne_RightStick_DPadEast", value: "137" },
                { name: "k_EInputActionOrigin_XBoxOne_DPad_North", value: "138" },
                { name: "k_EInputActionOrigin_XBoxOne_DPad_South", value: "139" },
                { name: "k_EInputActionOrigin_XBoxOne_DPad_West", value: "140" },
                { name: "k_EInputActionOrigin_XBoxOne_DPad_East", value: "141" },
                { name: "k_EInputActionOrigin_XBoxOne_DPad_Move", value: "142" },
                { name: "k_EInputActionOrigin_XBoxOne_LeftGrip_Lower", value: "143" },
                { name: "k_EInputActionOrigin_XBoxOne_LeftGrip_Upper", value: "144" },
                { name: "k_EInputActionOrigin_XBoxOne_RightGrip_Lower", value: "145" },
                { name: "k_EInputActionOrigin_XBoxOne_RightGrip_Upper", value: "146" },
                { name: "k_EInputActionOrigin_XBoxOne_Share", value: "147" },
                { name: "k_EInputActionOrigin_XBoxOne_Reserved6", value: "148" },
                { name: "k_EInputActionOrigin_XBoxOne_Reserved7", value: "149" },
                { name: "k_EInputActionOrigin_XBoxOne_Reserved8", value: "150" },
                { name: "k_EInputActionOrigin_XBoxOne_Reserved9", value: "151" },
                { name: "k_EInputActionOrigin_XBoxOne_Reserved10", value: "152" },
                { name: "k_EInputActionOrigin_XBox360_A", value: "153" },
                { name: "k_EInputActionOrigin_XBox360_B", value: "154" },
                { name: "k_EInputActionOrigin_XBox360_X", value: "155" },
                { name: "k_EInputActionOrigin_XBox360_Y", value: "156" },
                { name: "k_EInputActionOrigin_XBox360_LeftBumper", value: "157" },
                { name: "k_EInputActionOrigin_XBox360_RightBumper", value: "158" },
                { name: "k_EInputActionOrigin_XBox360_Start", value: "159" },
                { name: "k_EInputActionOrigin_XBox360_Back", value: "160" },
                { name: "k_EInputActionOrigin_XBox360_LeftTrigger_Pull", value: "161" },
                { name: "k_EInputActionOrigin_XBox360_LeftTrigger_Click", value: "162" },
                { name: "k_EInputActionOrigin_XBox360_RightTrigger_Pull", value: "163" },
                { name: "k_EInputActionOrigin_XBox360_RightTrigger_Click", value: "164" },
                { name: "k_EInputActionOrigin_XBox360_LeftStick_Move", value: "165" },
                { name: "k_EInputActionOrigin_XBox360_LeftStick_Click", value: "166" },
                { name: "k_EInputActionOrigin_XBox360_LeftStick_DPadNorth", value: "167" },
                { name: "k_EInputActionOrigin_XBox360_LeftStick_DPadSouth", value: "168" },
                { name: "k_EInputActionOrigin_XBox360_LeftStick_DPadWest", value: "169" },
                { name: "k_EInputActionOrigin_XBox360_LeftStick_DPadEast", value: "170" },
                { name: "k_EInputActionOrigin_XBox360_RightStick_Move", value: "171" },
                { name: "k_EInputActionOrigin_XBox360_RightStick_Click", value: "172" },
                { name: "k_EInputActionOrigin_XBox360_RightStick_DPadNorth", value: "173" },
                { name: "k_EInputActionOrigin_XBox360_RightStick_DPadSouth", value: "174" },
                { name: "k_EInputActionOrigin_XBox360_RightStick_DPadWest", value: "175" },
                { name: "k_EInputActionOrigin_XBox360_RightStick_DPadEast", value: "176" },
                { name: "k_EInputActionOrigin_XBox360_DPad_North", value: "177" },
                { name: "k_EInputActionOrigin_XBox360_DPad_South", value: "178" },
                { name: "k_EInputActionOrigin_XBox360_DPad_West", value: "179" },
                { name: "k_EInputActionOrigin_XBox360_DPad_East", value: "180" },
                { name: "k_EInputActionOrigin_XBox360_DPad_Move", value: "181" },
                { name: "k_EInputActionOrigin_XBox360_Reserved1", value: "182" },
                { name: "k_EInputActionOrigin_XBox360_Reserved2", value: "183" },
                { name: "k_EInputActionOrigin_XBox360_Reserved3", value: "184" },
                { name: "k_EInputActionOrigin_XBox360_Reserved4", value: "185" },
                { name: "k_EInputActionOrigin_XBox360_Reserved5", value: "186" },
                { name: "k_EInputActionOrigin_XBox360_Reserved6", value: "187" },
                { name: "k_EInputActionOrigin_XBox360_Reserved7", value: "188" },
                { name: "k_EInputActionOrigin_XBox360_Reserved8", value: "189" },
                { name: "k_EInputActionOrigin_XBox360_Reserved9", value: "190" },
                { name: "k_EInputActionOrigin_XBox360_Reserved10", value: "191" },
                { name: "k_EInputActionOrigin_Switch_A", value: "192" },
                { name: "k_EInputActionOrigin_Switch_B", value: "193" },
                { name: "k_EInputActionOrigin_Switch_X", value: "194" },
                { name: "k_EInputActionOrigin_Switch_Y", value: "195" },
                { name: "k_EInputActionOrigin_Switch_LeftBumper", value: "196" },
                { name: "k_EInputActionOrigin_Switch_RightBumper", value: "197" },
                { name: "k_EInputActionOrigin_Switch_Plus", value: "198" },
                { name: "k_EInputActionOrigin_Switch_Minus", value: "199" },
                { name: "k_EInputActionOrigin_Switch_Capture", value: "200" },
                { name: "k_EInputActionOrigin_Switch_LeftTrigger_Pull", value: "201" },
                { name: "k_EInputActionOrigin_Switch_LeftTrigger_Click", value: "202" },
                { name: "k_EInputActionOrigin_Switch_RightTrigger_Pull", value: "203" },
                { name: "k_EInputActionOrigin_Switch_RightTrigger_Click", value: "204" },
                { name: "k_EInputActionOrigin_Switch_LeftStick_Move", value: "205" },
                { name: "k_EInputActionOrigin_Switch_LeftStick_Click", value: "206" },
                { name: "k_EInputActionOrigin_Switch_LeftStick_DPadNorth", value: "207" },
                { name: "k_EInputActionOrigin_Switch_LeftStick_DPadSouth", value: "208" },
                { name: "k_EInputActionOrigin_Switch_LeftStick_DPadWest", value: "209" },
                { name: "k_EInputActionOrigin_Switch_LeftStick_DPadEast", value: "210" },
                { name: "k_EInputActionOrigin_Switch_RightStick_Move", value: "211" },
                { name: "k_EInputActionOrigin_Switch_RightStick_Click", value: "212" },
                { name: "k_EInputActionOrigin_Switch_RightStick_DPadNorth", value: "213" },
                { name: "k_EInputActionOrigin_Switch_RightStick_DPadSouth", value: "214" },
                { name: "k_EInputActionOrigin_Switch_RightStick_DPadWest", value: "215" },
                { name: "k_EInputActionOrigin_Switch_RightStick_DPadEast", value: "216" },
                { name: "k_EInputActionOrigin_Switch_DPad_North", value: "217" },
                { name: "k_EInputActionOrigin_Switch_DPad_South", value: "218" },
                { name: "k_EInputActionOrigin_Switch_DPad_West", value: "219" },
                { name: "k_EInputActionOrigin_Switch_DPad_East", value: "220" },
                { name: "k_EInputActionOrigin_Switch_ProGyro_Move", value: "221" },
                { name: "k_EInputActionOrigin_Switch_ProGyro_Pitch", value: "222" },
                { name: "k_EInputActionOrigin_Switch_ProGyro_Yaw", value: "223" },
                { name: "k_EInputActionOrigin_Switch_ProGyro_Roll", value: "224" },
                { name: "k_EInputActionOrigin_Switch_DPad_Move", value: "225" },
                { name: "k_EInputActionOrigin_Switch_Reserved1", value: "226" },
                { name: "k_EInputActionOrigin_Switch_Reserved2", value: "227" },
                { name: "k_EInputActionOrigin_Switch_Reserved3", value: "228" },
                { name: "k_EInputActionOrigin_Switch_Reserved4", value: "229" },
                { name: "k_EInputActionOrigin_Switch_Reserved5", value: "230" },
                { name: "k_EInputActionOrigin_Switch_Reserved6", value: "231" },
                { name: "k_EInputActionOrigin_Switch_Reserved7", value: "232" },
                { name: "k_EInputActionOrigin_Switch_Reserved8", value: "233" },
                { name: "k_EInputActionOrigin_Switch_Reserved9", value: "234" },
                { name: "k_EInputActionOrigin_Switch_Reserved10", value: "235" },
                { name: "k_EInputActionOrigin_Switch_RightGyro_Move", value: "236" },
                { name: "k_EInputActionOrigin_Switch_RightGyro_Pitch", value: "237" },
                { name: "k_EInputActionOrigin_Switch_RightGyro_Yaw", value: "238" },
                { name: "k_EInputActionOrigin_Switch_RightGyro_Roll", value: "239" },
                { name: "k_EInputActionOrigin_Switch_LeftGyro_Move", value: "240" },
                { name: "k_EInputActionOrigin_Switch_LeftGyro_Pitch", value: "241" },
                { name: "k_EInputActionOrigin_Switch_LeftGyro_Yaw", value: "242" },
                { name: "k_EInputActionOrigin_Switch_LeftGyro_Roll", value: "243" },
                { name: "k_EInputActionOrigin_Switch_LeftGrip_Lower", value: "244" },
                { name: "k_EInputActionOrigin_Switch_LeftGrip_Upper", value: "245" },
                { name: "k_EInputActionOrigin_Switch_RightGrip_Lower", value: "246" },
                { name: "k_EInputActionOrigin_Switch_RightGrip_Upper", value: "247" },
                { name: "k_EInputActionOrigin_Switch_Reserved11", value: "248" },
                { name: "k_EInputActionOrigin_Switch_Reserved12", value: "249" },
                { name: "k_EInputActionOrigin_Switch_Reserved13", value: "250" },
                { name: "k_EInputActionOrigin_Switch_Reserved14", value: "251" },
                { name: "k_EInputActionOrigin_Switch_Reserved15", value: "252" },
                { name: "k_EInputActionOrigin_Switch_Reserved16", value: "253" },
                { name: "k_EInputActionOrigin_Switch_Reserved17", value: "254" },
                { name: "k_EInputActionOrigin_Switch_Reserved18", value: "255" },
                { name: "k_EInputActionOrigin_Switch_Reserved19", value: "256" },
                { name: "k_EInputActionOrigin_Switch_Reserved20", value: "257" },
                { name: "k_EInputActionOrigin_PS5_X", value: "258" },
                { name: "k_EInputActionOrigin_PS5_Circle", value: "259" },
                { name: "k_EInputActionOrigin_PS5_Triangle", value: "260" },
                { name: "k_EInputActionOrigin_PS5_Square", value: "261" },
                { name: "k_EInputActionOrigin_PS5_LeftBumper", value: "262" },
                { name: "k_EInputActionOrigin_PS5_RightBumper", value: "263" },
                { name: "k_EInputActionOrigin_PS5_Option", value: "264" },
                { name: "k_EInputActionOrigin_PS5_Create", value: "265" },
                { name: "k_EInputActionOrigin_PS5_Mute", value: "266" },
                { name: "k_EInputActionOrigin_PS5_LeftPad_Touch", value: "267" },
                { name: "k_EInputActionOrigin_PS5_LeftPad_Swipe", value: "268" },
                { name: "k_EInputActionOrigin_PS5_LeftPad_Click", value: "269" },
                { name: "k_EInputActionOrigin_PS5_LeftPad_DPadNorth", value: "270" },
                { name: "k_EInputActionOrigin_PS5_LeftPad_DPadSouth", value: "271" },
                { name: "k_EInputActionOrigin_PS5_LeftPad_DPadWest", value: "272" },
                { name: "k_EInputActionOrigin_PS5_LeftPad_DPadEast", value: "273" },
                { name: "k_EInputActionOrigin_PS5_RightPad_Touch", value: "274" },
                { name: "k_EInputActionOrigin_PS5_RightPad_Swipe", value: "275" },
                { name: "k_EInputActionOrigin_PS5_RightPad_Click", value: "276" },
                { name: "k_EInputActionOrigin_PS5_RightPad_DPadNorth", value: "277" },
                { name: "k_EInputActionOrigin_PS5_RightPad_DPadSouth", value: "278" },
                { name: "k_EInputActionOrigin_PS5_RightPad_DPadWest", value: "279" },
                { name: "k_EInputActionOrigin_PS5_RightPad_DPadEast", value: "280" },
                { name: "k_EInputActionOrigin_PS5_CenterPad_Touch", value: "281" },
                { name: "k_EInputActionOrigin_PS5_CenterPad_Swipe", value: "282" },
                { name: "k_EInputActionOrigin_PS5_CenterPad_Click", value: "283" },
                { name: "k_EInputActionOrigin_PS5_CenterPad_DPadNorth", value: "284" },
                { name: "k_EInputActionOrigin_PS5_CenterPad_DPadSouth", value: "285" },
                { name: "k_EInputActionOrigin_PS5_CenterPad_DPadWest", value: "286" },
                { name: "k_EInputActionOrigin_PS5_CenterPad_DPadEast", value: "287" },
                { name: "k_EInputActionOrigin_PS5_LeftTrigger_Pull", value: "288" },
                { name: "k_EInputActionOrigin_PS5_LeftTrigger_Click", value: "289" },
                { name: "k_EInputActionOrigin_PS5_RightTrigger_Pull", value: "290" },
                { name: "k_EInputActionOrigin_PS5_RightTrigger_Click", value: "291" },
                { name: "k_EInputActionOrigin_PS5_LeftStick_Move", value: "292" },
                { name: "k_EInputActionOrigin_PS5_LeftStick_Click", value: "293" },
                { name: "k_EInputActionOrigin_PS5_LeftStick_DPadNorth", value: "294" },
                { name: "k_EInputActionOrigin_PS5_LeftStick_DPadSouth", value: "295" },
                { name: "k_EInputActionOrigin_PS5_LeftStick_DPadWest", value: "296" },
                { name: "k_EInputActionOrigin_PS5_LeftStick_DPadEast", value: "297" },
                { name: "k_EInputActionOrigin_PS5_RightStick_Move", value: "298" },
                { name: "k_EInputActionOrigin_PS5_RightStick_Click", value: "299" },
                { name: "k_EInputActionOrigin_PS5_RightStick_DPadNorth", value: "300" },
                { name: "k_EInputActionOrigin_PS5_RightStick_DPadSouth", value: "301" },
                { name: "k_EInputActionOrigin_PS5_RightStick_DPadWest", value: "302" },
                { name: "k_EInputActionOrigin_PS5_RightStick_DPadEast", value: "303" },
                { name: "k_EInputActionOrigin_PS5_DPad_North", value: "304" },
                { name: "k_EInputActionOrigin_PS5_DPad_South", value: "305" },
                { name: "k_EInputActionOrigin_PS5_DPad_West", value: "306" },
                { name: "k_EInputActionOrigin_PS5_DPad_East", value: "307" },
                { name: "k_EInputActionOrigin_PS5_Gyro_Move", value: "308" },
                { name: "k_EInputActionOrigin_PS5_Gyro_Pitch", value: "309" },
                { name: "k_EInputActionOrigin_PS5_Gyro_Yaw", value: "310" },
                { name: "k_EInputActionOrigin_PS5_Gyro_Roll", value: "311" },
                { name: "k_EInputActionOrigin_PS5_DPad_Move", value: "312" },
                { name: "k_EInputActionOrigin_PS5_Reserved1", value: "313" },
                { name: "k_EInputActionOrigin_PS5_Reserved2", value: "314" },
                { name: "k_EInputActionOrigin_PS5_Reserved3", value: "315" },
                { name: "k_EInputActionOrigin_PS5_Reserved4", value: "316" },
                { name: "k_EInputActionOrigin_PS5_Reserved5", value: "317" },
                { name: "k_EInputActionOrigin_PS5_Reserved6", value: "318" },
                { name: "k_EInputActionOrigin_PS5_Reserved7", value: "319" },
                { name: "k_EInputActionOrigin_PS5_Reserved8", value: "320" },
                { name: "k_EInputActionOrigin_PS5_Reserved9", value: "321" },
                { name: "k_EInputActionOrigin_PS5_Reserved10", value: "322" },
                { name: "k_EInputActionOrigin_PS5_Reserved11", value: "323" },
                { name: "k_EInputActionOrigin_PS5_Reserved12", value: "324" },
                { name: "k_EInputActionOrigin_PS5_Reserved13", value: "325" },
                { name: "k_EInputActionOrigin_PS5_Reserved14", value: "326" },
                { name: "k_EInputActionOrigin_PS5_Reserved15", value: "327" },
                { name: "k_EInputActionOrigin_PS5_Reserved16", value: "328" },
                { name: "k_EInputActionOrigin_PS5_Reserved17", value: "329" },
                { name: "k_EInputActionOrigin_PS5_Reserved18", value: "330" },
                { name: "k_EInputActionOrigin_PS5_Reserved19", value: "331" },
                { name: "k_EInputActionOrigin_PS5_Reserved20", value: "332" },
                { name: "k_EInputActionOrigin_SteamDeck_A", value: "333" },
                { name: "k_EInputActionOrigin_SteamDeck_B", value: "334" },
                { name: "k_EInputActionOrigin_SteamDeck_X", value: "335" },
                { name: "k_EInputActionOrigin_SteamDeck_Y", value: "336" },
                { name: "k_EInputActionOrigin_SteamDeck_L1", value: "337" },
                { name: "k_EInputActionOrigin_SteamDeck_R1", value: "338" },
                { name: "k_EInputActionOrigin_SteamDeck_Menu", value: "339" },
                { name: "k_EInputActionOrigin_SteamDeck_View", value: "340" },
                { name: "k_EInputActionOrigin_SteamDeck_LeftPad_Touch", value: "341" },
                { name: "k_EInputActionOrigin_SteamDeck_LeftPad_Swipe", value: "342" },
                { name: "k_EInputActionOrigin_SteamDeck_LeftPad_Click", value: "343" },
                { name: "k_EInputActionOrigin_SteamDeck_LeftPad_DPadNorth", value: "344" },
                { name: "k_EInputActionOrigin_SteamDeck_LeftPad_DPadSouth", value: "345" },
                { name: "k_EInputActionOrigin_SteamDeck_LeftPad_DPadWest", value: "346" },
                { name: "k_EInputActionOrigin_SteamDeck_LeftPad_DPadEast", value: "347" },
                { name: "k_EInputActionOrigin_SteamDeck_RightPad_Touch", value: "348" },
                { name: "k_EInputActionOrigin_SteamDeck_RightPad_Swipe", value: "349" },
                { name: "k_EInputActionOrigin_SteamDeck_RightPad_Click", value: "350" },
                { name: "k_EInputActionOrigin_SteamDeck_RightPad_DPadNorth", value: "351" },
                { name: "k_EInputActionOrigin_SteamDeck_RightPad_DPadSouth", value: "352" },
                { name: "k_EInputActionOrigin_SteamDeck_RightPad_DPadWest", value: "353" },
                { name: "k_EInputActionOrigin_SteamDeck_RightPad_DPadEast", value: "354" },
                { name: "k_EInputActionOrigin_SteamDeck_L2_SoftPull", value: "355" },
                { name: "k_EInputActionOrigin_SteamDeck_L2", value: "356" },
                { name: "k_EInputActionOrigin_SteamDeck_R2_SoftPull", value: "357" },
                { name: "k_EInputActionOrigin_SteamDeck_R2", value: "358" },
                { name: "k_EInputActionOrigin_SteamDeck_LeftStick_Move", value: "359" },
                { name: "k_EInputActionOrigin_SteamDeck_L3", value: "360" },
                { name: "k_EInputActionOrigin_SteamDeck_LeftStick_DPadNorth", value: "361" },
                { name: "k_EInputActionOrigin_SteamDeck_LeftStick_DPadSouth", value: "362" },
                { name: "k_EInputActionOrigin_SteamDeck_LeftStick_DPadWest", value: "363" },
                { name: "k_EInputActionOrigin_SteamDeck_LeftStick_DPadEast", value: "364" },
                { name: "k_EInputActionOrigin_SteamDeck_LeftStick_Touch", value: "365" },
                { name: "k_EInputActionOrigin_SteamDeck_RightStick_Move", value: "366" },
                { name: "k_EInputActionOrigin_SteamDeck_R3", value: "367" },
                { name: "k_EInputActionOrigin_SteamDeck_RightStick_DPadNorth", value: "368" },
                { name: "k_EInputActionOrigin_SteamDeck_RightStick_DPadSouth", value: "369" },
                { name: "k_EInputActionOrigin_SteamDeck_RightStick_DPadWest", value: "370" },
                { name: "k_EInputActionOrigin_SteamDeck_RightStick_DPadEast", value: "371" },
                { name: "k_EInputActionOrigin_SteamDeck_RightStick_Touch", value: "372" },
                { name: "k_EInputActionOrigin_SteamDeck_L4", value: "373" },
                { name: "k_EInputActionOrigin_SteamDeck_R4", value: "374" },
                { name: "k_EInputActionOrigin_SteamDeck_L5", value: "375" },
                { name: "k_EInputActionOrigin_SteamDeck_R5", value: "376" },
                { name: "k_EInputActionOrigin_SteamDeck_DPad_Move", value: "377" },
                { name: "k_EInputActionOrigin_SteamDeck_DPad_North", value: "378" },
                { name: "k_EInputActionOrigin_SteamDeck_DPad_South", value: "379" },
                { name: "k_EInputActionOrigin_SteamDeck_DPad_West", value: "380" },
                { name: "k_EInputActionOrigin_SteamDeck_DPad_East", value: "381" },
                { name: "k_EInputActionOrigin_SteamDeck_Gyro_Move", value: "382" },
                { name: "k_EInputActionOrigin_SteamDeck_Gyro_Pitch", value: "383" },
                { name: "k_EInputActionOrigin_SteamDeck_Gyro_Yaw", value: "384" },
                { name: "k_EInputActionOrigin_SteamDeck_Gyro_Roll", value: "385" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved1", value: "386" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved2", value: "387" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved3", value: "388" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved4", value: "389" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved5", value: "390" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved6", value: "391" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved7", value: "392" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved8", value: "393" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved9", value: "394" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved10", value: "395" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved11", value: "396" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved12", value: "397" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved13", value: "398" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved14", value: "399" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved15", value: "400" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved16", value: "401" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved17", value: "402" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved18", value: "403" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved19", value: "404" },
                { name: "k_EInputActionOrigin_SteamDeck_Reserved20", value: "405" },
                { name: "k_EInputActionOrigin_Count", value: "406" },
                { name: "k_EInputActionOrigin_MaximumPossibleValue", value: "32767" },
            ]
        },
        {
            enumname: "EXboxOrigin",
            values: [
                { name: "k_EXboxOrigin_A", value: "0" },
                { name: "k_EXboxOrigin_B", value: "1" },
                { name: "k_EXboxOrigin_X", value: "2" },
                { name: "k_EXboxOrigin_Y", value: "3" },
                { name: "k_EXboxOrigin_LeftBumper", value: "4" },
                { name: "k_EXboxOrigin_RightBumper", value: "5" },
                { name: "k_EXboxOrigin_Menu", value: "6" },
                { name: "k_EXboxOrigin_View", value: "7" },
                { name: "k_EXboxOrigin_LeftTrigger_Pull", value: "8" },
                { name: "k_EXboxOrigin_LeftTrigger_Click", value: "9" },
                { name: "k_EXboxOrigin_RightTrigger_Pull", value: "10" },
                { name: "k_EXboxOrigin_RightTrigger_Click", value: "11" },
                { name: "k_EXboxOrigin_LeftStick_Move", value: "12" },
                { name: "k_EXboxOrigin_LeftStick_Click", value: "13" },
                { name: "k_EXboxOrigin_LeftStick_DPadNorth", value: "14" },
                { name: "k_EXboxOrigin_LeftStick_DPadSouth", value: "15" },
                { name: "k_EXboxOrigin_LeftStick_DPadWest", value: "16" },
                { name: "k_EXboxOrigin_LeftStick_DPadEast", value: "17" },
                { name: "k_EXboxOrigin_RightStick_Move", value: "18" },
                { name: "k_EXboxOrigin_RightStick_Click", value: "19" },
                { name: "k_EXboxOrigin_RightStick_DPadNorth", value: "20" },
                { name: "k_EXboxOrigin_RightStick_DPadSouth", value: "21" },
                { name: "k_EXboxOrigin_RightStick_DPadWest", value: "22" },
                { name: "k_EXboxOrigin_RightStick_DPadEast", value: "23" },
                { name: "k_EXboxOrigin_DPad_North", value: "24" },
                { name: "k_EXboxOrigin_DPad_South", value: "25" },
                { name: "k_EXboxOrigin_DPad_West", value: "26" },
                { name: "k_EXboxOrigin_DPad_East", value: "27" },
                { name: "k_EXboxOrigin_Count", value: "28" },
            ]
        },
        {
            enumname: "ESteamControllerPad",
            values: [
                { name: "k_ESteamControllerPad_Left", value: "0" },
                { name: "k_ESteamControllerPad_Right", value: "1" },
            ]
        },
        {
            enumname: "EControllerHapticLocation",
            values: [
                { name: "k_EControllerHapticLocation_Left", value: "1" },
                { name: "k_EControllerHapticLocation_Right", value: "2" },
                { name: "k_EControllerHapticLocation_Both", value: "3" },
            ]
        },
        {
            enumname: "EControllerHapticType",
            values: [
                { name: "k_EControllerHapticType_Off", value: "0" },
                { name: "k_EControllerHapticType_Tick", value: "1" },
                { name: "k_EControllerHapticType_Click", value: "2" },
            ]
        },
        {
            enumname: "ESteamInputType",
            values: [
                { name: "k_ESteamInputType_Unknown", value: "0" },
                { name: "k_ESteamInputType_SteamController", value: "1" },
                { name: "k_ESteamInputType_XBox360Controller", value: "2" },
                { name: "k_ESteamInputType_XBoxOneController", value: "3" },
                { name: "k_ESteamInputType_GenericGamepad", value: "4" },
                { name: "k_ESteamInputType_PS4Controller", value: "5" },
                { name: "k_ESteamInputType_AppleMFiController", value: "6" },
                { name: "k_ESteamInputType_AndroidController", value: "7" },
                { name: "k_ESteamInputType_SwitchJoyConPair", value: "8" },
                { name: "k_ESteamInputType_SwitchJoyConSingle", value: "9" },
                { name: "k_ESteamInputType_SwitchProController", value: "10" },
                { name: "k_ESteamInputType_MobileTouch", value: "11" },
                { name: "k_ESteamInputType_PS3Controller", value: "12" },
                { name: "k_ESteamInputType_PS5Controller", value: "13" },
                { name: "k_ESteamInputType_SteamDeckController", value: "14" },
                { name: "k_ESteamInputType_Count", value: "15" },
                { name: "k_ESteamInputType_MaximumPossibleValue", value: "255" },
            ]
        },
        {
            enumname: "ESteamInputConfigurationEnableType",
            values: [
                { name: "k_ESteamInputConfigurationEnableType_None", value: "0" },
                { name: "k_ESteamInputConfigurationEnableType_Playstation", value: "1" },
                { name: "k_ESteamInputConfigurationEnableType_Xbox", value: "2" },
                { name: "k_ESteamInputConfigurationEnableType_Generic", value: "4" },
                { name: "k_ESteamInputConfigurationEnableType_Switch", value: "8" },
            ]
        },
        {
            enumname: "ESteamInputLEDFlag",
            values: [
                { name: "k_ESteamInputLEDFlag_SetColor", value: "0" },
                { name: "k_ESteamInputLEDFlag_RestoreUserDefault", value: "1" },
            ]
        },
        {
            enumname: "ESteamInputGlyphSize",
            values: [
                { name: "k_ESteamInputGlyphSize_Small", value: "0" },
                { name: "k_ESteamInputGlyphSize_Medium", value: "1" },
                { name: "k_ESteamInputGlyphSize_Large", value: "2" },
                { name: "k_ESteamInputGlyphSize_Count", value: "3" },
            ]
        },
        {
            enumname: "ESteamInputGlyphStyle",
            values: [
                { name: "ESteamInputGlyphStyle_Knockout", value: "0" },
                { name: "ESteamInputGlyphStyle_Light", value: "1" },
                { name: "ESteamInputGlyphStyle_Dark", value: "2" },
                { name: "ESteamInputGlyphStyle_NeutralColorABXY", value: "16" },
                { name: "ESteamInputGlyphStyle_SolidABXY", value: "32" },
            ]
        },
        {
            enumname: "ESteamInputActionEventType",
            values: [
                { name: "ESteamInputActionEventType_DigitalAction", value: "0" },
                { name: "ESteamInputActionEventType_AnalogAction", value: "1" },
            ]
        },
        {
            enumname: "EControllerActionOrigin",
            values: [
                { name: "k_EControllerActionOrigin_None", value: "0" },
                { name: "k_EControllerActionOrigin_A", value: "1" },
                { name: "k_EControllerActionOrigin_B", value: "2" },
                { name: "k_EControllerActionOrigin_X", value: "3" },
                { name: "k_EControllerActionOrigin_Y", value: "4" },
                { name: "k_EControllerActionOrigin_LeftBumper", value: "5" },
                { name: "k_EControllerActionOrigin_RightBumper", value: "6" },
                { name: "k_EControllerActionOrigin_LeftGrip", value: "7" },
                { name: "k_EControllerActionOrigin_RightGrip", value: "8" },
                { name: "k_EControllerActionOrigin_Start", value: "9" },
                { name: "k_EControllerActionOrigin_Back", value: "10" },
                { name: "k_EControllerActionOrigin_LeftPad_Touch", value: "11" },
                { name: "k_EControllerActionOrigin_LeftPad_Swipe", value: "12" },
                { name: "k_EControllerActionOrigin_LeftPad_Click", value: "13" },
                { name: "k_EControllerActionOrigin_LeftPad_DPadNorth", value: "14" },
                { name: "k_EControllerActionOrigin_LeftPad_DPadSouth", value: "15" },
                { name: "k_EControllerActionOrigin_LeftPad_DPadWest", value: "16" },
                { name: "k_EControllerActionOrigin_LeftPad_DPadEast", value: "17" },
                { name: "k_EControllerActionOrigin_RightPad_Touch", value: "18" },
                { name: "k_EControllerActionOrigin_RightPad_Swipe", value: "19" },
                { name: "k_EControllerActionOrigin_RightPad_Click", value: "20" },
                { name: "k_EControllerActionOrigin_RightPad_DPadNorth", value: "21" },
                { name: "k_EControllerActionOrigin_RightPad_DPadSouth", value: "22" },
                { name: "k_EControllerActionOrigin_RightPad_DPadWest", value: "23" },
                { name: "k_EControllerActionOrigin_RightPad_DPadEast", value: "24" },
                { name: "k_EControllerActionOrigin_LeftTrigger_Pull", value: "25" },
                { name: "k_EControllerActionOrigin_LeftTrigger_Click", value: "26" },
                { name: "k_EControllerActionOrigin_RightTrigger_Pull", value: "27" },
                { name: "k_EControllerActionOrigin_RightTrigger_Click", value: "28" },
                { name: "k_EControllerActionOrigin_LeftStick_Move", value: "29" },
                { name: "k_EControllerActionOrigin_LeftStick_Click", value: "30" },
                { name: "k_EControllerActionOrigin_LeftStick_DPadNorth", value: "31" },
                { name: "k_EControllerActionOrigin_LeftStick_DPadSouth", value: "32" },
                { name: "k_EControllerActionOrigin_LeftStick_DPadWest", value: "33" },
                { name: "k_EControllerActionOrigin_LeftStick_DPadEast", value: "34" },
                { name: "k_EControllerActionOrigin_Gyro_Move", value: "35" },
                { name: "k_EControllerActionOrigin_Gyro_Pitch", value: "36" },
                { name: "k_EControllerActionOrigin_Gyro_Yaw", value: "37" },
                { name: "k_EControllerActionOrigin_Gyro_Roll", value: "38" },
                { name: "k_EControllerActionOrigin_PS4_X", value: "39" },
                { name: "k_EControllerActionOrigin_PS4_Circle", value: "40" },
                { name: "k_EControllerActionOrigin_PS4_Triangle", value: "41" },
                { name: "k_EControllerActionOrigin_PS4_Square", value: "42" },
                { name: "k_EControllerActionOrigin_PS4_LeftBumper", value: "43" },
                { name: "k_EControllerActionOrigin_PS4_RightBumper", value: "44" },
                { name: "k_EControllerActionOrigin_PS4_Options", value: "45" },
                { name: "k_EControllerActionOrigin_PS4_Share", value: "46" },
                { name: "k_EControllerActionOrigin_PS4_LeftPad_Touch", value: "47" },
                { name: "k_EControllerActionOrigin_PS4_LeftPad_Swipe", value: "48" },
                { name: "k_EControllerActionOrigin_PS4_LeftPad_Click", value: "49" },
                { name: "k_EControllerActionOrigin_PS4_LeftPad_DPadNorth", value: "50" },
                { name: "k_EControllerActionOrigin_PS4_LeftPad_DPadSouth", value: "51" },
                { name: "k_EControllerActionOrigin_PS4_LeftPad_DPadWest", value: "52" },
                { name: "k_EControllerActionOrigin_PS4_LeftPad_DPadEast", value: "53" },
                { name: "k_EControllerActionOrigin_PS4_RightPad_Touch", value: "54" },
                { name: "k_EControllerActionOrigin_PS4_RightPad_Swipe", value: "55" },
                { name: "k_EControllerActionOrigin_PS4_RightPad_Click", value: "56" },
                { name: "k_EControllerActionOrigin_PS4_RightPad_DPadNorth", value: "57" },
                { name: "k_EControllerActionOrigin_PS4_RightPad_DPadSouth", value: "58" },
                { name: "k_EControllerActionOrigin_PS4_RightPad_DPadWest", value: "59" },
                { name: "k_EControllerActionOrigin_PS4_RightPad_DPadEast", value: "60" },
                { name: "k_EControllerActionOrigin_PS4_CenterPad_Touch", value: "61" },
                { name: "k_EControllerActionOrigin_PS4_CenterPad_Swipe", value: "62" },
                { name: "k_EControllerActionOrigin_PS4_CenterPad_Click", value: "63" },
                { name: "k_EControllerActionOrigin_PS4_CenterPad_DPadNorth", value: "64" },
                { name: "k_EControllerActionOrigin_PS4_CenterPad_DPadSouth", value: "65" },
                { name: "k_EControllerActionOrigin_PS4_CenterPad_DPadWest", value: "66" },
                { name: "k_EControllerActionOrigin_PS4_CenterPad_DPadEast", value: "67" },
                { name: "k_EControllerActionOrigin_PS4_LeftTrigger_Pull", value: "68" },
                { name: "k_EControllerActionOrigin_PS4_LeftTrigger_Click", value: "69" },
                { name: "k_EControllerActionOrigin_PS4_RightTrigger_Pull", value: "70" },
                { name: "k_EControllerActionOrigin_PS4_RightTrigger_Click", value: "71" },
                { name: "k_EControllerActionOrigin_PS4_LeftStick_Move", value: "72" },
                { name: "k_EControllerActionOrigin_PS4_LeftStick_Click", value: "73" },
                { name: "k_EControllerActionOrigin_PS4_LeftStick_DPadNorth", value: "74" },
                { name: "k_EControllerActionOrigin_PS4_LeftStick_DPadSouth", value: "75" },
                { name: "k_EControllerActionOrigin_PS4_LeftStick_DPadWest", value: "76" },
                { name: "k_EControllerActionOrigin_PS4_LeftStick_DPadEast", value: "77" },
                { name: "k_EControllerActionOrigin_PS4_RightStick_Move", value: "78" },
                { name: "k_EControllerActionOrigin_PS4_RightStick_Click", value: "79" },
                { name: "k_EControllerActionOrigin_PS4_RightStick_DPadNorth", value: "80" },
                { name: "k_EControllerActionOrigin_PS4_RightStick_DPadSouth", value: "81" },
                { name: "k_EControllerActionOrigin_PS4_RightStick_DPadWest", value: "82" },
                { name: "k_EControllerActionOrigin_PS4_RightStick_DPadEast", value: "83" },
                { name: "k_EControllerActionOrigin_PS4_DPad_North", value: "84" },
                { name: "k_EControllerActionOrigin_PS4_DPad_South", value: "85" },
                { name: "k_EControllerActionOrigin_PS4_DPad_West", value: "86" },
                { name: "k_EControllerActionOrigin_PS4_DPad_East", value: "87" },
                { name: "k_EControllerActionOrigin_PS4_Gyro_Move", value: "88" },
                { name: "k_EControllerActionOrigin_PS4_Gyro_Pitch", value: "89" },
                { name: "k_EControllerActionOrigin_PS4_Gyro_Yaw", value: "90" },
                { name: "k_EControllerActionOrigin_PS4_Gyro_Roll", value: "91" },
                { name: "k_EControllerActionOrigin_XBoxOne_A", value: "92" },
                { name: "k_EControllerActionOrigin_XBoxOne_B", value: "93" },
                { name: "k_EControllerActionOrigin_XBoxOne_X", value: "94" },
                { name: "k_EControllerActionOrigin_XBoxOne_Y", value: "95" },
                { name: "k_EControllerActionOrigin_XBoxOne_LeftBumper", value: "96" },
                { name: "k_EControllerActionOrigin_XBoxOne_RightBumper", value: "97" },
                { name: "k_EControllerActionOrigin_XBoxOne_Menu", value: "98" },
                { name: "k_EControllerActionOrigin_XBoxOne_View", value: "99" },
                { name: "k_EControllerActionOrigin_XBoxOne_LeftTrigger_Pull", value: "100" },
                { name: "k_EControllerActionOrigin_XBoxOne_LeftTrigger_Click", value: "101" },
                { name: "k_EControllerActionOrigin_XBoxOne_RightTrigger_Pull", value: "102" },
                { name: "k_EControllerActionOrigin_XBoxOne_RightTrigger_Click", value: "103" },
                { name: "k_EControllerActionOrigin_XBoxOne_LeftStick_Move", value: "104" },
                { name: "k_EControllerActionOrigin_XBoxOne_LeftStick_Click", value: "105" },
                { name: "k_EControllerActionOrigin_XBoxOne_LeftStick_DPadNorth", value: "106" },
                { name: "k_EControllerActionOrigin_XBoxOne_LeftStick_DPadSouth", value: "107" },
                { name: "k_EControllerActionOrigin_XBoxOne_LeftStick_DPadWest", value: "108" },
                { name: "k_EControllerActionOrigin_XBoxOne_LeftStick_DPadEast", value: "109" },
                { name: "k_EControllerActionOrigin_XBoxOne_RightStick_Move", value: "110" },
                { name: "k_EControllerActionOrigin_XBoxOne_RightStick_Click", value: "111" },
                { name: "k_EControllerActionOrigin_XBoxOne_RightStick_DPadNorth", value: "112" },
                { name: "k_EControllerActionOrigin_XBoxOne_RightStick_DPadSouth", value: "113" },
                { name: "k_EControllerActionOrigin_XBoxOne_RightStick_DPadWest", value: "114" },
                { name: "k_EControllerActionOrigin_XBoxOne_RightStick_DPadEast", value: "115" },
                { name: "k_EControllerActionOrigin_XBoxOne_DPad_North", value: "116" },
                { name: "k_EControllerActionOrigin_XBoxOne_DPad_South", value: "117" },
                { name: "k_EControllerActionOrigin_XBoxOne_DPad_West", value: "118" },
                { name: "k_EControllerActionOrigin_XBoxOne_DPad_East", value: "119" },
                { name: "k_EControllerActionOrigin_XBox360_A", value: "120" },
                { name: "k_EControllerActionOrigin_XBox360_B", value: "121" },
                { name: "k_EControllerActionOrigin_XBox360_X", value: "122" },
                { name: "k_EControllerActionOrigin_XBox360_Y", value: "123" },
                { name: "k_EControllerActionOrigin_XBox360_LeftBumper", value: "124" },
                { name: "k_EControllerActionOrigin_XBox360_RightBumper", value: "125" },
                { name: "k_EControllerActionOrigin_XBox360_Start", value: "126" },
                { name: "k_EControllerActionOrigin_XBox360_Back", value: "127" },
                { name: "k_EControllerActionOrigin_XBox360_LeftTrigger_Pull", value: "128" },
                { name: "k_EControllerActionOrigin_XBox360_LeftTrigger_Click", value: "129" },
                { name: "k_EControllerActionOrigin_XBox360_RightTrigger_Pull", value: "130" },
                { name: "k_EControllerActionOrigin_XBox360_RightTrigger_Click", value: "131" },
                { name: "k_EControllerActionOrigin_XBox360_LeftStick_Move", value: "132" },
                { name: "k_EControllerActionOrigin_XBox360_LeftStick_Click", value: "133" },
                { name: "k_EControllerActionOrigin_XBox360_LeftStick_DPadNorth", value: "134" },
                { name: "k_EControllerActionOrigin_XBox360_LeftStick_DPadSouth", value: "135" },
                { name: "k_EControllerActionOrigin_XBox360_LeftStick_DPadWest", value: "136" },
                { name: "k_EControllerActionOrigin_XBox360_LeftStick_DPadEast", value: "137" },
                { name: "k_EControllerActionOrigin_XBox360_RightStick_Move", value: "138" },
                { name: "k_EControllerActionOrigin_XBox360_RightStick_Click", value: "139" },
                { name: "k_EControllerActionOrigin_XBox360_RightStick_DPadNorth", value: "140" },
                { name: "k_EControllerActionOrigin_XBox360_RightStick_DPadSouth", value: "141" },
                { name: "k_EControllerActionOrigin_XBox360_RightStick_DPadWest", value: "142" },
                { name: "k_EControllerActionOrigin_XBox360_RightStick_DPadEast", value: "143" },
                { name: "k_EControllerActionOrigin_XBox360_DPad_North", value: "144" },
                { name: "k_EControllerActionOrigin_XBox360_DPad_South", value: "145" },
                { name: "k_EControllerActionOrigin_XBox360_DPad_West", value: "146" },
                { name: "k_EControllerActionOrigin_XBox360_DPad_East", value: "147" },
                { name: "k_EControllerActionOrigin_SteamV2_A", value: "148" },
                { name: "k_EControllerActionOrigin_SteamV2_B", value: "149" },
                { name: "k_EControllerActionOrigin_SteamV2_X", value: "150" },
                { name: "k_EControllerActionOrigin_SteamV2_Y", value: "151" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftBumper", value: "152" },
                { name: "k_EControllerActionOrigin_SteamV2_RightBumper", value: "153" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftGrip_Lower", value: "154" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftGrip_Upper", value: "155" },
                { name: "k_EControllerActionOrigin_SteamV2_RightGrip_Lower", value: "156" },
                { name: "k_EControllerActionOrigin_SteamV2_RightGrip_Upper", value: "157" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftBumper_Pressure", value: "158" },
                { name: "k_EControllerActionOrigin_SteamV2_RightBumper_Pressure", value: "159" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftGrip_Pressure", value: "160" },
                { name: "k_EControllerActionOrigin_SteamV2_RightGrip_Pressure", value: "161" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftGrip_Upper_Pressure", value: "162" },
                { name: "k_EControllerActionOrigin_SteamV2_RightGrip_Upper_Pressure", value: "163" },
                { name: "k_EControllerActionOrigin_SteamV2_Start", value: "164" },
                { name: "k_EControllerActionOrigin_SteamV2_Back", value: "165" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftPad_Touch", value: "166" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftPad_Swipe", value: "167" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftPad_Click", value: "168" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftPad_Pressure", value: "169" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftPad_DPadNorth", value: "170" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftPad_DPadSouth", value: "171" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftPad_DPadWest", value: "172" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftPad_DPadEast", value: "173" },
                { name: "k_EControllerActionOrigin_SteamV2_RightPad_Touch", value: "174" },
                { name: "k_EControllerActionOrigin_SteamV2_RightPad_Swipe", value: "175" },
                { name: "k_EControllerActionOrigin_SteamV2_RightPad_Click", value: "176" },
                { name: "k_EControllerActionOrigin_SteamV2_RightPad_Pressure", value: "177" },
                { name: "k_EControllerActionOrigin_SteamV2_RightPad_DPadNorth", value: "178" },
                { name: "k_EControllerActionOrigin_SteamV2_RightPad_DPadSouth", value: "179" },
                { name: "k_EControllerActionOrigin_SteamV2_RightPad_DPadWest", value: "180" },
                { name: "k_EControllerActionOrigin_SteamV2_RightPad_DPadEast", value: "181" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftTrigger_Pull", value: "182" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftTrigger_Click", value: "183" },
                { name: "k_EControllerActionOrigin_SteamV2_RightTrigger_Pull", value: "184" },
                { name: "k_EControllerActionOrigin_SteamV2_RightTrigger_Click", value: "185" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftStick_Move", value: "186" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftStick_Click", value: "187" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftStick_DPadNorth", value: "188" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftStick_DPadSouth", value: "189" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftStick_DPadWest", value: "190" },
                { name: "k_EControllerActionOrigin_SteamV2_LeftStick_DPadEast", value: "191" },
                { name: "k_EControllerActionOrigin_SteamV2_Gyro_Move", value: "192" },
                { name: "k_EControllerActionOrigin_SteamV2_Gyro_Pitch", value: "193" },
                { name: "k_EControllerActionOrigin_SteamV2_Gyro_Yaw", value: "194" },
                { name: "k_EControllerActionOrigin_SteamV2_Gyro_Roll", value: "195" },
                { name: "k_EControllerActionOrigin_Switch_A", value: "196" },
                { name: "k_EControllerActionOrigin_Switch_B", value: "197" },
                { name: "k_EControllerActionOrigin_Switch_X", value: "198" },
                { name: "k_EControllerActionOrigin_Switch_Y", value: "199" },
                { name: "k_EControllerActionOrigin_Switch_LeftBumper", value: "200" },
                { name: "k_EControllerActionOrigin_Switch_RightBumper", value: "201" },
                { name: "k_EControllerActionOrigin_Switch_Plus", value: "202" },
                { name: "k_EControllerActionOrigin_Switch_Minus", value: "203" },
                { name: "k_EControllerActionOrigin_Switch_Capture", value: "204" },
                { name: "k_EControllerActionOrigin_Switch_LeftTrigger_Pull", value: "205" },
                { name: "k_EControllerActionOrigin_Switch_LeftTrigger_Click", value: "206" },
                { name: "k_EControllerActionOrigin_Switch_RightTrigger_Pull", value: "207" },
                { name: "k_EControllerActionOrigin_Switch_RightTrigger_Click", value: "208" },
                { name: "k_EControllerActionOrigin_Switch_LeftStick_Move", value: "209" },
                { name: "k_EControllerActionOrigin_Switch_LeftStick_Click", value: "210" },
                { name: "k_EControllerActionOrigin_Switch_LeftStick_DPadNorth", value: "211" },
                { name: "k_EControllerActionOrigin_Switch_LeftStick_DPadSouth", value: "212" },
                { name: "k_EControllerActionOrigin_Switch_LeftStick_DPadWest", value: "213" },
                { name: "k_EControllerActionOrigin_Switch_LeftStick_DPadEast", value: "214" },
                { name: "k_EControllerActionOrigin_Switch_RightStick_Move", value: "215" },
                { name: "k_EControllerActionOrigin_Switch_RightStick_Click", value: "216" },
                { name: "k_EControllerActionOrigin_Switch_RightStick_DPadNorth", value: "217" },
                { name: "k_EControllerActionOrigin_Switch_RightStick_DPadSouth", value: "218" },
                { name: "k_EControllerActionOrigin_Switch_RightStick_DPadWest", value: "219" },
                { name: "k_EControllerActionOrigin_Switch_RightStick_DPadEast", value: "220" },
                { name: "k_EControllerActionOrigin_Switch_DPad_North", value: "221" },
                { name: "k_EControllerActionOrigin_Switch_DPad_South", value: "222" },
                { name: "k_EControllerActionOrigin_Switch_DPad_West", value: "223" },
                { name: "k_EControllerActionOrigin_Switch_DPad_East", value: "224" },
                { name: "k_EControllerActionOrigin_Switch_ProGyro_Move", value: "225" },
                { name: "k_EControllerActionOrigin_Switch_ProGyro_Pitch", value: "226" },
                { name: "k_EControllerActionOrigin_Switch_ProGyro_Yaw", value: "227" },
                { name: "k_EControllerActionOrigin_Switch_ProGyro_Roll", value: "228" },
                { name: "k_EControllerActionOrigin_Switch_RightGyro_Move", value: "229" },
                { name: "k_EControllerActionOrigin_Switch_RightGyro_Pitch", value: "230" },
                { name: "k_EControllerActionOrigin_Switch_RightGyro_Yaw", value: "231" },
                { name: "k_EControllerActionOrigin_Switch_RightGyro_Roll", value: "232" },
                { name: "k_EControllerActionOrigin_Switch_LeftGyro_Move", value: "233" },
                { name: "k_EControllerActionOrigin_Switch_LeftGyro_Pitch", value: "234" },
                { name: "k_EControllerActionOrigin_Switch_LeftGyro_Yaw", value: "235" },
                { name: "k_EControllerActionOrigin_Switch_LeftGyro_Roll", value: "236" },
                { name: "k_EControllerActionOrigin_Switch_LeftGrip_Lower", value: "237" },
                { name: "k_EControllerActionOrigin_Switch_LeftGrip_Upper", value: "238" },
                { name: "k_EControllerActionOrigin_Switch_RightGrip_Lower", value: "239" },
                { name: "k_EControllerActionOrigin_Switch_RightGrip_Upper", value: "240" },
                { name: "k_EControllerActionOrigin_PS4_DPad_Move", value: "241" },
                { name: "k_EControllerActionOrigin_XBoxOne_DPad_Move", value: "242" },
                { name: "k_EControllerActionOrigin_XBox360_DPad_Move", value: "243" },
                { name: "k_EControllerActionOrigin_Switch_DPad_Move", value: "244" },
                { name: "k_EControllerActionOrigin_PS5_X", value: "245" },
                { name: "k_EControllerActionOrigin_PS5_Circle", value: "246" },
                { name: "k_EControllerActionOrigin_PS5_Triangle", value: "247" },
                { name: "k_EControllerActionOrigin_PS5_Square", value: "248" },
                { name: "k_EControllerActionOrigin_PS5_LeftBumper", value: "249" },
                { name: "k_EControllerActionOrigin_PS5_RightBumper", value: "250" },
                { name: "k_EControllerActionOrigin_PS5_Option", value: "251" },
                { name: "k_EControllerActionOrigin_PS5_Create", value: "252" },
                { name: "k_EControllerActionOrigin_PS5_Mute", value: "253" },
                { name: "k_EControllerActionOrigin_PS5_LeftPad_Touch", value: "254" },
                { name: "k_EControllerActionOrigin_PS5_LeftPad_Swipe", value: "255" },
                { name: "k_EControllerActionOrigin_PS5_LeftPad_Click", value: "256" },
                { name: "k_EControllerActionOrigin_PS5_LeftPad_DPadNorth", value: "257" },
                { name: "k_EControllerActionOrigin_PS5_LeftPad_DPadSouth", value: "258" },
                { name: "k_EControllerActionOrigin_PS5_LeftPad_DPadWest", value: "259" },
                { name: "k_EControllerActionOrigin_PS5_LeftPad_DPadEast", value: "260" },
                { name: "k_EControllerActionOrigin_PS5_RightPad_Touch", value: "261" },
                { name: "k_EControllerActionOrigin_PS5_RightPad_Swipe", value: "262" },
                { name: "k_EControllerActionOrigin_PS5_RightPad_Click", value: "263" },
                { name: "k_EControllerActionOrigin_PS5_RightPad_DPadNorth", value: "264" },
                { name: "k_EControllerActionOrigin_PS5_RightPad_DPadSouth", value: "265" },
                { name: "k_EControllerActionOrigin_PS5_RightPad_DPadWest", value: "266" },
                { name: "k_EControllerActionOrigin_PS5_RightPad_DPadEast", value: "267" },
                { name: "k_EControllerActionOrigin_PS5_CenterPad_Touch", value: "268" },
                { name: "k_EControllerActionOrigin_PS5_CenterPad_Swipe", value: "269" },
                { name: "k_EControllerActionOrigin_PS5_CenterPad_Click", value: "270" },
                { name: "k_EControllerActionOrigin_PS5_CenterPad_DPadNorth", value: "271" },
                { name: "k_EControllerActionOrigin_PS5_CenterPad_DPadSouth", value: "272" },
                { name: "k_EControllerActionOrigin_PS5_CenterPad_DPadWest", value: "273" },
                { name: "k_EControllerActionOrigin_PS5_CenterPad_DPadEast", value: "274" },
                { name: "k_EControllerActionOrigin_PS5_LeftTrigger_Pull", value: "275" },
                { name: "k_EControllerActionOrigin_PS5_LeftTrigger_Click", value: "276" },
                { name: "k_EControllerActionOrigin_PS5_RightTrigger_Pull", value: "277" },
                { name: "k_EControllerActionOrigin_PS5_RightTrigger_Click", value: "278" },
                { name: "k_EControllerActionOrigin_PS5_LeftStick_Move", value: "279" },
                { name: "k_EControllerActionOrigin_PS5_LeftStick_Click", value: "280" },
                { name: "k_EControllerActionOrigin_PS5_LeftStick_DPadNorth", value: "281" },
                { name: "k_EControllerActionOrigin_PS5_LeftStick_DPadSouth", value: "282" },
                { name: "k_EControllerActionOrigin_PS5_LeftStick_DPadWest", value: "283" },
                { name: "k_EControllerActionOrigin_PS5_LeftStick_DPadEast", value: "284" },
                { name: "k_EControllerActionOrigin_PS5_RightStick_Move", value: "285" },
                { name: "k_EControllerActionOrigin_PS5_RightStick_Click", value: "286" },
                { name: "k_EControllerActionOrigin_PS5_RightStick_DPadNorth", value: "287" },
                { name: "k_EControllerActionOrigin_PS5_RightStick_DPadSouth", value: "288" },
                { name: "k_EControllerActionOrigin_PS5_RightStick_DPadWest", value: "289" },
                { name: "k_EControllerActionOrigin_PS5_RightStick_DPadEast", value: "290" },
                { name: "k_EControllerActionOrigin_PS5_DPad_Move", value: "291" },
                { name: "k_EControllerActionOrigin_PS5_DPad_North", value: "292" },
                { name: "k_EControllerActionOrigin_PS5_DPad_South", value: "293" },
                { name: "k_EControllerActionOrigin_PS5_DPad_West", value: "294" },
                { name: "k_EControllerActionOrigin_PS5_DPad_East", value: "295" },
                { name: "k_EControllerActionOrigin_PS5_Gyro_Move", value: "296" },
                { name: "k_EControllerActionOrigin_PS5_Gyro_Pitch", value: "297" },
                { name: "k_EControllerActionOrigin_PS5_Gyro_Yaw", value: "298" },
                { name: "k_EControllerActionOrigin_PS5_Gyro_Roll", value: "299" },
                { name: "k_EControllerActionOrigin_XBoxOne_LeftGrip_Lower", value: "300" },
                { name: "k_EControllerActionOrigin_XBoxOne_LeftGrip_Upper", value: "301" },
                { name: "k_EControllerActionOrigin_XBoxOne_RightGrip_Lower", value: "302" },
                { name: "k_EControllerActionOrigin_XBoxOne_RightGrip_Upper", value: "303" },
                { name: "k_EControllerActionOrigin_XBoxOne_Share", value: "304" },
                { name: "k_EControllerActionOrigin_SteamDeck_A", value: "305" },
                { name: "k_EControllerActionOrigin_SteamDeck_B", value: "306" },
                { name: "k_EControllerActionOrigin_SteamDeck_X", value: "307" },
                { name: "k_EControllerActionOrigin_SteamDeck_Y", value: "308" },
                { name: "k_EControllerActionOrigin_SteamDeck_L1", value: "309" },
                { name: "k_EControllerActionOrigin_SteamDeck_R1", value: "310" },
                { name: "k_EControllerActionOrigin_SteamDeck_Menu", value: "311" },
                { name: "k_EControllerActionOrigin_SteamDeck_View", value: "312" },
                { name: "k_EControllerActionOrigin_SteamDeck_LeftPad_Touch", value: "313" },
                { name: "k_EControllerActionOrigin_SteamDeck_LeftPad_Swipe", value: "314" },
                { name: "k_EControllerActionOrigin_SteamDeck_LeftPad_Click", value: "315" },
                { name: "k_EControllerActionOrigin_SteamDeck_LeftPad_DPadNorth", value: "316" },
                { name: "k_EControllerActionOrigin_SteamDeck_LeftPad_DPadSouth", value: "317" },
                { name: "k_EControllerActionOrigin_SteamDeck_LeftPad_DPadWest", value: "318" },
                { name: "k_EControllerActionOrigin_SteamDeck_LeftPad_DPadEast", value: "319" },
                { name: "k_EControllerActionOrigin_SteamDeck_RightPad_Touch", value: "320" },
                { name: "k_EControllerActionOrigin_SteamDeck_RightPad_Swipe", value: "321" },
                { name: "k_EControllerActionOrigin_SteamDeck_RightPad_Click", value: "322" },
                { name: "k_EControllerActionOrigin_SteamDeck_RightPad_DPadNorth", value: "323" },
                { name: "k_EControllerActionOrigin_SteamDeck_RightPad_DPadSouth", value: "324" },
                { name: "k_EControllerActionOrigin_SteamDeck_RightPad_DPadWest", value: "325" },
                { name: "k_EControllerActionOrigin_SteamDeck_RightPad_DPadEast", value: "326" },
                { name: "k_EControllerActionOrigin_SteamDeck_L2_SoftPull", value: "327" },
                { name: "k_EControllerActionOrigin_SteamDeck_L2", value: "328" },
                { name: "k_EControllerActionOrigin_SteamDeck_R2_SoftPull", value: "329" },
                { name: "k_EControllerActionOrigin_SteamDeck_R2", value: "330" },
                { name: "k_EControllerActionOrigin_SteamDeck_LeftStick_Move", value: "331" },
                { name: "k_EControllerActionOrigin_SteamDeck_L3", value: "332" },
                { name: "k_EControllerActionOrigin_SteamDeck_LeftStick_DPadNorth", value: "333" },
                { name: "k_EControllerActionOrigin_SteamDeck_LeftStick_DPadSouth", value: "334" },
                { name: "k_EControllerActionOrigin_SteamDeck_LeftStick_DPadWest", value: "335" },
                { name: "k_EControllerActionOrigin_SteamDeck_LeftStick_DPadEast", value: "336" },
                { name: "k_EControllerActionOrigin_SteamDeck_LeftStick_Touch", value: "337" },
                { name: "k_EControllerActionOrigin_SteamDeck_RightStick_Move", value: "338" },
                { name: "k_EControllerActionOrigin_SteamDeck_R3", value: "339" },
                { name: "k_EControllerActionOrigin_SteamDeck_RightStick_DPadNorth", value: "340" },
                { name: "k_EControllerActionOrigin_SteamDeck_RightStick_DPadSouth", value: "341" },
                { name: "k_EControllerActionOrigin_SteamDeck_RightStick_DPadWest", value: "342" },
                { name: "k_EControllerActionOrigin_SteamDeck_RightStick_DPadEast", value: "343" },
                { name: "k_EControllerActionOrigin_SteamDeck_RightStick_Touch", value: "344" },
                { name: "k_EControllerActionOrigin_SteamDeck_L4", value: "345" },
                { name: "k_EControllerActionOrigin_SteamDeck_R4", value: "346" },
                { name: "k_EControllerActionOrigin_SteamDeck_L5", value: "347" },
                { name: "k_EControllerActionOrigin_SteamDeck_R5", value: "348" },
                { name: "k_EControllerActionOrigin_SteamDeck_DPad_Move", value: "349" },
                { name: "k_EControllerActionOrigin_SteamDeck_DPad_North", value: "350" },
                { name: "k_EControllerActionOrigin_SteamDeck_DPad_South", value: "351" },
                { name: "k_EControllerActionOrigin_SteamDeck_DPad_West", value: "352" },
                { name: "k_EControllerActionOrigin_SteamDeck_DPad_East", value: "353" },
                { name: "k_EControllerActionOrigin_SteamDeck_Gyro_Move", value: "354" },
                { name: "k_EControllerActionOrigin_SteamDeck_Gyro_Pitch", value: "355" },
                { name: "k_EControllerActionOrigin_SteamDeck_Gyro_Yaw", value: "356" },
                { name: "k_EControllerActionOrigin_SteamDeck_Gyro_Roll", value: "357" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved1", value: "358" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved2", value: "359" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved3", value: "360" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved4", value: "361" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved5", value: "362" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved6", value: "363" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved7", value: "364" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved8", value: "365" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved9", value: "366" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved10", value: "367" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved11", value: "368" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved12", value: "369" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved13", value: "370" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved14", value: "371" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved15", value: "372" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved16", value: "373" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved17", value: "374" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved18", value: "375" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved19", value: "376" },
                { name: "k_EControllerActionOrigin_SteamDeck_Reserved20", value: "377" },
                { name: "k_EControllerActionOrigin_Count", value: "378" },
                { name: "k_EControllerActionOrigin_MaximumPossibleValue", value: "32767" },
            ]
        },
        {
            enumname: "ESteamControllerLEDFlag",
            values: [
                { name: "k_ESteamControllerLEDFlag_SetColor", value: "0" },
                { name: "k_ESteamControllerLEDFlag_RestoreUserDefault", value: "1" },
            ]
        },
        {
            enumname: "EUGCMatchingUGCType",
            values: [
                { name: "k_EUGCMatchingUGCType_Items", value: "0" },
                { name: "k_EUGCMatchingUGCType_Items_Mtx", value: "1" },
                { name: "k_EUGCMatchingUGCType_Items_ReadyToUse", value: "2" },
                { name: "k_EUGCMatchingUGCType_Collections", value: "3" },
                { name: "k_EUGCMatchingUGCType_Artwork", value: "4" },
                { name: "k_EUGCMatchingUGCType_Videos", value: "5" },
                { name: "k_EUGCMatchingUGCType_Screenshots", value: "6" },
                { name: "k_EUGCMatchingUGCType_AllGuides", value: "7" },
                { name: "k_EUGCMatchingUGCType_WebGuides", value: "8" },
                { name: "k_EUGCMatchingUGCType_IntegratedGuides", value: "9" },
                { name: "k_EUGCMatchingUGCType_UsableInGame", value: "10" },
                { name: "k_EUGCMatchingUGCType_ControllerBindings", value: "11" },
                { name: "k_EUGCMatchingUGCType_GameManagedItems", value: "12" },
                { name: "k_EUGCMatchingUGCType_All", value: "-1" },
            ]
        },
        {
            enumname: "EUserUGCList",
            values: [
                { name: "k_EUserUGCList_Published", value: "0" },
                { name: "k_EUserUGCList_VotedOn", value: "1" },
                { name: "k_EUserUGCList_VotedUp", value: "2" },
                { name: "k_EUserUGCList_VotedDown", value: "3" },
                { name: "k_EUserUGCList_WillVoteLater", value: "4" },
                { name: "k_EUserUGCList_Favorited", value: "5" },
                { name: "k_EUserUGCList_Subscribed", value: "6" },
                { name: "k_EUserUGCList_UsedOrPlayed", value: "7" },
                { name: "k_EUserUGCList_Followed", value: "8" },
            ]
        },
        {
            enumname: "EUserUGCListSortOrder",
            values: [
                { name: "k_EUserUGCListSortOrder_CreationOrderDesc", value: "0" },
                { name: "k_EUserUGCListSortOrder_CreationOrderAsc", value: "1" },
                { name: "k_EUserUGCListSortOrder_TitleAsc", value: "2" },
                { name: "k_EUserUGCListSortOrder_LastUpdatedDesc", value: "3" },
                { name: "k_EUserUGCListSortOrder_SubscriptionDateDesc", value: "4" },
                { name: "k_EUserUGCListSortOrder_VoteScoreDesc", value: "5" },
                { name: "k_EUserUGCListSortOrder_ForModeration", value: "6" },
            ]
        },
        {
            enumname: "EUGCQuery",
            values: [
                { name: "k_EUGCQuery_RankedByVote", value: "0" },
                { name: "k_EUGCQuery_RankedByPublicationDate", value: "1" },
                { name: "k_EUGCQuery_AcceptedForGameRankedByAcceptanceDate", value: "2" },
                { name: "k_EUGCQuery_RankedByTrend", value: "3" },
                { name: "k_EUGCQuery_FavoritedByFriendsRankedByPublicationDate", value: "4" },
                { name: "k_EUGCQuery_CreatedByFriendsRankedByPublicationDate", value: "5" },
                { name: "k_EUGCQuery_RankedByNumTimesReported", value: "6" },
                { name: "k_EUGCQuery_CreatedByFollowedUsersRankedByPublicationDate", value: "7" },
                { name: "k_EUGCQuery_NotYetRated", value: "8" },
                { name: "k_EUGCQuery_RankedByTotalVotesAsc", value: "9" },
                { name: "k_EUGCQuery_RankedByVotesUp", value: "10" },
                { name: "k_EUGCQuery_RankedByTextSearch", value: "11" },
                { name: "k_EUGCQuery_RankedByTotalUniqueSubscriptions", value: "12" },
                { name: "k_EUGCQuery_RankedByPlaytimeTrend", value: "13" },
                { name: "k_EUGCQuery_RankedByTotalPlaytime", value: "14" },
                { name: "k_EUGCQuery_RankedByAveragePlaytimeTrend", value: "15" },
                { name: "k_EUGCQuery_RankedByLifetimeAveragePlaytime", value: "16" },
                { name: "k_EUGCQuery_RankedByPlaytimeSessionsTrend", value: "17" },
                { name: "k_EUGCQuery_RankedByLifetimePlaytimeSessions", value: "18" },
                { name: "k_EUGCQuery_RankedByLastUpdatedDate", value: "19" },
            ]
        },
        {
            enumname: "EItemUpdateStatus",
            values: [
                { name: "k_EItemUpdateStatusInvalid", value: "0" },
                { name: "k_EItemUpdateStatusPreparingConfig", value: "1" },
                { name: "k_EItemUpdateStatusPreparingContent", value: "2" },
                { name: "k_EItemUpdateStatusUploadingContent", value: "3" },
                { name: "k_EItemUpdateStatusUploadingPreviewFile", value: "4" },
                { name: "k_EItemUpdateStatusCommittingChanges", value: "5" },
            ]
        },
        {
            enumname: "EItemState",
            values: [
                { name: "k_EItemStateNone", value: "0" },
                { name: "k_EItemStateSubscribed", value: "1" },
                { name: "k_EItemStateLegacyItem", value: "2" },
                { name: "k_EItemStateInstalled", value: "4" },
                { name: "k_EItemStateNeedsUpdate", value: "8" },
                { name: "k_EItemStateDownloading", value: "16" },
                { name: "k_EItemStateDownloadPending", value: "32" },
            ]
        },
        {
            enumname: "EItemStatistic",
            values: [
                { name: "k_EItemStatistic_NumSubscriptions", value: "0" },
                { name: "k_EItemStatistic_NumFavorites", value: "1" },
                { name: "k_EItemStatistic_NumFollowers", value: "2" },
                { name: "k_EItemStatistic_NumUniqueSubscriptions", value: "3" },
                { name: "k_EItemStatistic_NumUniqueFavorites", value: "4" },
                { name: "k_EItemStatistic_NumUniqueFollowers", value: "5" },
                { name: "k_EItemStatistic_NumUniqueWebsiteViews", value: "6" },
                { name: "k_EItemStatistic_ReportScore", value: "7" },
                { name: "k_EItemStatistic_NumSecondsPlayed", value: "8" },
                { name: "k_EItemStatistic_NumPlaytimeSessions", value: "9" },
                { name: "k_EItemStatistic_NumComments", value: "10" },
                { name: "k_EItemStatistic_NumSecondsPlayedDuringTimePeriod", value: "11" },
                { name: "k_EItemStatistic_NumPlaytimeSessionsDuringTimePeriod", value: "12" },
            ]
        },
        {
            enumname: "EItemPreviewType",
            values: [
                { name: "k_EItemPreviewType_Image", value: "0" },
                { name: "k_EItemPreviewType_YouTubeVideo", value: "1" },
                { name: "k_EItemPreviewType_Sketchfab", value: "2" },
                { name: "k_EItemPreviewType_EnvironmentMap_HorizontalCross", value: "3" },
                { name: "k_EItemPreviewType_EnvironmentMap_LatLong", value: "4" },
                { name: "k_EItemPreviewType_ReservedMax", value: "255" },
            ]
        },
        {
            enumname: "ESteamItemFlags",
            values: [
                { name: "k_ESteamItemNoTrade", value: "1" },
                { name: "k_ESteamItemRemoved", value: "256" },
                { name: "k_ESteamItemConsumed", value: "512" },
            ]
        },
        {
            enumname: "EParentalFeature",
            values: [
                { name: "k_EFeatureInvalid", value: "0" },
                { name: "k_EFeatureStore", value: "1" },
                { name: "k_EFeatureCommunity", value: "2" },
                { name: "k_EFeatureProfile", value: "3" },
                { name: "k_EFeatureFriends", value: "4" },
                { name: "k_EFeatureNews", value: "5" },
                { name: "k_EFeatureTrading", value: "6" },
                { name: "k_EFeatureSettings", value: "7" },
                { name: "k_EFeatureConsole", value: "8" },
                { name: "k_EFeatureBrowser", value: "9" },
                { name: "k_EFeatureParentalSetup", value: "10" },
                { name: "k_EFeatureLibrary", value: "11" },
                { name: "k_EFeatureTest", value: "12" },
                { name: "k_EFeatureSiteLicense", value: "13" },
                { name: "k_EFeatureMax", value: "14" },
            ]
        },
        {
            enumname: "ESteamDeviceFormFactor",
            values: [
                { name: "k_ESteamDeviceFormFactorUnknown", value: "0" },
                { name: "k_ESteamDeviceFormFactorPhone", value: "1" },
                { name: "k_ESteamDeviceFormFactorTablet", value: "2" },
                { name: "k_ESteamDeviceFormFactorComputer", value: "3" },
                { name: "k_ESteamDeviceFormFactorTV", value: "4" },
            ]
        },
        {
            enumname: "ESteamNetworkingAvailability",
            values: [
                { name: "k_ESteamNetworkingAvailability_CannotTry", value: "-102" },
                { name: "k_ESteamNetworkingAvailability_Failed", value: "-101" },
                { name: "k_ESteamNetworkingAvailability_Previously", value: "-100" },
                { name: "k_ESteamNetworkingAvailability_Retrying", value: "-10" },
                { name: "k_ESteamNetworkingAvailability_NeverTried", value: "1" },
                { name: "k_ESteamNetworkingAvailability_Waiting", value: "2" },
                { name: "k_ESteamNetworkingAvailability_Attempting", value: "3" },
                { name: "k_ESteamNetworkingAvailability_Current", value: "100" },
                { name: "k_ESteamNetworkingAvailability_Unknown", value: "0" },
                { name: "k_ESteamNetworkingAvailability__Force32bit", value: "2147483647" },
            ]
        },
        {
            enumname: "ESteamNetworkingIdentityType",
            values: [
                { name: "k_ESteamNetworkingIdentityType_Invalid", value: "0" },
                { name: "k_ESteamNetworkingIdentityType_SteamID", value: "16" },
                { name: "k_ESteamNetworkingIdentityType_XboxPairwiseID", value: "17" },
                { name: "k_ESteamNetworkingIdentityType_SonyPSN", value: "18" },
                { name: "k_ESteamNetworkingIdentityType_GoogleStadia", value: "19" },
                { name: "k_ESteamNetworkingIdentityType_IPAddress", value: "1" },
                { name: "k_ESteamNetworkingIdentityType_GenericString", value: "2" },
                { name: "k_ESteamNetworkingIdentityType_GenericBytes", value: "3" },
                { name: "k_ESteamNetworkingIdentityType_UnknownType", value: "4" },
                { name: "k_ESteamNetworkingIdentityType__Force32bit", value: "2147483647" },
            ]
        },
        {
            enumname: "ESteamNetworkingFakeIPType",
            values: [
                { name: "k_ESteamNetworkingFakeIPType_Invalid", value: "0" },
                { name: "k_ESteamNetworkingFakeIPType_NotFake", value: "1" },
                { name: "k_ESteamNetworkingFakeIPType_GlobalIPv4", value: "2" },
                { name: "k_ESteamNetworkingFakeIPType_LocalIPv4", value: "3" },
                { name: "k_ESteamNetworkingFakeIPType__Force32Bit", value: "2147483647" },
            ]
        },
        {
            enumname: "ESteamNetworkingConnectionState",
            values: [
                { name: "k_ESteamNetworkingConnectionState_None", value: "0" },
                { name: "k_ESteamNetworkingConnectionState_Connecting", value: "1" },
                { name: "k_ESteamNetworkingConnectionState_FindingRoute", value: "2" },
                { name: "k_ESteamNetworkingConnectionState_Connected", value: "3" },
                { name: "k_ESteamNetworkingConnectionState_ClosedByPeer", value: "4" },
                { name: "k_ESteamNetworkingConnectionState_ProblemDetectedLocally", value: "5" },
                { name: "k_ESteamNetworkingConnectionState_FinWait", value: "-1" },
                { name: "k_ESteamNetworkingConnectionState_Linger", value: "-2" },
                { name: "k_ESteamNetworkingConnectionState_Dead", value: "-3" },
                { name: "k_ESteamNetworkingConnectionState__Force32Bit", value: "2147483647" },
            ]
        },
        {
            enumname: "ESteamNetConnectionEnd",
            values: [
                { name: "k_ESteamNetConnectionEnd_Invalid", value: "0" },
                { name: "k_ESteamNetConnectionEnd_App_Min", value: "1000" },
                { name: "k_ESteamNetConnectionEnd_App_Generic", value: "1000" },
                { name: "k_ESteamNetConnectionEnd_App_Max", value: "1999" },
                { name: "k_ESteamNetConnectionEnd_AppException_Min", value: "2000" },
                { name: "k_ESteamNetConnectionEnd_AppException_Generic", value: "2000" },
                { name: "k_ESteamNetConnectionEnd_AppException_Max", value: "2999" },
                { name: "k_ESteamNetConnectionEnd_Local_Min", value: "3000" },
                { name: "k_ESteamNetConnectionEnd_Local_OfflineMode", value: "3001" },
                { name: "k_ESteamNetConnectionEnd_Local_ManyRelayConnectivity", value: "3002" },
                { name: "k_ESteamNetConnectionEnd_Local_HostedServerPrimaryRelay", value: "3003" },
                { name: "k_ESteamNetConnectionEnd_Local_NetworkConfig", value: "3004" },
                { name: "k_ESteamNetConnectionEnd_Local_Rights", value: "3005" },
                { name: "k_ESteamNetConnectionEnd_Local_P2P_ICE_NoPublicAddresses", value: "3006" },
                { name: "k_ESteamNetConnectionEnd_Local_Max", value: "3999" },
                { name: "k_ESteamNetConnectionEnd_Remote_Min", value: "4000" },
                { name: "k_ESteamNetConnectionEnd_Remote_Timeout", value: "4001" },
                { name: "k_ESteamNetConnectionEnd_Remote_BadCrypt", value: "4002" },
                { name: "k_ESteamNetConnectionEnd_Remote_BadCert", value: "4003" },
                { name: "k_ESteamNetConnectionEnd_Remote_BadProtocolVersion", value: "4006" },
                { name: "k_ESteamNetConnectionEnd_Remote_P2P_ICE_NoPublicAddresses", value: "4007" },
                { name: "k_ESteamNetConnectionEnd_Remote_Max", value: "4999" },
                { name: "k_ESteamNetConnectionEnd_Misc_Min", value: "5000" },
                { name: "k_ESteamNetConnectionEnd_Misc_Generic", value: "5001" },
                { name: "k_ESteamNetConnectionEnd_Misc_InternalError", value: "5002" },
                { name: "k_ESteamNetConnectionEnd_Misc_Timeout", value: "5003" },
                { name: "k_ESteamNetConnectionEnd_Misc_SteamConnectivity", value: "5005" },
                { name: "k_ESteamNetConnectionEnd_Misc_NoRelaySessionsToClient", value: "5006" },
                { name: "k_ESteamNetConnectionEnd_Misc_P2P_Rendezvous", value: "5008" },
                { name: "k_ESteamNetConnectionEnd_Misc_P2P_NAT_Firewall", value: "5009" },
                { name: "k_ESteamNetConnectionEnd_Misc_PeerSentNoConnection", value: "5010" },
                { name: "k_ESteamNetConnectionEnd_Misc_Max", value: "5999" },
                { name: "k_ESteamNetConnectionEnd__Force32Bit", value: "2147483647" },
            ]
        },
        {
            enumname: "ESteamNetworkingConfigScope",
            values: [
                { name: "k_ESteamNetworkingConfig_Global", value: "1" },
                { name: "k_ESteamNetworkingConfig_SocketsInterface", value: "2" },
                { name: "k_ESteamNetworkingConfig_ListenSocket", value: "3" },
                { name: "k_ESteamNetworkingConfig_Connection", value: "4" },
                { name: "k_ESteamNetworkingConfigScope__Force32Bit", value: "2147483647" },
            ]
        },
        {
            enumname: "ESteamNetworkingConfigDataType",
            values: [
                { name: "k_ESteamNetworkingConfig_Int32", value: "1" },
                { name: "k_ESteamNetworkingConfig_Int64", value: "2" },
                { name: "k_ESteamNetworkingConfig_Float", value: "3" },
                { name: "k_ESteamNetworkingConfig_String", value: "4" },
                { name: "k_ESteamNetworkingConfig_Ptr", value: "5" },
                { name: "k_ESteamNetworkingConfigDataType__Force32Bit", value: "2147483647" },
            ]
        },
        {
            enumname: "ESteamNetworkingConfigValue",
            values: [
                { name: "k_ESteamNetworkingConfig_Invalid", value: "0" },
                { name: "k_ESteamNetworkingConfig_TimeoutInitial", value: "24" },
                { name: "k_ESteamNetworkingConfig_TimeoutConnected", value: "25" },
                { name: "k_ESteamNetworkingConfig_SendBufferSize", value: "9" },
                { name: "k_ESteamNetworkingConfig_ConnectionUserData", value: "40" },
                { name: "k_ESteamNetworkingConfig_SendRateMin", value: "10" },
                { name: "k_ESteamNetworkingConfig_SendRateMax", value: "11" },
                { name: "k_ESteamNetworkingConfig_NagleTime", value: "12" },
                { name: "k_ESteamNetworkingConfig_IP_AllowWithoutAuth", value: "23" },
                { name: "k_ESteamNetworkingConfig_MTU_PacketSize", value: "32" },
                { name: "k_ESteamNetworkingConfig_MTU_DataSize", value: "33" },
                { name: "k_ESteamNetworkingConfig_Unencrypted", value: "34" },
                { name: "k_ESteamNetworkingConfig_SymmetricConnect", value: "37" },
                { name: "k_ESteamNetworkingConfig_LocalVirtualPort", value: "38" },
                { name: "k_ESteamNetworkingConfig_DualWifi_Enable", value: "39" },
                { name: "k_ESteamNetworkingConfig_EnableDiagnosticsUI", value: "46" },
                { name: "k_ESteamNetworkingConfig_FakePacketLoss_Send", value: "2" },
                { name: "k_ESteamNetworkingConfig_FakePacketLoss_Recv", value: "3" },
                { name: "k_ESteamNetworkingConfig_FakePacketLag_Send", value: "4" },
                { name: "k_ESteamNetworkingConfig_FakePacketLag_Recv", value: "5" },
                { name: "k_ESteamNetworkingConfig_FakePacketReorder_Send", value: "6" },
                { name: "k_ESteamNetworkingConfig_FakePacketReorder_Recv", value: "7" },
                { name: "k_ESteamNetworkingConfig_FakePacketReorder_Time", value: "8" },
                { name: "k_ESteamNetworkingConfig_FakePacketDup_Send", value: "26" },
                { name: "k_ESteamNetworkingConfig_FakePacketDup_Recv", value: "27" },
                { name: "k_ESteamNetworkingConfig_FakePacketDup_TimeMax", value: "28" },
                { name: "k_ESteamNetworkingConfig_PacketTraceMaxBytes", value: "41" },
                { name: "k_ESteamNetworkingConfig_FakeRateLimit_Send_Rate", value: "42" },
                { name: "k_ESteamNetworkingConfig_FakeRateLimit_Send_Burst", value: "43" },
                { name: "k_ESteamNetworkingConfig_FakeRateLimit_Recv_Rate", value: "44" },
                { name: "k_ESteamNetworkingConfig_FakeRateLimit_Recv_Burst", value: "45" },
                { name: "k_ESteamNetworkingConfig_Callback_ConnectionStatusChanged", value: "201" },
                { name: "k_ESteamNetworkingConfig_Callback_AuthStatusChanged", value: "202" },
                { name: "k_ESteamNetworkingConfig_Callback_RelayNetworkStatusChanged", value: "203" },
                { name: "k_ESteamNetworkingConfig_Callback_MessagesSessionRequest", value: "204" },
                { name: "k_ESteamNetworkingConfig_Callback_MessagesSessionFailed", value: "205" },
                { name: "k_ESteamNetworkingConfig_Callback_CreateConnectionSignaling", value: "206" },
                { name: "k_ESteamNetworkingConfig_Callback_FakeIPResult", value: "207" },
                { name: "k_ESteamNetworkingConfig_P2P_STUN_ServerList", value: "103" },
                { name: "k_ESteamNetworkingConfig_P2P_Transport_ICE_Enable", value: "104" },
                { name: "k_ESteamNetworkingConfig_P2P_Transport_ICE_Penalty", value: "105" },
                { name: "k_ESteamNetworkingConfig_P2P_Transport_SDR_Penalty", value: "106" },
                { name: "k_ESteamNetworkingConfig_SDRClient_ConsecutitivePingTimeoutsFailInitial", value: "19" },
                { name: "k_ESteamNetworkingConfig_SDRClient_ConsecutitivePingTimeoutsFail", value: "20" },
                { name: "k_ESteamNetworkingConfig_SDRClient_MinPingsBeforePingAccurate", value: "21" },
                { name: "k_ESteamNetworkingConfig_SDRClient_SingleSocket", value: "22" },
                { name: "k_ESteamNetworkingConfig_SDRClient_ForceRelayCluster", value: "29" },
                { name: "k_ESteamNetworkingConfig_SDRClient_DebugTicketAddress", value: "30" },
                { name: "k_ESteamNetworkingConfig_SDRClient_ForceProxyAddr", value: "31" },
                { name: "k_ESteamNetworkingConfig_SDRClient_FakeClusterPing", value: "36" },
                { name: "k_ESteamNetworkingConfig_LogLevel_AckRTT", value: "13" },
                { name: "k_ESteamNetworkingConfig_LogLevel_PacketDecode", value: "14" },
                { name: "k_ESteamNetworkingConfig_LogLevel_Message", value: "15" },
                { name: "k_ESteamNetworkingConfig_LogLevel_PacketGaps", value: "16" },
                { name: "k_ESteamNetworkingConfig_LogLevel_P2PRendezvous", value: "17" },
                { name: "k_ESteamNetworkingConfig_LogLevel_SDRRelayPings", value: "18" },
                { name: "k_ESteamNetworkingConfig_DELETED_EnumerateDevVars", value: "35" },
                { name: "k_ESteamNetworkingConfigValue__Force32Bit", value: "2147483647" },
            ]
        },
        {
            enumname: "ESteamNetworkingGetConfigValueResult",
            values: [
                { name: "k_ESteamNetworkingGetConfigValue_BadValue", value: "-1" },
                { name: "k_ESteamNetworkingGetConfigValue_BadScopeObj", value: "-2" },
                { name: "k_ESteamNetworkingGetConfigValue_BufferTooSmall", value: "-3" },
                { name: "k_ESteamNetworkingGetConfigValue_OK", value: "1" },
                { name: "k_ESteamNetworkingGetConfigValue_OKInherited", value: "2" },
                { name: "k_ESteamNetworkingGetConfigValueResult__Force32Bit", value: "2147483647" },
            ]
        },
        {
            enumname: "ESteamNetworkingSocketsDebugOutputType",
            values: [
                { name: "k_ESteamNetworkingSocketsDebugOutputType_None", value: "0" },
                { name: "k_ESteamNetworkingSocketsDebugOutputType_Bug", value: "1" },
                { name: "k_ESteamNetworkingSocketsDebugOutputType_Error", value: "2" },
                { name: "k_ESteamNetworkingSocketsDebugOutputType_Important", value: "3" },
                { name: "k_ESteamNetworkingSocketsDebugOutputType_Warning", value: "4" },
                { name: "k_ESteamNetworkingSocketsDebugOutputType_Msg", value: "5" },
                { name: "k_ESteamNetworkingSocketsDebugOutputType_Verbose", value: "6" },
                { name: "k_ESteamNetworkingSocketsDebugOutputType_Debug", value: "7" },
                { name: "k_ESteamNetworkingSocketsDebugOutputType_Everything", value: "8" },
                { name: "k_ESteamNetworkingSocketsDebugOutputType__Force32Bit", value: "2147483647" },
            ]
        },
        {
            enumname: "EServerMode",
            values: [
                { name: "eServerModeInvalid", value: "0" },
                { name: "eServerModeNoAuthentication", value: "1" },
                { name: "eServerModeAuthentication", value: "2" },
                { name: "eServerModeAuthenticationAndSecure", value: "3" },
            ]
        },
    ],
    interfaces: [
        {
            classname: "ISteamClient",
            fields: [],
            methods: [
                {
                    methodname: "CreateSteamPipe",
                    methodname_flat: "SteamAPI_ISteamClient_CreateSteamPipe",
                    params: [],
                    returntype: "HSteamPipe"
                },
                {
                    methodname: "BReleaseSteamPipe",
                    methodname_flat: "SteamAPI_ISteamClient_BReleaseSteamPipe",
                    params: [{ paramname: "hSteamPipe", paramtype: "HSteamPipe" }],
                    returntype: "bool"
                },
                {
                    methodname: "ConnectToGlobalUser",
                    methodname_flat: "SteamAPI_ISteamClient_ConnectToGlobalUser",
                    params: [{ paramname: "hSteamPipe", paramtype: "HSteamPipe" }],
                    returntype: "HSteamUser"
                },
                {
                    methodname: "CreateLocalUser",
                    methodname_flat: "SteamAPI_ISteamClient_CreateLocalUser",
                    params: [
                        { paramname: "phSteamPipe", paramtype: "HSteamPipe *" },
                        { paramname: "eAccountType", paramtype: "EAccountType" },
                    ],
                    returntype: "HSteamUser"
                },
                {
                    methodname: "ReleaseUser",
                    methodname_flat: "SteamAPI_ISteamClient_ReleaseUser",
                    params: [
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "hUser", paramtype: "HSteamUser" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "GetISteamUser",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamUser",
                    params: [
                        { paramname: "hSteamUser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamUser *"
                },
                {
                    methodname: "GetISteamGameServer",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamGameServer",
                    params: [
                        { paramname: "hSteamUser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamGameServer *"
                },
                {
                    methodname: "SetLocalIPBinding",
                    methodname_flat: "SteamAPI_ISteamClient_SetLocalIPBinding",
                    params: [
                        { paramname: "unIP", paramtype: "const SteamIPAddress_t &" },
                        { paramname: "usPort", paramtype: "uint16" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "GetISteamFriends",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamFriends",
                    params: [
                        { paramname: "hSteamUser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamFriends *"
                },
                {
                    methodname: "GetISteamUtils",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamUtils",
                    params: [
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamUtils *"
                },
                {
                    methodname: "GetISteamMatchmaking",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamMatchmaking",
                    params: [
                        { paramname: "hSteamUser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamMatchmaking *"
                },
                {
                    methodname: "GetISteamMatchmakingServers",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamMatchmakingServers",
                    params: [
                        { paramname: "hSteamUser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamMatchmakingServers *"
                },
                {
                    methodname: "GetISteamGenericInterface",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamGenericInterface",
                    params: [
                        { paramname: "hSteamUser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "void *"
                },
                {
                    methodname: "GetISteamUserStats",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamUserStats",
                    params: [
                        { paramname: "hSteamUser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamUserStats *"
                },
                {
                    methodname: "GetISteamGameServerStats",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamGameServerStats",
                    params: [
                        { paramname: "hSteamuser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamGameServerStats *"
                },
                {
                    methodname: "GetISteamApps",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamApps",
                    params: [
                        { paramname: "hSteamUser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamApps *"
                },
                {
                    methodname: "GetISteamNetworking",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamNetworking",
                    params: [
                        { paramname: "hSteamUser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamNetworking *"
                },
                {
                    methodname: "GetISteamRemoteStorage",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamRemoteStorage",
                    params: [
                        { paramname: "hSteamuser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamRemoteStorage *"
                },
                {
                    methodname: "GetISteamScreenshots",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamScreenshots",
                    params: [
                        { paramname: "hSteamuser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamScreenshots *"
                },
                {
                    methodname: "GetISteamGameSearch",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamGameSearch",
                    params: [
                        { paramname: "hSteamuser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamGameSearch *"
                },
                {
                    methodname: "GetIPCCallCount",
                    methodname_flat: "SteamAPI_ISteamClient_GetIPCCallCount",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "SetWarningMessageHook",
                    methodname_flat: "SteamAPI_ISteamClient_SetWarningMessageHook",
                    params: [{ paramname: "pFunction", paramtype: "SteamAPIWarningMessageHook_t" }],
                    returntype: "void"
                },
                {
                    methodname: "BShutdownIfAllPipesClosed",
                    methodname_flat: "SteamAPI_ISteamClient_BShutdownIfAllPipesClosed",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "GetISteamHTTP",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamHTTP",
                    params: [
                        { paramname: "hSteamuser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamHTTP *"
                },
                {
                    methodname: "GetISteamController",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamController",
                    params: [
                        { paramname: "hSteamUser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamController *"
                },
                {
                    methodname: "GetISteamUGC",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamUGC",
                    params: [
                        { paramname: "hSteamUser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamUGC *"
                },
                {
                    methodname: "GetISteamAppList",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamAppList",
                    params: [
                        { paramname: "hSteamUser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamAppList *"
                },
                {
                    methodname: "GetISteamMusic",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamMusic",
                    params: [
                        { paramname: "hSteamuser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamMusic *"
                },
                {
                    methodname: "GetISteamMusicRemote",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamMusicRemote",
                    params: [
                        { paramname: "hSteamuser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamMusicRemote *"
                },
                {
                    methodname: "GetISteamHTMLSurface",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamHTMLSurface",
                    params: [
                        { paramname: "hSteamuser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamHTMLSurface *"
                },
                {
                    methodname: "GetISteamInventory",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamInventory",
                    params: [
                        { paramname: "hSteamuser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamInventory *"
                },
                {
                    methodname: "GetISteamVideo",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamVideo",
                    params: [
                        { paramname: "hSteamuser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamVideo *"
                },
                {
                    methodname: "GetISteamParentalSettings",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamParentalSettings",
                    params: [
                        { paramname: "hSteamuser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamParentalSettings *"
                },
                {
                    methodname: "GetISteamInput",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamInput",
                    params: [
                        { paramname: "hSteamUser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamInput *"
                },
                {
                    methodname: "GetISteamParties",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamParties",
                    params: [
                        { paramname: "hSteamUser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamParties *"
                },
                {
                    methodname: "GetISteamRemotePlay",
                    methodname_flat: "SteamAPI_ISteamClient_GetISteamRemotePlay",
                    params: [
                        { paramname: "hSteamUser", paramtype: "HSteamUser" },
                        { paramname: "hSteamPipe", paramtype: "HSteamPipe" },
                        { paramname: "pchVersion", paramtype: "const char *" },
                    ],
                    returntype: "ISteamRemotePlay *"
                },
            ]
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamUser",
                    name_flat: "SteamAPI_SteamUser_v021"
                },
            ],
            classname: "ISteamUser",
            fields: [],
            methods: [
                {
                    methodname: "GetHSteamUser",
                    methodname_flat: "SteamAPI_ISteamUser_GetHSteamUser",
                    params: [],
                    returntype: "HSteamUser"
                },
                {
                    methodname: "BLoggedOn",
                    methodname_flat: "SteamAPI_ISteamUser_BLoggedOn",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "GetSteamID",
                    methodname_flat: "SteamAPI_ISteamUser_GetSteamID",
                    params: [],
                    returntype: "CSteamID",
                    returntype_flat: "uint64_steamid"
                },
                {
                    methodname: "InitiateGameConnection_DEPRECATED",
                    methodname_flat: "SteamAPI_ISteamUser_InitiateGameConnection_DEPRECATED",
                    params: [
                        { paramname: "pAuthBlob", paramtype: "void *" },
                        { paramname: "cbMaxAuthBlob", paramtype: "int" },
                        { paramname: "steamIDGameServer", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "unIPServer", paramtype: "uint32" },
                        { paramname: "usPortServer", paramtype: "uint16" },
                        { paramname: "bSecure", paramtype: "bool" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "TerminateGameConnection_DEPRECATED",
                    methodname_flat: "SteamAPI_ISteamUser_TerminateGameConnection_DEPRECATED",
                    params: [
                        { paramname: "unIPServer", paramtype: "uint32" },
                        { paramname: "usPortServer", paramtype: "uint16" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "TrackAppUsageEvent",
                    methodname_flat: "SteamAPI_ISteamUser_TrackAppUsageEvent",
                    params: [
                        { paramname: "gameID", paramtype: "CGameID", paramtype_flat: "uint64_gameid" },
                        { paramname: "eAppUsageEvent", paramtype: "int" },
                        { paramname: "pchExtraInfo", paramtype: "const char *" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "GetUserDataFolder",
                    methodname_flat: "SteamAPI_ISteamUser_GetUserDataFolder",
                    params: [
                        { paramname: "pchBuffer", paramtype: "char *" },
                        { paramname: "cubBuffer", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "StartVoiceRecording",
                    methodname_flat: "SteamAPI_ISteamUser_StartVoiceRecording",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "StopVoiceRecording",
                    methodname_flat: "SteamAPI_ISteamUser_StopVoiceRecording",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "GetAvailableVoice",
                    methodname_flat: "SteamAPI_ISteamUser_GetAvailableVoice",
                    params: [
                        { paramname: "pcbCompressed", paramtype: "uint32 *" },
                        { paramname: "pcbUncompressed_Deprecated", paramtype: "uint32 *" },
                        { paramname: "nUncompressedVoiceDesiredSampleRate_Deprecated", paramtype: "uint32" },
                    ],
                    returntype: "EVoiceResult"
                },
                {
                    methodname: "GetVoice",
                    methodname_flat: "SteamAPI_ISteamUser_GetVoice",
                    params: [
                        { paramname: "bWantCompressed", paramtype: "bool" },
                        { paramname: "pDestBuffer", paramtype: "void *" },
                        { paramname: "cbDestBufferSize", paramtype: "uint32" },
                        { paramname: "nBytesWritten", paramtype: "uint32 *" },
                        { paramname: "bWantUncompressed_Deprecated", paramtype: "bool" },
                        { paramname: "pUncompressedDestBuffer_Deprecated", paramtype: "void *" },
                        { paramname: "cbUncompressedDestBufferSize_Deprecated", paramtype: "uint32" },
                        { paramname: "nUncompressBytesWritten_Deprecated", paramtype: "uint32 *" },
                        { paramname: "nUncompressedVoiceDesiredSampleRate_Deprecated", paramtype: "uint32" },
                    ],
                    returntype: "EVoiceResult"
                },
                {
                    methodname: "DecompressVoice",
                    methodname_flat: "SteamAPI_ISteamUser_DecompressVoice",
                    params: [
                        { paramname: "pCompressed", paramtype: "const void *" },
                        { paramname: "cbCompressed", paramtype: "uint32" },
                        { paramname: "pDestBuffer", paramtype: "void *" },
                        { paramname: "cbDestBufferSize", paramtype: "uint32" },
                        { paramname: "nBytesWritten", paramtype: "uint32 *" },
                        { paramname: "nDesiredSampleRate", paramtype: "uint32" },
                    ],
                    returntype: "EVoiceResult"
                },
                {
                    methodname: "GetVoiceOptimalSampleRate",
                    methodname_flat: "SteamAPI_ISteamUser_GetVoiceOptimalSampleRate",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "GetAuthSessionTicket",
                    methodname_flat: "SteamAPI_ISteamUser_GetAuthSessionTicket",
                    params: [
                        { paramname: "pTicket", paramtype: "void *" },
                        { paramname: "cbMaxTicket", paramtype: "int" },
                        { paramname: "pcbTicket", paramtype: "uint32 *" },
                    ],
                    returntype: "HAuthTicket"
                },
                {
                    methodname: "BeginAuthSession",
                    methodname_flat: "SteamAPI_ISteamUser_BeginAuthSession",
                    params: [
                        { paramname: "pAuthTicket", paramtype: "const void *" },
                        { paramname: "cbAuthTicket", paramtype: "int" },
                        { paramname: "steamID", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                    ],
                    returntype: "EBeginAuthSessionResult"
                },
                {
                    methodname: "EndAuthSession",
                    methodname_flat: "SteamAPI_ISteamUser_EndAuthSession",
                    params: [{ paramname: "steamID", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "void"
                },
                {
                    methodname: "CancelAuthTicket",
                    methodname_flat: "SteamAPI_ISteamUser_CancelAuthTicket",
                    params: [{ paramname: "hAuthTicket", paramtype: "HAuthTicket" }],
                    returntype: "void"
                },
                {
                    methodname: "UserHasLicenseForApp",
                    methodname_flat: "SteamAPI_ISteamUser_UserHasLicenseForApp",
                    params: [
                        { paramname: "steamID", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "appID", paramtype: "AppId_t" },
                    ],
                    returntype: "EUserHasLicenseForAppResult"
                },
                {
                    methodname: "BIsBehindNAT",
                    methodname_flat: "SteamAPI_ISteamUser_BIsBehindNAT",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "AdvertiseGame",
                    methodname_flat: "SteamAPI_ISteamUser_AdvertiseGame",
                    params: [
                        { paramname: "steamIDGameServer", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "unIPServer", paramtype: "uint32" },
                        { paramname: "usPortServer", paramtype: "uint16" },
                    ],
                    returntype: "void"
                },
                {
                    callresult: "EncryptedAppTicketResponse_t",
                    methodname: "RequestEncryptedAppTicket",
                    methodname_flat: "SteamAPI_ISteamUser_RequestEncryptedAppTicket",
                    params: [
                        { paramname: "pDataToInclude", paramtype: "void *" },
                        { paramname: "cbDataToInclude", paramtype: "int" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetEncryptedAppTicket",
                    methodname_flat: "SteamAPI_ISteamUser_GetEncryptedAppTicket",
                    params: [
                        { paramname: "pTicket", paramtype: "void *" },
                        { paramname: "cbMaxTicket", paramtype: "int" },
                        { paramname: "pcbTicket", paramtype: "uint32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetGameBadgeLevel",
                    methodname_flat: "SteamAPI_ISteamUser_GetGameBadgeLevel",
                    params: [
                        { paramname: "nSeries", paramtype: "int" },
                        { paramname: "bFoil", paramtype: "bool" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "GetPlayerSteamLevel",
                    methodname_flat: "SteamAPI_ISteamUser_GetPlayerSteamLevel",
                    params: [],
                    returntype: "int"
                },
                {
                    callresult: "StoreAuthURLResponse_t",
                    methodname: "RequestStoreAuthURL",
                    methodname_flat: "SteamAPI_ISteamUser_RequestStoreAuthURL",
                    params: [{ paramname: "pchRedirectURL", paramtype: "const char *" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "BIsPhoneVerified",
                    methodname_flat: "SteamAPI_ISteamUser_BIsPhoneVerified",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "BIsTwoFactorEnabled",
                    methodname_flat: "SteamAPI_ISteamUser_BIsTwoFactorEnabled",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "BIsPhoneIdentifying",
                    methodname_flat: "SteamAPI_ISteamUser_BIsPhoneIdentifying",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "BIsPhoneRequiringVerification",
                    methodname_flat: "SteamAPI_ISteamUser_BIsPhoneRequiringVerification",
                    params: [],
                    returntype: "bool"
                },
                {
                    callresult: "MarketEligibilityResponse_t",
                    methodname: "GetMarketEligibility",
                    methodname_flat: "SteamAPI_ISteamUser_GetMarketEligibility",
                    params: [],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "DurationControl_t",
                    methodname: "GetDurationControl",
                    methodname_flat: "SteamAPI_ISteamUser_GetDurationControl",
                    params: [],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "BSetDurationControlOnlineState",
                    methodname_flat: "SteamAPI_ISteamUser_BSetDurationControlOnlineState",
                    params: [{ paramname: "eNewState", paramtype: "EDurationControlOnlineState" }],
                    returntype: "bool"
                },
            ],
            version_string: "SteamUser021"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamFriends",
                    name_flat: "SteamAPI_SteamFriends_v017"
                },
            ],
            classname: "ISteamFriends",
            fields: [],
            methods: [
                {
                    methodname: "GetPersonaName",
                    methodname_flat: "SteamAPI_ISteamFriends_GetPersonaName",
                    params: [],
                    returntype: "const char *"
                },
                {
                    callresult: "SetPersonaNameResponse_t",
                    methodname: "SetPersonaName",
                    methodname_flat: "SteamAPI_ISteamFriends_SetPersonaName",
                    params: [{ paramname: "pchPersonaName", paramtype: "const char *" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetPersonaState",
                    methodname_flat: "SteamAPI_ISteamFriends_GetPersonaState",
                    params: [],
                    returntype: "EPersonaState"
                },
                {
                    methodname: "GetFriendCount",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendCount",
                    params: [{ paramname: "iFriendFlags", paramtype: "int" }],
                    returntype: "int"
                },
                {
                    methodname: "GetFriendByIndex",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendByIndex",
                    params: [
                        { paramname: "iFriend", paramtype: "int" },
                        { paramname: "iFriendFlags", paramtype: "int" },
                    ],
                    returntype: "CSteamID",
                    returntype_flat: "uint64_steamid"
                },
                {
                    methodname: "GetFriendRelationship",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendRelationship",
                    params: [{ paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "EFriendRelationship"
                },
                {
                    methodname: "GetFriendPersonaState",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendPersonaState",
                    params: [{ paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "EPersonaState"
                },
                {
                    methodname: "GetFriendPersonaName",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendPersonaName",
                    params: [{ paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "const char *"
                },
                {
                    methodname: "GetFriendGamePlayed",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendGamePlayed",
                    params: [
                        { paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        {
                            out_struct: "",
                            paramname: "pFriendGameInfo",
                            paramtype: "FriendGameInfo_t *"
                        },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetFriendPersonaNameHistory",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendPersonaNameHistory",
                    params: [
                        { paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "iPersonaName", paramtype: "int" },
                    ],
                    returntype: "const char *"
                },
                {
                    methodname: "GetFriendSteamLevel",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendSteamLevel",
                    params: [{ paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "int"
                },
                {
                    methodname: "GetPlayerNickname",
                    methodname_flat: "SteamAPI_ISteamFriends_GetPlayerNickname",
                    params: [{ paramname: "steamIDPlayer", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "const char *"
                },
                {
                    methodname: "GetFriendsGroupCount",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendsGroupCount",
                    params: [],
                    returntype: "int"
                },
                {
                    methodname: "GetFriendsGroupIDByIndex",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendsGroupIDByIndex",
                    params: [{ paramname: "iFG", paramtype: "int" }],
                    returntype: "FriendsGroupID_t"
                },
                {
                    methodname: "GetFriendsGroupName",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendsGroupName",
                    params: [{ paramname: "friendsGroupID", paramtype: "FriendsGroupID_t" }],
                    returntype: "const char *"
                },
                {
                    methodname: "GetFriendsGroupMembersCount",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendsGroupMembersCount",
                    params: [{ paramname: "friendsGroupID", paramtype: "FriendsGroupID_t" }],
                    returntype: "int"
                },
                {
                    methodname: "GetFriendsGroupMembersList",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendsGroupMembersList",
                    params: [
                        { paramname: "friendsGroupID", paramtype: "FriendsGroupID_t" },
                        {
                            out_array_call: "nMembersCount,GetFriendsGroupMembersCount,friendsGroupID",
                            paramname: "pOutSteamIDMembers",
                            paramtype: "CSteamID *"
                        },
                        { paramname: "nMembersCount", paramtype: "int" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "HasFriend",
                    methodname_flat: "SteamAPI_ISteamFriends_HasFriend",
                    params: [
                        { paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "iFriendFlags", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetClanCount",
                    methodname_flat: "SteamAPI_ISteamFriends_GetClanCount",
                    params: [],
                    returntype: "int"
                },
                {
                    methodname: "GetClanByIndex",
                    methodname_flat: "SteamAPI_ISteamFriends_GetClanByIndex",
                    params: [{ paramname: "iClan", paramtype: "int" }],
                    returntype: "CSteamID",
                    returntype_flat: "uint64_steamid"
                },
                {
                    methodname: "GetClanName",
                    methodname_flat: "SteamAPI_ISteamFriends_GetClanName",
                    params: [{ paramname: "steamIDClan", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "const char *"
                },
                {
                    methodname: "GetClanTag",
                    methodname_flat: "SteamAPI_ISteamFriends_GetClanTag",
                    params: [{ paramname: "steamIDClan", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "const char *"
                },
                {
                    methodname: "GetClanActivityCounts",
                    methodname_flat: "SteamAPI_ISteamFriends_GetClanActivityCounts",
                    params: [
                        { paramname: "steamIDClan", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pnOnline", paramtype: "int *" },
                        { paramname: "pnInGame", paramtype: "int *" },
                        { paramname: "pnChatting", paramtype: "int *" },
                    ],
                    returntype: "bool"
                },
                {
                    callresult: "DownloadClanActivityCountsResult_t",
                    methodname: "DownloadClanActivityCounts",
                    methodname_flat: "SteamAPI_ISteamFriends_DownloadClanActivityCounts",
                    params: [
                        {
                            array_count: "cClansToRequest",
                            paramname: "psteamIDClans",
                            paramtype: "CSteamID *"
                        },
                        { paramname: "cClansToRequest", paramtype: "int" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetFriendCountFromSource",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendCountFromSource",
                    params: [{ paramname: "steamIDSource", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "int"
                },
                {
                    methodname: "GetFriendFromSourceByIndex",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendFromSourceByIndex",
                    params: [
                        { paramname: "steamIDSource", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "iFriend", paramtype: "int" },
                    ],
                    returntype: "CSteamID",
                    returntype_flat: "uint64_steamid"
                },
                {
                    methodname: "IsUserInSource",
                    methodname_flat: "SteamAPI_ISteamFriends_IsUserInSource",
                    params: [
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "steamIDSource", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetInGameVoiceSpeaking",
                    methodname_flat: "SteamAPI_ISteamFriends_SetInGameVoiceSpeaking",
                    params: [
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "bSpeaking", paramtype: "bool" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "ActivateGameOverlay",
                    methodname_flat: "SteamAPI_ISteamFriends_ActivateGameOverlay",
                    params: [{ paramname: "pchDialog", paramtype: "const char *" }],
                    returntype: "void"
                },
                {
                    methodname: "ActivateGameOverlayToUser",
                    methodname_flat: "SteamAPI_ISteamFriends_ActivateGameOverlayToUser",
                    params: [
                        { paramname: "pchDialog", paramtype: "const char *" },
                        { paramname: "steamID", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "ActivateGameOverlayToWebPage",
                    methodname_flat: "SteamAPI_ISteamFriends_ActivateGameOverlayToWebPage",
                    params: [
                        { paramname: "pchURL", paramtype: "const char *" },
                        { paramname: "eMode", paramtype: "EActivateGameOverlayToWebPageMode" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "ActivateGameOverlayToStore",
                    methodname_flat: "SteamAPI_ISteamFriends_ActivateGameOverlayToStore",
                    params: [
                        { paramname: "nAppID", paramtype: "AppId_t" },
                        { paramname: "eFlag", paramtype: "EOverlayToStoreFlag" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SetPlayedWith",
                    methodname_flat: "SteamAPI_ISteamFriends_SetPlayedWith",
                    params: [
                        { paramname: "steamIDUserPlayedWith", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "ActivateGameOverlayInviteDialog",
                    methodname_flat: "SteamAPI_ISteamFriends_ActivateGameOverlayInviteDialog",
                    params: [{ paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "void"
                },
                {
                    methodname: "GetSmallFriendAvatar",
                    methodname_flat: "SteamAPI_ISteamFriends_GetSmallFriendAvatar",
                    params: [{ paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "int"
                },
                {
                    methodname: "GetMediumFriendAvatar",
                    methodname_flat: "SteamAPI_ISteamFriends_GetMediumFriendAvatar",
                    params: [{ paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "int"
                },
                {
                    methodname: "GetLargeFriendAvatar",
                    methodname_flat: "SteamAPI_ISteamFriends_GetLargeFriendAvatar",
                    params: [{ paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "int"
                },
                {
                    methodname: "RequestUserInformation",
                    methodname_flat: "SteamAPI_ISteamFriends_RequestUserInformation",
                    params: [
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "bRequireNameOnly", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    callresult: "ClanOfficerListResponse_t",
                    methodname: "RequestClanOfficerList",
                    methodname_flat: "SteamAPI_ISteamFriends_RequestClanOfficerList",
                    params: [{ paramname: "steamIDClan", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetClanOwner",
                    methodname_flat: "SteamAPI_ISteamFriends_GetClanOwner",
                    params: [{ paramname: "steamIDClan", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "CSteamID",
                    returntype_flat: "uint64_steamid"
                },
                {
                    methodname: "GetClanOfficerCount",
                    methodname_flat: "SteamAPI_ISteamFriends_GetClanOfficerCount",
                    params: [{ paramname: "steamIDClan", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "int"
                },
                {
                    methodname: "GetClanOfficerByIndex",
                    methodname_flat: "SteamAPI_ISteamFriends_GetClanOfficerByIndex",
                    params: [
                        { paramname: "steamIDClan", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "iOfficer", paramtype: "int" },
                    ],
                    returntype: "CSteamID",
                    returntype_flat: "uint64_steamid"
                },
                {
                    methodname: "GetUserRestrictions",
                    methodname_flat: "SteamAPI_ISteamFriends_GetUserRestrictions",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "SetRichPresence",
                    methodname_flat: "SteamAPI_ISteamFriends_SetRichPresence",
                    params: [
                        { paramname: "pchKey", paramtype: "const char *" },
                        { paramname: "pchValue", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "ClearRichPresence",
                    methodname_flat: "SteamAPI_ISteamFriends_ClearRichPresence",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "GetFriendRichPresence",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendRichPresence",
                    params: [
                        { paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchKey", paramtype: "const char *" },
                    ],
                    returntype: "const char *"
                },
                {
                    methodname: "GetFriendRichPresenceKeyCount",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendRichPresenceKeyCount",
                    params: [{ paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "int"
                },
                {
                    methodname: "GetFriendRichPresenceKeyByIndex",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendRichPresenceKeyByIndex",
                    params: [
                        { paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "iKey", paramtype: "int" },
                    ],
                    returntype: "const char *"
                },
                {
                    methodname: "RequestFriendRichPresence",
                    methodname_flat: "SteamAPI_ISteamFriends_RequestFriendRichPresence",
                    params: [{ paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "void"
                },
                {
                    methodname: "InviteUserToGame",
                    methodname_flat: "SteamAPI_ISteamFriends_InviteUserToGame",
                    params: [
                        { paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchConnectString", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetCoplayFriendCount",
                    methodname_flat: "SteamAPI_ISteamFriends_GetCoplayFriendCount",
                    params: [],
                    returntype: "int"
                },
                {
                    methodname: "GetCoplayFriend",
                    methodname_flat: "SteamAPI_ISteamFriends_GetCoplayFriend",
                    params: [{ paramname: "iCoplayFriend", paramtype: "int" }],
                    returntype: "CSteamID",
                    returntype_flat: "uint64_steamid"
                },
                {
                    methodname: "GetFriendCoplayTime",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendCoplayTime",
                    params: [{ paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "int"
                },
                {
                    methodname: "GetFriendCoplayGame",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendCoplayGame",
                    params: [{ paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "AppId_t"
                },
                {
                    callresult: "JoinClanChatRoomCompletionResult_t",
                    methodname: "JoinClanChatRoom",
                    methodname_flat: "SteamAPI_ISteamFriends_JoinClanChatRoom",
                    params: [{ paramname: "steamIDClan", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "LeaveClanChatRoom",
                    methodname_flat: "SteamAPI_ISteamFriends_LeaveClanChatRoom",
                    params: [{ paramname: "steamIDClan", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetClanChatMemberCount",
                    methodname_flat: "SteamAPI_ISteamFriends_GetClanChatMemberCount",
                    params: [{ paramname: "steamIDClan", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "int"
                },
                {
                    methodname: "GetChatMemberByIndex",
                    methodname_flat: "SteamAPI_ISteamFriends_GetChatMemberByIndex",
                    params: [
                        { paramname: "steamIDClan", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "iUser", paramtype: "int" },
                    ],
                    returntype: "CSteamID",
                    returntype_flat: "uint64_steamid"
                },
                {
                    methodname: "SendClanChatMessage",
                    methodname_flat: "SteamAPI_ISteamFriends_SendClanChatMessage",
                    params: [
                        { paramname: "steamIDClanChat", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchText", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetClanChatMessage",
                    methodname_flat: "SteamAPI_ISteamFriends_GetClanChatMessage",
                    params: [
                        { paramname: "steamIDClanChat", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "iMessage", paramtype: "int" },
                        { paramname: "prgchText", paramtype: "void *" },
                        { paramname: "cchTextMax", paramtype: "int" },
                        { paramname: "peChatEntryType", paramtype: "EChatEntryType *" },
                        {
                            out_struct: "",
                            paramname: "psteamidChatter",
                            paramtype: "CSteamID *"
                        },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "IsClanChatAdmin",
                    methodname_flat: "SteamAPI_ISteamFriends_IsClanChatAdmin",
                    params: [
                        { paramname: "steamIDClanChat", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "IsClanChatWindowOpenInSteam",
                    methodname_flat: "SteamAPI_ISteamFriends_IsClanChatWindowOpenInSteam",
                    params: [{ paramname: "steamIDClanChat", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "bool"
                },
                {
                    methodname: "OpenClanChatWindowInSteam",
                    methodname_flat: "SteamAPI_ISteamFriends_OpenClanChatWindowInSteam",
                    params: [{ paramname: "steamIDClanChat", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "bool"
                },
                {
                    methodname: "CloseClanChatWindowInSteam",
                    methodname_flat: "SteamAPI_ISteamFriends_CloseClanChatWindowInSteam",
                    params: [{ paramname: "steamIDClanChat", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "bool"
                },
                {
                    methodname: "SetListenForFriendsMessages",
                    methodname_flat: "SteamAPI_ISteamFriends_SetListenForFriendsMessages",
                    params: [{ paramname: "bInterceptEnabled", paramtype: "bool" }],
                    returntype: "bool"
                },
                {
                    methodname: "ReplyToFriendMessage",
                    methodname_flat: "SteamAPI_ISteamFriends_ReplyToFriendMessage",
                    params: [
                        { paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchMsgToSend", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetFriendMessage",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFriendMessage",
                    params: [
                        { paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "iMessageID", paramtype: "int" },
                        { paramname: "pvData", paramtype: "void *" },
                        { paramname: "cubData", paramtype: "int" },
                        { paramname: "peChatEntryType", paramtype: "EChatEntryType *" },
                    ],
                    returntype: "int"
                },
                {
                    callresult: "FriendsGetFollowerCount_t",
                    methodname: "GetFollowerCount",
                    methodname_flat: "SteamAPI_ISteamFriends_GetFollowerCount",
                    params: [{ paramname: "steamID", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "FriendsIsFollowing_t",
                    methodname: "IsFollowing",
                    methodname_flat: "SteamAPI_ISteamFriends_IsFollowing",
                    params: [{ paramname: "steamID", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "FriendsEnumerateFollowingList_t",
                    methodname: "EnumerateFollowingList",
                    methodname_flat: "SteamAPI_ISteamFriends_EnumerateFollowingList",
                    params: [{ paramname: "unStartIndex", paramtype: "uint32" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "IsClanPublic",
                    methodname_flat: "SteamAPI_ISteamFriends_IsClanPublic",
                    params: [{ paramname: "steamIDClan", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "bool"
                },
                {
                    methodname: "IsClanOfficialGameGroup",
                    methodname_flat: "SteamAPI_ISteamFriends_IsClanOfficialGameGroup",
                    params: [{ paramname: "steamIDClan", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetNumChatsWithUnreadPriorityMessages",
                    methodname_flat: "SteamAPI_ISteamFriends_GetNumChatsWithUnreadPriorityMessages",
                    params: [],
                    returntype: "int"
                },
                {
                    methodname: "ActivateGameOverlayRemotePlayTogetherInviteDialog",
                    methodname_flat: "SteamAPI_ISteamFriends_ActivateGameOverlayRemotePlayTogetherInviteDialog",
                    params: [{ paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "void"
                },
                {
                    methodname: "RegisterProtocolInOverlayBrowser",
                    methodname_flat: "SteamAPI_ISteamFriends_RegisterProtocolInOverlayBrowser",
                    params: [{ paramname: "pchProtocol", paramtype: "const char *" }],
                    returntype: "bool"
                },
                {
                    methodname: "ActivateGameOverlayInviteDialogConnectString",
                    methodname_flat: "SteamAPI_ISteamFriends_ActivateGameOverlayInviteDialogConnectString",
                    params: [{ paramname: "pchConnectString", paramtype: "const char *" }],
                    returntype: "void"
                },
            ],
            version_string: "SteamFriends017"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamUtils",
                    name_flat: "SteamAPI_SteamUtils_v010"
                },
                {
                    kind: "gameserver",
                    name: "SteamGameServerUtils",
                    name_flat: "SteamAPI_SteamGameServerUtils_v010"
                },
            ],
            classname: "ISteamUtils",
            fields: [],
            methods: [
                {
                    methodname: "GetSecondsSinceAppActive",
                    methodname_flat: "SteamAPI_ISteamUtils_GetSecondsSinceAppActive",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "GetSecondsSinceComputerActive",
                    methodname_flat: "SteamAPI_ISteamUtils_GetSecondsSinceComputerActive",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "GetConnectedUniverse",
                    methodname_flat: "SteamAPI_ISteamUtils_GetConnectedUniverse",
                    params: [],
                    returntype: "EUniverse"
                },
                {
                    methodname: "GetServerRealTime",
                    methodname_flat: "SteamAPI_ISteamUtils_GetServerRealTime",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "GetIPCountry",
                    methodname_flat: "SteamAPI_ISteamUtils_GetIPCountry",
                    params: [],
                    returntype: "const char *"
                },
                {
                    methodname: "GetImageSize",
                    methodname_flat: "SteamAPI_ISteamUtils_GetImageSize",
                    params: [
                        { paramname: "iImage", paramtype: "int" },
                        { paramname: "pnWidth", paramtype: "uint32 *" },
                        { paramname: "pnHeight", paramtype: "uint32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetImageRGBA",
                    methodname_flat: "SteamAPI_ISteamUtils_GetImageRGBA",
                    params: [
                        { paramname: "iImage", paramtype: "int" },
                        { paramname: "pubDest", paramtype: "uint8 *" },
                        { paramname: "nDestBufferSize", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetCurrentBatteryPower",
                    methodname_flat: "SteamAPI_ISteamUtils_GetCurrentBatteryPower",
                    params: [],
                    returntype: "uint8"
                },
                {
                    methodname: "GetAppID",
                    methodname_flat: "SteamAPI_ISteamUtils_GetAppID",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "SetOverlayNotificationPosition",
                    methodname_flat: "SteamAPI_ISteamUtils_SetOverlayNotificationPosition",
                    params: [{ paramname: "eNotificationPosition", paramtype: "ENotificationPosition" }],
                    returntype: "void"
                },
                {
                    methodname: "IsAPICallCompleted",
                    methodname_flat: "SteamAPI_ISteamUtils_IsAPICallCompleted",
                    params: [
                        { paramname: "hSteamAPICall", paramtype: "SteamAPICall_t" },
                        { paramname: "pbFailed", paramtype: "bool *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetAPICallFailureReason",
                    methodname_flat: "SteamAPI_ISteamUtils_GetAPICallFailureReason",
                    params: [{ paramname: "hSteamAPICall", paramtype: "SteamAPICall_t" }],
                    returntype: "ESteamAPICallFailure"
                },
                {
                    methodname: "GetAPICallResult",
                    methodname_flat: "SteamAPI_ISteamUtils_GetAPICallResult",
                    params: [
                        { paramname: "hSteamAPICall", paramtype: "SteamAPICall_t" },
                        { paramname: "pCallback", paramtype: "void *" },
                        { paramname: "cubCallback", paramtype: "int" },
                        { paramname: "iCallbackExpected", paramtype: "int" },
                        { paramname: "pbFailed", paramtype: "bool *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetIPCCallCount",
                    methodname_flat: "SteamAPI_ISteamUtils_GetIPCCallCount",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "SetWarningMessageHook",
                    methodname_flat: "SteamAPI_ISteamUtils_SetWarningMessageHook",
                    params: [{ paramname: "pFunction", paramtype: "SteamAPIWarningMessageHook_t" }],
                    returntype: "void"
                },
                {
                    methodname: "IsOverlayEnabled",
                    methodname_flat: "SteamAPI_ISteamUtils_IsOverlayEnabled",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "BOverlayNeedsPresent",
                    methodname_flat: "SteamAPI_ISteamUtils_BOverlayNeedsPresent",
                    params: [],
                    returntype: "bool"
                },
                {
                    callresult: "CheckFileSignature_t",
                    methodname: "CheckFileSignature",
                    methodname_flat: "SteamAPI_ISteamUtils_CheckFileSignature",
                    params: [{ paramname: "szFileName", paramtype: "const char *" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "ShowGamepadTextInput",
                    methodname_flat: "SteamAPI_ISteamUtils_ShowGamepadTextInput",
                    params: [
                        { paramname: "eInputMode", paramtype: "EGamepadTextInputMode" },
                        { paramname: "eLineInputMode", paramtype: "EGamepadTextInputLineMode" },
                        { paramname: "pchDescription", paramtype: "const char *" },
                        { paramname: "unCharMax", paramtype: "uint32" },
                        { paramname: "pchExistingText", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetEnteredGamepadTextLength",
                    methodname_flat: "SteamAPI_ISteamUtils_GetEnteredGamepadTextLength",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "GetEnteredGamepadTextInput",
                    methodname_flat: "SteamAPI_ISteamUtils_GetEnteredGamepadTextInput",
                    params: [
                        { paramname: "pchText", paramtype: "char *" },
                        { paramname: "cchText", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetSteamUILanguage",
                    methodname_flat: "SteamAPI_ISteamUtils_GetSteamUILanguage",
                    params: [],
                    returntype: "const char *"
                },
                {
                    methodname: "IsSteamRunningInVR",
                    methodname_flat: "SteamAPI_ISteamUtils_IsSteamRunningInVR",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "SetOverlayNotificationInset",
                    methodname_flat: "SteamAPI_ISteamUtils_SetOverlayNotificationInset",
                    params: [
                        { paramname: "nHorizontalInset", paramtype: "int" },
                        { paramname: "nVerticalInset", paramtype: "int" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "IsSteamInBigPictureMode",
                    methodname_flat: "SteamAPI_ISteamUtils_IsSteamInBigPictureMode",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "StartVRDashboard",
                    methodname_flat: "SteamAPI_ISteamUtils_StartVRDashboard",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "IsVRHeadsetStreamingEnabled",
                    methodname_flat: "SteamAPI_ISteamUtils_IsVRHeadsetStreamingEnabled",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "SetVRHeadsetStreamingEnabled",
                    methodname_flat: "SteamAPI_ISteamUtils_SetVRHeadsetStreamingEnabled",
                    params: [{ paramname: "bEnabled", paramtype: "bool" }],
                    returntype: "void"
                },
                {
                    methodname: "IsSteamChinaLauncher",
                    methodname_flat: "SteamAPI_ISteamUtils_IsSteamChinaLauncher",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "InitFilterText",
                    methodname_flat: "SteamAPI_ISteamUtils_InitFilterText",
                    params: [{ paramname: "unFilterOptions", paramtype: "uint32" }],
                    returntype: "bool"
                },
                {
                    methodname: "FilterText",
                    methodname_flat: "SteamAPI_ISteamUtils_FilterText",
                    params: [
                        { paramname: "eContext", paramtype: "ETextFilteringContext" },
                        { paramname: "sourceSteamID", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchInputMessage", paramtype: "const char *" },
                        { paramname: "pchOutFilteredText", paramtype: "char *" },
                        { paramname: "nByteSizeOutFilteredText", paramtype: "uint32" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "GetIPv6ConnectivityState",
                    methodname_flat: "SteamAPI_ISteamUtils_GetIPv6ConnectivityState",
                    params: [{ paramname: "eProtocol", paramtype: "ESteamIPv6ConnectivityProtocol" }],
                    returntype: "ESteamIPv6ConnectivityState"
                },
                {
                    methodname: "IsSteamRunningOnSteamDeck",
                    methodname_flat: "SteamAPI_ISteamUtils_IsSteamRunningOnSteamDeck",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "ShowFloatingGamepadTextInput",
                    methodname_flat: "SteamAPI_ISteamUtils_ShowFloatingGamepadTextInput",
                    params: [
                        { paramname: "eKeyboardMode", paramtype: "EFloatingGamepadTextInputMode" },
                        { paramname: "nTextFieldXPosition", paramtype: "int" },
                        { paramname: "nTextFieldYPosition", paramtype: "int" },
                        { paramname: "nTextFieldWidth", paramtype: "int" },
                        { paramname: "nTextFieldHeight", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetGameLauncherMode",
                    methodname_flat: "SteamAPI_ISteamUtils_SetGameLauncherMode",
                    params: [{ paramname: "bLauncherMode", paramtype: "bool" }],
                    returntype: "void"
                },
                {
                    methodname: "DismissFloatingGamepadTextInput",
                    methodname_flat: "SteamAPI_ISteamUtils_DismissFloatingGamepadTextInput",
                    params: [],
                    returntype: "bool"
                },
            ],
            version_string: "SteamUtils010"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamMatchmaking",
                    name_flat: "SteamAPI_SteamMatchmaking_v009"
                },
            ],
            classname: "ISteamMatchmaking",
            fields: [],
            methods: [
                {
                    methodname: "GetFavoriteGameCount",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_GetFavoriteGameCount",
                    params: [],
                    returntype: "int"
                },
                {
                    methodname: "GetFavoriteGame",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_GetFavoriteGame",
                    params: [
                        { paramname: "iGame", paramtype: "int" },
                        { paramname: "pnAppID", paramtype: "AppId_t *" },
                        { paramname: "pnIP", paramtype: "uint32 *" },
                        { paramname: "pnConnPort", paramtype: "uint16 *" },
                        { paramname: "pnQueryPort", paramtype: "uint16 *" },
                        { paramname: "punFlags", paramtype: "uint32 *" },
                        { paramname: "pRTime32LastPlayedOnServer", paramtype: "uint32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "AddFavoriteGame",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_AddFavoriteGame",
                    params: [
                        { paramname: "nAppID", paramtype: "AppId_t" },
                        { paramname: "nIP", paramtype: "uint32" },
                        { paramname: "nConnPort", paramtype: "uint16" },
                        { paramname: "nQueryPort", paramtype: "uint16" },
                        { paramname: "unFlags", paramtype: "uint32" },
                        { paramname: "rTime32LastPlayedOnServer", paramtype: "uint32" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "RemoveFavoriteGame",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_RemoveFavoriteGame",
                    params: [
                        { paramname: "nAppID", paramtype: "AppId_t" },
                        { paramname: "nIP", paramtype: "uint32" },
                        { paramname: "nConnPort", paramtype: "uint16" },
                        { paramname: "nQueryPort", paramtype: "uint16" },
                        { paramname: "unFlags", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    callresult: "LobbyMatchList_t",
                    methodname: "RequestLobbyList",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_RequestLobbyList",
                    params: [],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "AddRequestLobbyListStringFilter",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_AddRequestLobbyListStringFilter",
                    params: [
                        { paramname: "pchKeyToMatch", paramtype: "const char *" },
                        { paramname: "pchValueToMatch", paramtype: "const char *" },
                        { paramname: "eComparisonType", paramtype: "ELobbyComparison" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "AddRequestLobbyListNumericalFilter",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_AddRequestLobbyListNumericalFilter",
                    params: [
                        { paramname: "pchKeyToMatch", paramtype: "const char *" },
                        { paramname: "nValueToMatch", paramtype: "int" },
                        { paramname: "eComparisonType", paramtype: "ELobbyComparison" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "AddRequestLobbyListNearValueFilter",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_AddRequestLobbyListNearValueFilter",
                    params: [
                        { paramname: "pchKeyToMatch", paramtype: "const char *" },
                        { paramname: "nValueToBeCloseTo", paramtype: "int" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "AddRequestLobbyListFilterSlotsAvailable",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_AddRequestLobbyListFilterSlotsAvailable",
                    params: [{ paramname: "nSlotsAvailable", paramtype: "int" }],
                    returntype: "void"
                },
                {
                    methodname: "AddRequestLobbyListDistanceFilter",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_AddRequestLobbyListDistanceFilter",
                    params: [{ paramname: "eLobbyDistanceFilter", paramtype: "ELobbyDistanceFilter" }],
                    returntype: "void"
                },
                {
                    methodname: "AddRequestLobbyListResultCountFilter",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_AddRequestLobbyListResultCountFilter",
                    params: [{ paramname: "cMaxResults", paramtype: "int" }],
                    returntype: "void"
                },
                {
                    methodname: "AddRequestLobbyListCompatibleMembersFilter",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_AddRequestLobbyListCompatibleMembersFilter",
                    params: [{ paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "void"
                },
                {
                    methodname: "GetLobbyByIndex",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_GetLobbyByIndex",
                    params: [{ paramname: "iLobby", paramtype: "int" }],
                    returntype: "CSteamID",
                    returntype_flat: "uint64_steamid"
                },
                {
                    callresult: "LobbyCreated_t",
                    methodname: "CreateLobby",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_CreateLobby",
                    params: [
                        { paramname: "eLobbyType", paramtype: "ELobbyType" },
                        { paramname: "cMaxMembers", paramtype: "int" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "LobbyEnter_t",
                    methodname: "JoinLobby",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_JoinLobby",
                    params: [{ paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "LeaveLobby",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_LeaveLobby",
                    params: [{ paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "void"
                },
                {
                    methodname: "InviteUserToLobby",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_InviteUserToLobby",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "steamIDInvitee", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetNumLobbyMembers",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_GetNumLobbyMembers",
                    params: [{ paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "int"
                },
                {
                    methodname: "GetLobbyMemberByIndex",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_GetLobbyMemberByIndex",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "iMember", paramtype: "int" },
                    ],
                    returntype: "CSteamID",
                    returntype_flat: "uint64_steamid"
                },
                {
                    methodname: "GetLobbyData",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_GetLobbyData",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchKey", paramtype: "const char *" },
                    ],
                    returntype: "const char *"
                },
                {
                    methodname: "SetLobbyData",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_SetLobbyData",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchKey", paramtype: "const char *" },
                        { paramname: "pchValue", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetLobbyDataCount",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_GetLobbyDataCount",
                    params: [{ paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "int"
                },
                {
                    methodname: "GetLobbyDataByIndex",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_GetLobbyDataByIndex",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "iLobbyData", paramtype: "int" },
                        { paramname: "pchKey", paramtype: "char *" },
                        { paramname: "cchKeyBufferSize", paramtype: "int" },
                        { paramname: "pchValue", paramtype: "char *" },
                        { paramname: "cchValueBufferSize", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "DeleteLobbyData",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_DeleteLobbyData",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchKey", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetLobbyMemberData",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_GetLobbyMemberData",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchKey", paramtype: "const char *" },
                    ],
                    returntype: "const char *"
                },
                {
                    methodname: "SetLobbyMemberData",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_SetLobbyMemberData",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchKey", paramtype: "const char *" },
                        { paramname: "pchValue", paramtype: "const char *" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SendLobbyChatMsg",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_SendLobbyChatMsg",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pvMsgBody", paramtype: "const void *" },
                        { paramname: "cubMsgBody", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetLobbyChatEntry",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_GetLobbyChatEntry",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "iChatID", paramtype: "int" },
                        {
                            out_struct: "",
                            paramname: "pSteamIDUser",
                            paramtype: "CSteamID *"
                        },
                        { paramname: "pvData", paramtype: "void *" },
                        { paramname: "cubData", paramtype: "int" },
                        { paramname: "peChatEntryType", paramtype: "EChatEntryType *" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "RequestLobbyData",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_RequestLobbyData",
                    params: [{ paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "bool"
                },
                {
                    methodname: "SetLobbyGameServer",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_SetLobbyGameServer",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "unGameServerIP", paramtype: "uint32" },
                        { paramname: "unGameServerPort", paramtype: "uint16" },
                        { paramname: "steamIDGameServer", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "GetLobbyGameServer",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_GetLobbyGameServer",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "punGameServerIP", paramtype: "uint32 *" },
                        { paramname: "punGameServerPort", paramtype: "uint16 *" },
                        {
                            out_struct: "",
                            paramname: "psteamIDGameServer",
                            paramtype: "CSteamID *"
                        },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetLobbyMemberLimit",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_SetLobbyMemberLimit",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "cMaxMembers", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetLobbyMemberLimit",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_GetLobbyMemberLimit",
                    params: [{ paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "int"
                },
                {
                    methodname: "SetLobbyType",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_SetLobbyType",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "eLobbyType", paramtype: "ELobbyType" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetLobbyJoinable",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_SetLobbyJoinable",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "bLobbyJoinable", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetLobbyOwner",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_GetLobbyOwner",
                    params: [{ paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "CSteamID",
                    returntype_flat: "uint64_steamid"
                },
                {
                    methodname: "SetLobbyOwner",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_SetLobbyOwner",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "steamIDNewOwner", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetLinkedLobby",
                    methodname_flat: "SteamAPI_ISteamMatchmaking_SetLinkedLobby",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "steamIDLobbyDependent", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                    ],
                    returntype: "bool"
                },
            ],
            version_string: "SteamMatchMaking009"
        },
        {
            classname: "ISteamMatchmakingServerListResponse",
            fields: [],
            methods: [
                {
                    methodname: "ServerResponded",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServerListResponse_ServerResponded",
                    params: [
                        { paramname: "hRequest", paramtype: "HServerListRequest" },
                        { paramname: "iServer", paramtype: "int" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "ServerFailedToRespond",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServerListResponse_ServerFailedToRespond",
                    params: [
                        { paramname: "hRequest", paramtype: "HServerListRequest" },
                        { paramname: "iServer", paramtype: "int" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "RefreshComplete",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServerListResponse_RefreshComplete",
                    params: [
                        { paramname: "hRequest", paramtype: "HServerListRequest" },
                        { paramname: "response", paramtype: "EMatchMakingServerResponse" },
                    ],
                    returntype: "void"
                },
            ]
        },
        {
            classname: "ISteamMatchmakingPingResponse",
            fields: [],
            methods: [
                {
                    methodname: "ServerResponded",
                    methodname_flat: "SteamAPI_ISteamMatchmakingPingResponse_ServerResponded",
                    params: [{ paramname: "server", paramtype: "gameserveritem_t &" }],
                    returntype: "void"
                },
                {
                    methodname: "ServerFailedToRespond",
                    methodname_flat: "SteamAPI_ISteamMatchmakingPingResponse_ServerFailedToRespond",
                    params: [],
                    returntype: "void"
                },
            ]
        },
        {
            classname: "ISteamMatchmakingPlayersResponse",
            fields: [],
            methods: [
                {
                    methodname: "AddPlayerToList",
                    methodname_flat: "SteamAPI_ISteamMatchmakingPlayersResponse_AddPlayerToList",
                    params: [
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "nScore", paramtype: "int" },
                        { paramname: "flTimePlayed", paramtype: "float" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "PlayersFailedToRespond",
                    methodname_flat: "SteamAPI_ISteamMatchmakingPlayersResponse_PlayersFailedToRespond",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "PlayersRefreshComplete",
                    methodname_flat: "SteamAPI_ISteamMatchmakingPlayersResponse_PlayersRefreshComplete",
                    params: [],
                    returntype: "void"
                },
            ]
        },
        {
            classname: "ISteamMatchmakingRulesResponse",
            fields: [],
            methods: [
                {
                    methodname: "RulesResponded",
                    methodname_flat: "SteamAPI_ISteamMatchmakingRulesResponse_RulesResponded",
                    params: [
                        { paramname: "pchRule", paramtype: "const char *" },
                        { paramname: "pchValue", paramtype: "const char *" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "RulesFailedToRespond",
                    methodname_flat: "SteamAPI_ISteamMatchmakingRulesResponse_RulesFailedToRespond",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "RulesRefreshComplete",
                    methodname_flat: "SteamAPI_ISteamMatchmakingRulesResponse_RulesRefreshComplete",
                    params: [],
                    returntype: "void"
                },
            ]
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamMatchmakingServers",
                    name_flat: "SteamAPI_SteamMatchmakingServers_v002"
                },
            ],
            classname: "ISteamMatchmakingServers",
            fields: [],
            methods: [
                {
                    methodname: "RequestInternetServerList",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServers_RequestInternetServerList",
                    params: [
                        { paramname: "iApp", paramtype: "AppId_t" },
                        {
                            array_count: "nFilters",
                            paramname: "ppchFilters",
                            paramtype: "MatchMakingKeyValuePair_t **"
                        },
                        { paramname: "nFilters", paramtype: "uint32" },
                        { paramname: "pRequestServersResponse", paramtype: "ISteamMatchmakingServerListResponse *" },
                    ],
                    returntype: "HServerListRequest"
                },
                {
                    methodname: "RequestLANServerList",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServers_RequestLANServerList",
                    params: [
                        { paramname: "iApp", paramtype: "AppId_t" },
                        { paramname: "pRequestServersResponse", paramtype: "ISteamMatchmakingServerListResponse *" },
                    ],
                    returntype: "HServerListRequest"
                },
                {
                    methodname: "RequestFriendsServerList",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServers_RequestFriendsServerList",
                    params: [
                        { paramname: "iApp", paramtype: "AppId_t" },
                        {
                            array_count: "nFilters",
                            paramname: "ppchFilters",
                            paramtype: "MatchMakingKeyValuePair_t **"
                        },
                        { paramname: "nFilters", paramtype: "uint32" },
                        { paramname: "pRequestServersResponse", paramtype: "ISteamMatchmakingServerListResponse *" },
                    ],
                    returntype: "HServerListRequest"
                },
                {
                    methodname: "RequestFavoritesServerList",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServers_RequestFavoritesServerList",
                    params: [
                        { paramname: "iApp", paramtype: "AppId_t" },
                        {
                            array_count: "nFilters",
                            paramname: "ppchFilters",
                            paramtype: "MatchMakingKeyValuePair_t **"
                        },
                        { paramname: "nFilters", paramtype: "uint32" },
                        { paramname: "pRequestServersResponse", paramtype: "ISteamMatchmakingServerListResponse *" },
                    ],
                    returntype: "HServerListRequest"
                },
                {
                    methodname: "RequestHistoryServerList",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServers_RequestHistoryServerList",
                    params: [
                        { paramname: "iApp", paramtype: "AppId_t" },
                        {
                            array_count: "nFilters",
                            paramname: "ppchFilters",
                            paramtype: "MatchMakingKeyValuePair_t **"
                        },
                        { paramname: "nFilters", paramtype: "uint32" },
                        { paramname: "pRequestServersResponse", paramtype: "ISteamMatchmakingServerListResponse *" },
                    ],
                    returntype: "HServerListRequest"
                },
                {
                    methodname: "RequestSpectatorServerList",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServers_RequestSpectatorServerList",
                    params: [
                        { paramname: "iApp", paramtype: "AppId_t" },
                        {
                            array_count: "nFilters",
                            paramname: "ppchFilters",
                            paramtype: "MatchMakingKeyValuePair_t **"
                        },
                        { paramname: "nFilters", paramtype: "uint32" },
                        { paramname: "pRequestServersResponse", paramtype: "ISteamMatchmakingServerListResponse *" },
                    ],
                    returntype: "HServerListRequest"
                },
                {
                    methodname: "ReleaseRequest",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServers_ReleaseRequest",
                    params: [{ paramname: "hServerListRequest", paramtype: "HServerListRequest" }],
                    returntype: "void"
                },
                {
                    methodname: "GetServerDetails",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServers_GetServerDetails",
                    params: [
                        { paramname: "hRequest", paramtype: "HServerListRequest" },
                        { paramname: "iServer", paramtype: "int" },
                    ],
                    returntype: "gameserveritem_t *"
                },
                {
                    methodname: "CancelQuery",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServers_CancelQuery",
                    params: [{ paramname: "hRequest", paramtype: "HServerListRequest" }],
                    returntype: "void"
                },
                {
                    methodname: "RefreshQuery",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServers_RefreshQuery",
                    params: [{ paramname: "hRequest", paramtype: "HServerListRequest" }],
                    returntype: "void"
                },
                {
                    methodname: "IsRefreshing",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServers_IsRefreshing",
                    params: [{ paramname: "hRequest", paramtype: "HServerListRequest" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetServerCount",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServers_GetServerCount",
                    params: [{ paramname: "hRequest", paramtype: "HServerListRequest" }],
                    returntype: "int"
                },
                {
                    methodname: "RefreshServer",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServers_RefreshServer",
                    params: [
                        { paramname: "hRequest", paramtype: "HServerListRequest" },
                        { paramname: "iServer", paramtype: "int" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "PingServer",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServers_PingServer",
                    params: [
                        { paramname: "unIP", paramtype: "uint32" },
                        { paramname: "usPort", paramtype: "uint16" },
                        { paramname: "pRequestServersResponse", paramtype: "ISteamMatchmakingPingResponse *" },
                    ],
                    returntype: "HServerQuery"
                },
                {
                    methodname: "PlayerDetails",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServers_PlayerDetails",
                    params: [
                        { paramname: "unIP", paramtype: "uint32" },
                        { paramname: "usPort", paramtype: "uint16" },
                        { paramname: "pRequestServersResponse", paramtype: "ISteamMatchmakingPlayersResponse *" },
                    ],
                    returntype: "HServerQuery"
                },
                {
                    methodname: "ServerRules",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServers_ServerRules",
                    params: [
                        { paramname: "unIP", paramtype: "uint32" },
                        { paramname: "usPort", paramtype: "uint16" },
                        { paramname: "pRequestServersResponse", paramtype: "ISteamMatchmakingRulesResponse *" },
                    ],
                    returntype: "HServerQuery"
                },
                {
                    methodname: "CancelServerQuery",
                    methodname_flat: "SteamAPI_ISteamMatchmakingServers_CancelServerQuery",
                    params: [{ paramname: "hServerQuery", paramtype: "HServerQuery" }],
                    returntype: "void"
                },
            ],
            version_string: "SteamMatchMakingServers002"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamGameSearch",
                    name_flat: "SteamAPI_SteamGameSearch_v001"
                },
            ],
            classname: "ISteamGameSearch",
            fields: [],
            methods: [
                {
                    methodname: "AddGameSearchParams",
                    methodname_flat: "SteamAPI_ISteamGameSearch_AddGameSearchParams",
                    params: [
                        { paramname: "pchKeyToFind", paramtype: "const char *" },
                        { paramname: "pchValuesToFind", paramtype: "const char *" },
                    ],
                    returntype: "EGameSearchErrorCode_t"
                },
                {
                    methodname: "SearchForGameWithLobby",
                    methodname_flat: "SteamAPI_ISteamGameSearch_SearchForGameWithLobby",
                    params: [
                        { paramname: "steamIDLobby", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "nPlayerMin", paramtype: "int" },
                        { paramname: "nPlayerMax", paramtype: "int" },
                    ],
                    returntype: "EGameSearchErrorCode_t"
                },
                {
                    methodname: "SearchForGameSolo",
                    methodname_flat: "SteamAPI_ISteamGameSearch_SearchForGameSolo",
                    params: [
                        { paramname: "nPlayerMin", paramtype: "int" },
                        { paramname: "nPlayerMax", paramtype: "int" },
                    ],
                    returntype: "EGameSearchErrorCode_t"
                },
                {
                    methodname: "AcceptGame",
                    methodname_flat: "SteamAPI_ISteamGameSearch_AcceptGame",
                    params: [],
                    returntype: "EGameSearchErrorCode_t"
                },
                {
                    methodname: "DeclineGame",
                    methodname_flat: "SteamAPI_ISteamGameSearch_DeclineGame",
                    params: [],
                    returntype: "EGameSearchErrorCode_t"
                },
                {
                    methodname: "RetrieveConnectionDetails",
                    methodname_flat: "SteamAPI_ISteamGameSearch_RetrieveConnectionDetails",
                    params: [
                        { paramname: "steamIDHost", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchConnectionDetails", paramtype: "char *" },
                        { paramname: "cubConnectionDetails", paramtype: "int" },
                    ],
                    returntype: "EGameSearchErrorCode_t"
                },
                {
                    methodname: "EndGameSearch",
                    methodname_flat: "SteamAPI_ISteamGameSearch_EndGameSearch",
                    params: [],
                    returntype: "EGameSearchErrorCode_t"
                },
                {
                    methodname: "SetGameHostParams",
                    methodname_flat: "SteamAPI_ISteamGameSearch_SetGameHostParams",
                    params: [
                        { paramname: "pchKey", paramtype: "const char *" },
                        { paramname: "pchValue", paramtype: "const char *" },
                    ],
                    returntype: "EGameSearchErrorCode_t"
                },
                {
                    methodname: "SetConnectionDetails",
                    methodname_flat: "SteamAPI_ISteamGameSearch_SetConnectionDetails",
                    params: [
                        { paramname: "pchConnectionDetails", paramtype: "const char *" },
                        { paramname: "cubConnectionDetails", paramtype: "int" },
                    ],
                    returntype: "EGameSearchErrorCode_t"
                },
                {
                    methodname: "RequestPlayersForGame",
                    methodname_flat: "SteamAPI_ISteamGameSearch_RequestPlayersForGame",
                    params: [
                        { paramname: "nPlayerMin", paramtype: "int" },
                        { paramname: "nPlayerMax", paramtype: "int" },
                        { paramname: "nMaxTeamSize", paramtype: "int" },
                    ],
                    returntype: "EGameSearchErrorCode_t"
                },
                {
                    methodname: "HostConfirmGameStart",
                    methodname_flat: "SteamAPI_ISteamGameSearch_HostConfirmGameStart",
                    params: [{ paramname: "ullUniqueGameID", paramtype: "uint64" }],
                    returntype: "EGameSearchErrorCode_t"
                },
                {
                    methodname: "CancelRequestPlayersForGame",
                    methodname_flat: "SteamAPI_ISteamGameSearch_CancelRequestPlayersForGame",
                    params: [],
                    returntype: "EGameSearchErrorCode_t"
                },
                {
                    methodname: "SubmitPlayerResult",
                    methodname_flat: "SteamAPI_ISteamGameSearch_SubmitPlayerResult",
                    params: [
                        { paramname: "ullUniqueGameID", paramtype: "uint64" },
                        { paramname: "steamIDPlayer", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "EPlayerResult", paramtype: "EPlayerResult_t" },
                    ],
                    returntype: "EGameSearchErrorCode_t"
                },
                {
                    methodname: "EndGame",
                    methodname_flat: "SteamAPI_ISteamGameSearch_EndGame",
                    params: [{ paramname: "ullUniqueGameID", paramtype: "uint64" }],
                    returntype: "EGameSearchErrorCode_t"
                },
            ],
            version_string: "SteamMatchGameSearch001"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamParties",
                    name_flat: "SteamAPI_SteamParties_v002"
                },
            ],
            classname: "ISteamParties",
            fields: [],
            methods: [
                {
                    methodname: "GetNumActiveBeacons",
                    methodname_flat: "SteamAPI_ISteamParties_GetNumActiveBeacons",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "GetBeaconByIndex",
                    methodname_flat: "SteamAPI_ISteamParties_GetBeaconByIndex",
                    params: [{ paramname: "unIndex", paramtype: "uint32" }],
                    returntype: "PartyBeaconID_t"
                },
                {
                    methodname: "GetBeaconDetails",
                    methodname_flat: "SteamAPI_ISteamParties_GetBeaconDetails",
                    params: [
                        { paramname: "ulBeaconID", paramtype: "PartyBeaconID_t" },
                        { paramname: "pSteamIDBeaconOwner", paramtype: "CSteamID *" },
                        {
                            out_struct: "",
                            paramname: "pLocation",
                            paramtype: "SteamPartyBeaconLocation_t *"
                        },
                        {
                            out_string_count: "cchMetadata",
                            paramname: "pchMetadata",
                            paramtype: "char *"
                        },
                        { paramname: "cchMetadata", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
                {
                    callresult: "JoinPartyCallback_t",
                    methodname: "JoinParty",
                    methodname_flat: "SteamAPI_ISteamParties_JoinParty",
                    params: [{ paramname: "ulBeaconID", paramtype: "PartyBeaconID_t" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetNumAvailableBeaconLocations",
                    methodname_flat: "SteamAPI_ISteamParties_GetNumAvailableBeaconLocations",
                    params: [{ paramname: "puNumLocations", paramtype: "uint32 *" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetAvailableBeaconLocations",
                    methodname_flat: "SteamAPI_ISteamParties_GetAvailableBeaconLocations",
                    params: [
                        { paramname: "pLocationList", paramtype: "SteamPartyBeaconLocation_t *" },
                        { paramname: "uMaxNumLocations", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    callresult: "CreateBeaconCallback_t",
                    methodname: "CreateBeacon",
                    methodname_flat: "SteamAPI_ISteamParties_CreateBeacon",
                    params: [
                        { paramname: "unOpenSlots", paramtype: "uint32" },
                        { paramname: "pBeaconLocation", paramtype: "SteamPartyBeaconLocation_t *" },
                        { paramname: "pchConnectString", paramtype: "const char *" },
                        { paramname: "pchMetadata", paramtype: "const char *" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "OnReservationCompleted",
                    methodname_flat: "SteamAPI_ISteamParties_OnReservationCompleted",
                    params: [
                        { paramname: "ulBeacon", paramtype: "PartyBeaconID_t" },
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "CancelReservation",
                    methodname_flat: "SteamAPI_ISteamParties_CancelReservation",
                    params: [
                        { paramname: "ulBeacon", paramtype: "PartyBeaconID_t" },
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                    ],
                    returntype: "void"
                },
                {
                    callresult: "ChangeNumOpenSlotsCallback_t",
                    methodname: "ChangeNumOpenSlots",
                    methodname_flat: "SteamAPI_ISteamParties_ChangeNumOpenSlots",
                    params: [
                        { paramname: "ulBeacon", paramtype: "PartyBeaconID_t" },
                        { paramname: "unOpenSlots", paramtype: "uint32" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "DestroyBeacon",
                    methodname_flat: "SteamAPI_ISteamParties_DestroyBeacon",
                    params: [{ paramname: "ulBeacon", paramtype: "PartyBeaconID_t" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetBeaconLocationData",
                    methodname_flat: "SteamAPI_ISteamParties_GetBeaconLocationData",
                    params: [
                        { paramname: "BeaconLocation", paramtype: "SteamPartyBeaconLocation_t" },
                        { paramname: "eData", paramtype: "ESteamPartyBeaconLocationData" },
                        {
                            out_string_count: "cchDataStringOut",
                            paramname: "pchDataStringOut",
                            paramtype: "char *"
                        },
                        { paramname: "cchDataStringOut", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
            ],
            version_string: "SteamParties002"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamRemoteStorage",
                    name_flat: "SteamAPI_SteamRemoteStorage_v016"
                },
            ],
            classname: "ISteamRemoteStorage",
            fields: [],
            methods: [
                {
                    methodname: "FileWrite",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_FileWrite",
                    params: [
                        { paramname: "pchFile", paramtype: "const char *" },
                        { paramname: "pvData", paramtype: "const void *" },
                        { paramname: "cubData", paramtype: "int32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "FileRead",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_FileRead",
                    params: [
                        { paramname: "pchFile", paramtype: "const char *" },
                        { paramname: "pvData", paramtype: "void *" },
                        { paramname: "cubDataToRead", paramtype: "int32" },
                    ],
                    returntype: "int32"
                },
                {
                    callresult: "RemoteStorageFileWriteAsyncComplete_t",
                    methodname: "FileWriteAsync",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_FileWriteAsync",
                    params: [
                        { paramname: "pchFile", paramtype: "const char *" },
                        { paramname: "pvData", paramtype: "const void *" },
                        { paramname: "cubData", paramtype: "uint32" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoteStorageFileReadAsyncComplete_t",
                    methodname: "FileReadAsync",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_FileReadAsync",
                    params: [
                        { paramname: "pchFile", paramtype: "const char *" },
                        { paramname: "nOffset", paramtype: "uint32" },
                        { paramname: "cubToRead", paramtype: "uint32" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "FileReadAsyncComplete",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_FileReadAsyncComplete",
                    params: [
                        { paramname: "hReadCall", paramtype: "SteamAPICall_t" },
                        { paramname: "pvBuffer", paramtype: "void *" },
                        { paramname: "cubToRead", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "FileForget",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_FileForget",
                    params: [{ paramname: "pchFile", paramtype: "const char *" }],
                    returntype: "bool"
                },
                {
                    methodname: "FileDelete",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_FileDelete",
                    params: [{ paramname: "pchFile", paramtype: "const char *" }],
                    returntype: "bool"
                },
                {
                    callresult: "RemoteStorageFileShareResult_t",
                    methodname: "FileShare",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_FileShare",
                    params: [{ paramname: "pchFile", paramtype: "const char *" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "SetSyncPlatforms",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_SetSyncPlatforms",
                    params: [
                        { paramname: "pchFile", paramtype: "const char *" },
                        { paramname: "eRemoteStoragePlatform", paramtype: "ERemoteStoragePlatform" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "FileWriteStreamOpen",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_FileWriteStreamOpen",
                    params: [{ paramname: "pchFile", paramtype: "const char *" }],
                    returntype: "UGCFileWriteStreamHandle_t"
                },
                {
                    methodname: "FileWriteStreamWriteChunk",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_FileWriteStreamWriteChunk",
                    params: [
                        { paramname: "writeHandle", paramtype: "UGCFileWriteStreamHandle_t" },
                        { paramname: "pvData", paramtype: "const void *" },
                        { paramname: "cubData", paramtype: "int32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "FileWriteStreamClose",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_FileWriteStreamClose",
                    params: [{ paramname: "writeHandle", paramtype: "UGCFileWriteStreamHandle_t" }],
                    returntype: "bool"
                },
                {
                    methodname: "FileWriteStreamCancel",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_FileWriteStreamCancel",
                    params: [{ paramname: "writeHandle", paramtype: "UGCFileWriteStreamHandle_t" }],
                    returntype: "bool"
                },
                {
                    methodname: "FileExists",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_FileExists",
                    params: [{ paramname: "pchFile", paramtype: "const char *" }],
                    returntype: "bool"
                },
                {
                    methodname: "FilePersisted",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_FilePersisted",
                    params: [{ paramname: "pchFile", paramtype: "const char *" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetFileSize",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_GetFileSize",
                    params: [{ paramname: "pchFile", paramtype: "const char *" }],
                    returntype: "int32"
                },
                {
                    methodname: "GetFileTimestamp",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_GetFileTimestamp",
                    params: [{ paramname: "pchFile", paramtype: "const char *" }],
                    returntype: "int64"
                },
                {
                    methodname: "GetSyncPlatforms",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_GetSyncPlatforms",
                    params: [{ paramname: "pchFile", paramtype: "const char *" }],
                    returntype: "ERemoteStoragePlatform"
                },
                {
                    methodname: "GetFileCount",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_GetFileCount",
                    params: [],
                    returntype: "int32"
                },
                {
                    methodname: "GetFileNameAndSize",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_GetFileNameAndSize",
                    params: [
                        { paramname: "iFile", paramtype: "int" },
                        { paramname: "pnFileSizeInBytes", paramtype: "int32 *" },
                    ],
                    returntype: "const char *"
                },
                {
                    methodname: "GetQuota",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_GetQuota",
                    params: [
                        { paramname: "pnTotalBytes", paramtype: "uint64 *" },
                        { paramname: "puAvailableBytes", paramtype: "uint64 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "IsCloudEnabledForAccount",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_IsCloudEnabledForAccount",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "IsCloudEnabledForApp",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_IsCloudEnabledForApp",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "SetCloudEnabledForApp",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_SetCloudEnabledForApp",
                    params: [{ paramname: "bEnabled", paramtype: "bool" }],
                    returntype: "void"
                },
                {
                    callresult: "RemoteStorageDownloadUGCResult_t",
                    methodname: "UGCDownload",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_UGCDownload",
                    params: [
                        { paramname: "hContent", paramtype: "UGCHandle_t" },
                        { paramname: "unPriority", paramtype: "uint32" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetUGCDownloadProgress",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_GetUGCDownloadProgress",
                    params: [
                        { paramname: "hContent", paramtype: "UGCHandle_t" },
                        { paramname: "pnBytesDownloaded", paramtype: "int32 *" },
                        { paramname: "pnBytesExpected", paramtype: "int32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetUGCDetails",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_GetUGCDetails",
                    params: [
                        { paramname: "hContent", paramtype: "UGCHandle_t" },
                        { paramname: "pnAppID", paramtype: "AppId_t *" },
                        {
                            out_string: "",
                            paramname: "ppchName",
                            paramtype: "char **"
                        },
                        { paramname: "pnFileSizeInBytes", paramtype: "int32 *" },
                        {
                            out_struct: "",
                            paramname: "pSteamIDOwner",
                            paramtype: "CSteamID *"
                        },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "UGCRead",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_UGCRead",
                    params: [
                        { paramname: "hContent", paramtype: "UGCHandle_t" },
                        { paramname: "pvData", paramtype: "void *" },
                        { paramname: "cubDataToRead", paramtype: "int32" },
                        { paramname: "cOffset", paramtype: "uint32" },
                        { paramname: "eAction", paramtype: "EUGCReadAction" },
                    ],
                    returntype: "int32"
                },
                {
                    methodname: "GetCachedUGCCount",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_GetCachedUGCCount",
                    params: [],
                    returntype: "int32"
                },
                {
                    methodname: "GetCachedUGCHandle",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_GetCachedUGCHandle",
                    params: [{ paramname: "iCachedContent", paramtype: "int32" }],
                    returntype: "UGCHandle_t"
                },
                {
                    callresult: "RemoteStoragePublishFileProgress_t",
                    methodname: "PublishWorkshopFile",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_PublishWorkshopFile",
                    params: [
                        { paramname: "pchFile", paramtype: "const char *" },
                        { paramname: "pchPreviewFile", paramtype: "const char *" },
                        { paramname: "nConsumerAppId", paramtype: "AppId_t" },
                        { paramname: "pchTitle", paramtype: "const char *" },
                        { paramname: "pchDescription", paramtype: "const char *" },
                        { paramname: "eVisibility", paramtype: "ERemoteStoragePublishedFileVisibility" },
                        { paramname: "pTags", paramtype: "SteamParamStringArray_t *" },
                        { paramname: "eWorkshopFileType", paramtype: "EWorkshopFileType" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "CreatePublishedFileUpdateRequest",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_CreatePublishedFileUpdateRequest",
                    params: [{ paramname: "unPublishedFileId", paramtype: "PublishedFileId_t" }],
                    returntype: "PublishedFileUpdateHandle_t"
                },
                {
                    methodname: "UpdatePublishedFileFile",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_UpdatePublishedFileFile",
                    params: [
                        { paramname: "updateHandle", paramtype: "PublishedFileUpdateHandle_t" },
                        { paramname: "pchFile", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "UpdatePublishedFilePreviewFile",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_UpdatePublishedFilePreviewFile",
                    params: [
                        { paramname: "updateHandle", paramtype: "PublishedFileUpdateHandle_t" },
                        { paramname: "pchPreviewFile", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "UpdatePublishedFileTitle",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_UpdatePublishedFileTitle",
                    params: [
                        { paramname: "updateHandle", paramtype: "PublishedFileUpdateHandle_t" },
                        { paramname: "pchTitle", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "UpdatePublishedFileDescription",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_UpdatePublishedFileDescription",
                    params: [
                        { paramname: "updateHandle", paramtype: "PublishedFileUpdateHandle_t" },
                        { paramname: "pchDescription", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "UpdatePublishedFileVisibility",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_UpdatePublishedFileVisibility",
                    params: [
                        { paramname: "updateHandle", paramtype: "PublishedFileUpdateHandle_t" },
                        { paramname: "eVisibility", paramtype: "ERemoteStoragePublishedFileVisibility" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "UpdatePublishedFileTags",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_UpdatePublishedFileTags",
                    params: [
                        { paramname: "updateHandle", paramtype: "PublishedFileUpdateHandle_t" },
                        { paramname: "pTags", paramtype: "SteamParamStringArray_t *" },
                    ],
                    returntype: "bool"
                },
                {
                    callresult: "RemoteStorageUpdatePublishedFileResult_t",
                    methodname: "CommitPublishedFileUpdate",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_CommitPublishedFileUpdate",
                    params: [{ paramname: "updateHandle", paramtype: "PublishedFileUpdateHandle_t" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoteStorageGetPublishedFileDetailsResult_t",
                    methodname: "GetPublishedFileDetails",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_GetPublishedFileDetails",
                    params: [
                        { paramname: "unPublishedFileId", paramtype: "PublishedFileId_t" },
                        { paramname: "unMaxSecondsOld", paramtype: "uint32" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoteStorageDeletePublishedFileResult_t",
                    methodname: "DeletePublishedFile",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_DeletePublishedFile",
                    params: [{ paramname: "unPublishedFileId", paramtype: "PublishedFileId_t" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoteStorageEnumerateUserPublishedFilesResult_t",
                    methodname: "EnumerateUserPublishedFiles",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_EnumerateUserPublishedFiles",
                    params: [{ paramname: "unStartIndex", paramtype: "uint32" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoteStorageSubscribePublishedFileResult_t",
                    methodname: "SubscribePublishedFile",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_SubscribePublishedFile",
                    params: [{ paramname: "unPublishedFileId", paramtype: "PublishedFileId_t" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoteStorageEnumerateUserSubscribedFilesResult_t",
                    methodname: "EnumerateUserSubscribedFiles",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_EnumerateUserSubscribedFiles",
                    params: [{ paramname: "unStartIndex", paramtype: "uint32" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoteStorageUnsubscribePublishedFileResult_t",
                    methodname: "UnsubscribePublishedFile",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_UnsubscribePublishedFile",
                    params: [{ paramname: "unPublishedFileId", paramtype: "PublishedFileId_t" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "UpdatePublishedFileSetChangeDescription",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_UpdatePublishedFileSetChangeDescription",
                    params: [
                        { paramname: "updateHandle", paramtype: "PublishedFileUpdateHandle_t" },
                        { paramname: "pchChangeDescription", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    callresult: "RemoteStorageGetPublishedItemVoteDetailsResult_t",
                    methodname: "GetPublishedItemVoteDetails",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_GetPublishedItemVoteDetails",
                    params: [{ paramname: "unPublishedFileId", paramtype: "PublishedFileId_t" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoteStorageUpdateUserPublishedItemVoteResult_t",
                    methodname: "UpdateUserPublishedItemVote",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_UpdateUserPublishedItemVote",
                    params: [
                        { paramname: "unPublishedFileId", paramtype: "PublishedFileId_t" },
                        { paramname: "bVoteUp", paramtype: "bool" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoteStorageGetPublishedItemVoteDetailsResult_t",
                    methodname: "GetUserPublishedItemVoteDetails",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_GetUserPublishedItemVoteDetails",
                    params: [{ paramname: "unPublishedFileId", paramtype: "PublishedFileId_t" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoteStorageEnumerateUserPublishedFilesResult_t",
                    methodname: "EnumerateUserSharedWorkshopFiles",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_EnumerateUserSharedWorkshopFiles",
                    params: [
                        { paramname: "steamId", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "unStartIndex", paramtype: "uint32" },
                        { paramname: "pRequiredTags", paramtype: "SteamParamStringArray_t *" },
                        { paramname: "pExcludedTags", paramtype: "SteamParamStringArray_t *" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoteStoragePublishFileProgress_t",
                    methodname: "PublishVideo",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_PublishVideo",
                    params: [
                        { paramname: "eVideoProvider", paramtype: "EWorkshopVideoProvider" },
                        { paramname: "pchVideoAccount", paramtype: "const char *" },
                        { paramname: "pchVideoIdentifier", paramtype: "const char *" },
                        { paramname: "pchPreviewFile", paramtype: "const char *" },
                        { paramname: "nConsumerAppId", paramtype: "AppId_t" },
                        { paramname: "pchTitle", paramtype: "const char *" },
                        { paramname: "pchDescription", paramtype: "const char *" },
                        { paramname: "eVisibility", paramtype: "ERemoteStoragePublishedFileVisibility" },
                        { paramname: "pTags", paramtype: "SteamParamStringArray_t *" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoteStorageSetUserPublishedFileActionResult_t",
                    methodname: "SetUserPublishedFileAction",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_SetUserPublishedFileAction",
                    params: [
                        { paramname: "unPublishedFileId", paramtype: "PublishedFileId_t" },
                        { paramname: "eAction", paramtype: "EWorkshopFileAction" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoteStorageEnumeratePublishedFilesByUserActionResult_t",
                    methodname: "EnumeratePublishedFilesByUserAction",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_EnumeratePublishedFilesByUserAction",
                    params: [
                        { paramname: "eAction", paramtype: "EWorkshopFileAction" },
                        { paramname: "unStartIndex", paramtype: "uint32" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoteStorageEnumerateWorkshopFilesResult_t",
                    methodname: "EnumeratePublishedWorkshopFiles",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_EnumeratePublishedWorkshopFiles",
                    params: [
                        { paramname: "eEnumerationType", paramtype: "EWorkshopEnumerationType" },
                        { paramname: "unStartIndex", paramtype: "uint32" },
                        { paramname: "unCount", paramtype: "uint32" },
                        { paramname: "unDays", paramtype: "uint32" },
                        { paramname: "pTags", paramtype: "SteamParamStringArray_t *" },
                        { paramname: "pUserTags", paramtype: "SteamParamStringArray_t *" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoteStorageDownloadUGCResult_t",
                    methodname: "UGCDownloadToLocation",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_UGCDownloadToLocation",
                    params: [
                        { paramname: "hContent", paramtype: "UGCHandle_t" },
                        { paramname: "pchLocation", paramtype: "const char *" },
                        { paramname: "unPriority", paramtype: "uint32" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetLocalFileChangeCount",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_GetLocalFileChangeCount",
                    params: [],
                    returntype: "int32"
                },
                {
                    methodname: "GetLocalFileChange",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_GetLocalFileChange",
                    params: [
                        { paramname: "iFile", paramtype: "int" },
                        { paramname: "pEChangeType", paramtype: "ERemoteStorageLocalFileChange *" },
                        { paramname: "pEFilePathType", paramtype: "ERemoteStorageFilePathType *" },
                    ],
                    returntype: "const char *"
                },
                {
                    methodname: "BeginFileWriteBatch",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_BeginFileWriteBatch",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "EndFileWriteBatch",
                    methodname_flat: "SteamAPI_ISteamRemoteStorage_EndFileWriteBatch",
                    params: [],
                    returntype: "bool"
                },
            ],
            version_string: "STEAMREMOTESTORAGE_INTERFACE_VERSION016"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamUserStats",
                    name_flat: "SteamAPI_SteamUserStats_v012"
                },
            ],
            classname: "ISteamUserStats",
            fields: [],
            methods: [
                {
                    callback: "UserStatsReceived_t",
                    methodname: "RequestCurrentStats",
                    methodname_flat: "SteamAPI_ISteamUserStats_RequestCurrentStats",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "GetStat",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetStatInt32",
                    params: [
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "pData", paramtype: "int32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetStat",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetStatFloat",
                    params: [
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "pData", paramtype: "float *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetStat",
                    methodname_flat: "SteamAPI_ISteamUserStats_SetStatInt32",
                    params: [
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "nData", paramtype: "int32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetStat",
                    methodname_flat: "SteamAPI_ISteamUserStats_SetStatFloat",
                    params: [
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "fData", paramtype: "float" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "UpdateAvgRateStat",
                    methodname_flat: "SteamAPI_ISteamUserStats_UpdateAvgRateStat",
                    params: [
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "flCountThisSession", paramtype: "float" },
                        { paramname: "dSessionLength", paramtype: "double" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetAchievement",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetAchievement",
                    params: [
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "pbAchieved", paramtype: "bool *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetAchievement",
                    methodname_flat: "SteamAPI_ISteamUserStats_SetAchievement",
                    params: [{ paramname: "pchName", paramtype: "const char *" }],
                    returntype: "bool"
                },
                {
                    methodname: "ClearAchievement",
                    methodname_flat: "SteamAPI_ISteamUserStats_ClearAchievement",
                    params: [{ paramname: "pchName", paramtype: "const char *" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetAchievementAndUnlockTime",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetAchievementAndUnlockTime",
                    params: [
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "pbAchieved", paramtype: "bool *" },
                        { paramname: "punUnlockTime", paramtype: "uint32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "StoreStats",
                    methodname_flat: "SteamAPI_ISteamUserStats_StoreStats",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "GetAchievementIcon",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetAchievementIcon",
                    params: [{ paramname: "pchName", paramtype: "const char *" }],
                    returntype: "int"
                },
                {
                    methodname: "GetAchievementDisplayAttribute",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetAchievementDisplayAttribute",
                    params: [
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "pchKey", paramtype: "const char *" },
                    ],
                    returntype: "const char *"
                },
                {
                    methodname: "IndicateAchievementProgress",
                    methodname_flat: "SteamAPI_ISteamUserStats_IndicateAchievementProgress",
                    params: [
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "nCurProgress", paramtype: "uint32" },
                        { paramname: "nMaxProgress", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetNumAchievements",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetNumAchievements",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "GetAchievementName",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetAchievementName",
                    params: [{ paramname: "iAchievement", paramtype: "uint32" }],
                    returntype: "const char *"
                },
                {
                    callresult: "UserStatsReceived_t",
                    methodname: "RequestUserStats",
                    methodname_flat: "SteamAPI_ISteamUserStats_RequestUserStats",
                    params: [{ paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetUserStat",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetUserStatInt32",
                    params: [
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "pData", paramtype: "int32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetUserStat",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetUserStatFloat",
                    params: [
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "pData", paramtype: "float *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetUserAchievement",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetUserAchievement",
                    params: [
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "pbAchieved", paramtype: "bool *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetUserAchievementAndUnlockTime",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetUserAchievementAndUnlockTime",
                    params: [
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "pbAchieved", paramtype: "bool *" },
                        { paramname: "punUnlockTime", paramtype: "uint32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "ResetAllStats",
                    methodname_flat: "SteamAPI_ISteamUserStats_ResetAllStats",
                    params: [{ paramname: "bAchievementsToo", paramtype: "bool" }],
                    returntype: "bool"
                },
                {
                    callresult: "LeaderboardFindResult_t",
                    methodname: "FindOrCreateLeaderboard",
                    methodname_flat: "SteamAPI_ISteamUserStats_FindOrCreateLeaderboard",
                    params: [
                        { paramname: "pchLeaderboardName", paramtype: "const char *" },
                        { paramname: "eLeaderboardSortMethod", paramtype: "ELeaderboardSortMethod" },
                        { paramname: "eLeaderboardDisplayType", paramtype: "ELeaderboardDisplayType" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "LeaderboardFindResult_t",
                    methodname: "FindLeaderboard",
                    methodname_flat: "SteamAPI_ISteamUserStats_FindLeaderboard",
                    params: [{ paramname: "pchLeaderboardName", paramtype: "const char *" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetLeaderboardName",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetLeaderboardName",
                    params: [{ paramname: "hSteamLeaderboard", paramtype: "SteamLeaderboard_t" }],
                    returntype: "const char *"
                },
                {
                    methodname: "GetLeaderboardEntryCount",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetLeaderboardEntryCount",
                    params: [{ paramname: "hSteamLeaderboard", paramtype: "SteamLeaderboard_t" }],
                    returntype: "int"
                },
                {
                    methodname: "GetLeaderboardSortMethod",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetLeaderboardSortMethod",
                    params: [{ paramname: "hSteamLeaderboard", paramtype: "SteamLeaderboard_t" }],
                    returntype: "ELeaderboardSortMethod"
                },
                {
                    methodname: "GetLeaderboardDisplayType",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetLeaderboardDisplayType",
                    params: [{ paramname: "hSteamLeaderboard", paramtype: "SteamLeaderboard_t" }],
                    returntype: "ELeaderboardDisplayType"
                },
                {
                    callresult: "LeaderboardScoresDownloaded_t",
                    methodname: "DownloadLeaderboardEntries",
                    methodname_flat: "SteamAPI_ISteamUserStats_DownloadLeaderboardEntries",
                    params: [
                        { paramname: "hSteamLeaderboard", paramtype: "SteamLeaderboard_t" },
                        { paramname: "eLeaderboardDataRequest", paramtype: "ELeaderboardDataRequest" },
                        { paramname: "nRangeStart", paramtype: "int" },
                        { paramname: "nRangeEnd", paramtype: "int" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "LeaderboardScoresDownloaded_t",
                    methodname: "DownloadLeaderboardEntriesForUsers",
                    methodname_flat: "SteamAPI_ISteamUserStats_DownloadLeaderboardEntriesForUsers",
                    params: [
                        { paramname: "hSteamLeaderboard", paramtype: "SteamLeaderboard_t" },
                        {
                            array_count: "cUsers",
                            desc: "Array of users to retrieve",
                            paramname: "prgUsers",
                            paramtype: "CSteamID *"
                        },
                        { paramname: "cUsers", paramtype: "int" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetDownloadedLeaderboardEntry",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetDownloadedLeaderboardEntry",
                    params: [
                        { paramname: "hSteamLeaderboardEntries", paramtype: "SteamLeaderboardEntries_t" },
                        { paramname: "index", paramtype: "int" },
                        { paramname: "pLeaderboardEntry", paramtype: "LeaderboardEntry_t *" },
                        { paramname: "pDetails", paramtype: "int32 *" },
                        { paramname: "cDetailsMax", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
                {
                    callresult: "LeaderboardScoreUploaded_t",
                    methodname: "UploadLeaderboardScore",
                    methodname_flat: "SteamAPI_ISteamUserStats_UploadLeaderboardScore",
                    params: [
                        { paramname: "hSteamLeaderboard", paramtype: "SteamLeaderboard_t" },
                        { paramname: "eLeaderboardUploadScoreMethod", paramtype: "ELeaderboardUploadScoreMethod" },
                        { paramname: "nScore", paramtype: "int32" },
                        { paramname: "pScoreDetails", paramtype: "const int32 *" },
                        { paramname: "cScoreDetailsCount", paramtype: "int" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "LeaderboardUGCSet_t",
                    methodname: "AttachLeaderboardUGC",
                    methodname_flat: "SteamAPI_ISteamUserStats_AttachLeaderboardUGC",
                    params: [
                        { paramname: "hSteamLeaderboard", paramtype: "SteamLeaderboard_t" },
                        { paramname: "hUGC", paramtype: "UGCHandle_t" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "NumberOfCurrentPlayers_t",
                    methodname: "GetNumberOfCurrentPlayers",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetNumberOfCurrentPlayers",
                    params: [],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "GlobalAchievementPercentagesReady_t",
                    methodname: "RequestGlobalAchievementPercentages",
                    methodname_flat: "SteamAPI_ISteamUserStats_RequestGlobalAchievementPercentages",
                    params: [],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetMostAchievedAchievementInfo",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetMostAchievedAchievementInfo",
                    params: [
                        { paramname: "pchName", paramtype: "char *" },
                        { paramname: "unNameBufLen", paramtype: "uint32" },
                        { paramname: "pflPercent", paramtype: "float *" },
                        { paramname: "pbAchieved", paramtype: "bool *" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "GetNextMostAchievedAchievementInfo",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetNextMostAchievedAchievementInfo",
                    params: [
                        { paramname: "iIteratorPrevious", paramtype: "int" },
                        { paramname: "pchName", paramtype: "char *" },
                        { paramname: "unNameBufLen", paramtype: "uint32" },
                        { paramname: "pflPercent", paramtype: "float *" },
                        { paramname: "pbAchieved", paramtype: "bool *" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "GetAchievementAchievedPercent",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetAchievementAchievedPercent",
                    params: [
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "pflPercent", paramtype: "float *" },
                    ],
                    returntype: "bool"
                },
                {
                    callresult: "GlobalStatsReceived_t",
                    methodname: "RequestGlobalStats",
                    methodname_flat: "SteamAPI_ISteamUserStats_RequestGlobalStats",
                    params: [{ paramname: "nHistoryDays", paramtype: "int" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetGlobalStat",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetGlobalStatInt64",
                    params: [
                        { paramname: "pchStatName", paramtype: "const char *" },
                        { paramname: "pData", paramtype: "int64 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetGlobalStat",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetGlobalStatDouble",
                    params: [
                        { paramname: "pchStatName", paramtype: "const char *" },
                        { paramname: "pData", paramtype: "double *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetGlobalStatHistory",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetGlobalStatHistoryInt64",
                    params: [
                        { paramname: "pchStatName", paramtype: "const char *" },
                        {
                            array_count: "cubData",
                            paramname: "pData",
                            paramtype: "int64 *"
                        },
                        { paramname: "cubData", paramtype: "uint32" },
                    ],
                    returntype: "int32"
                },
                {
                    methodname: "GetGlobalStatHistory",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetGlobalStatHistoryDouble",
                    params: [
                        { paramname: "pchStatName", paramtype: "const char *" },
                        {
                            array_count: "cubData",
                            paramname: "pData",
                            paramtype: "double *"
                        },
                        { paramname: "cubData", paramtype: "uint32" },
                    ],
                    returntype: "int32"
                },
                {
                    methodname: "GetAchievementProgressLimits",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetAchievementProgressLimitsInt32",
                    params: [
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "pnMinProgress", paramtype: "int32 *" },
                        { paramname: "pnMaxProgress", paramtype: "int32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetAchievementProgressLimits",
                    methodname_flat: "SteamAPI_ISteamUserStats_GetAchievementProgressLimitsFloat",
                    params: [
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "pfMinProgress", paramtype: "float *" },
                        { paramname: "pfMaxProgress", paramtype: "float *" },
                    ],
                    returntype: "bool"
                },
            ],
            version_string: "STEAMUSERSTATS_INTERFACE_VERSION012"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamApps",
                    name_flat: "SteamAPI_SteamApps_v008"
                },
            ],
            classname: "ISteamApps",
            fields: [],
            methods: [
                {
                    methodname: "BIsSubscribed",
                    methodname_flat: "SteamAPI_ISteamApps_BIsSubscribed",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "BIsLowViolence",
                    methodname_flat: "SteamAPI_ISteamApps_BIsLowViolence",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "BIsCybercafe",
                    methodname_flat: "SteamAPI_ISteamApps_BIsCybercafe",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "BIsVACBanned",
                    methodname_flat: "SteamAPI_ISteamApps_BIsVACBanned",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "GetCurrentGameLanguage",
                    methodname_flat: "SteamAPI_ISteamApps_GetCurrentGameLanguage",
                    params: [],
                    returntype: "const char *"
                },
                {
                    methodname: "GetAvailableGameLanguages",
                    methodname_flat: "SteamAPI_ISteamApps_GetAvailableGameLanguages",
                    params: [],
                    returntype: "const char *"
                },
                {
                    methodname: "BIsSubscribedApp",
                    methodname_flat: "SteamAPI_ISteamApps_BIsSubscribedApp",
                    params: [{ paramname: "appID", paramtype: "AppId_t" }],
                    returntype: "bool"
                },
                {
                    methodname: "BIsDlcInstalled",
                    methodname_flat: "SteamAPI_ISteamApps_BIsDlcInstalled",
                    params: [{ paramname: "appID", paramtype: "AppId_t" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetEarliestPurchaseUnixTime",
                    methodname_flat: "SteamAPI_ISteamApps_GetEarliestPurchaseUnixTime",
                    params: [{ paramname: "nAppID", paramtype: "AppId_t" }],
                    returntype: "uint32"
                },
                {
                    methodname: "BIsSubscribedFromFreeWeekend",
                    methodname_flat: "SteamAPI_ISteamApps_BIsSubscribedFromFreeWeekend",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "GetDLCCount",
                    methodname_flat: "SteamAPI_ISteamApps_GetDLCCount",
                    params: [],
                    returntype: "int"
                },
                {
                    methodname: "BGetDLCDataByIndex",
                    methodname_flat: "SteamAPI_ISteamApps_BGetDLCDataByIndex",
                    params: [
                        { paramname: "iDLC", paramtype: "int" },
                        { paramname: "pAppID", paramtype: "AppId_t *" },
                        { paramname: "pbAvailable", paramtype: "bool *" },
                        { paramname: "pchName", paramtype: "char *" },
                        { paramname: "cchNameBufferSize", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "InstallDLC",
                    methodname_flat: "SteamAPI_ISteamApps_InstallDLC",
                    params: [{ paramname: "nAppID", paramtype: "AppId_t" }],
                    returntype: "void"
                },
                {
                    methodname: "UninstallDLC",
                    methodname_flat: "SteamAPI_ISteamApps_UninstallDLC",
                    params: [{ paramname: "nAppID", paramtype: "AppId_t" }],
                    returntype: "void"
                },
                {
                    methodname: "RequestAppProofOfPurchaseKey",
                    methodname_flat: "SteamAPI_ISteamApps_RequestAppProofOfPurchaseKey",
                    params: [{ paramname: "nAppID", paramtype: "AppId_t" }],
                    returntype: "void"
                },
                {
                    methodname: "GetCurrentBetaName",
                    methodname_flat: "SteamAPI_ISteamApps_GetCurrentBetaName",
                    params: [
                        { paramname: "pchName", paramtype: "char *" },
                        { paramname: "cchNameBufferSize", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "MarkContentCorrupt",
                    methodname_flat: "SteamAPI_ISteamApps_MarkContentCorrupt",
                    params: [{ paramname: "bMissingFilesOnly", paramtype: "bool" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetInstalledDepots",
                    methodname_flat: "SteamAPI_ISteamApps_GetInstalledDepots",
                    params: [
                        { paramname: "appID", paramtype: "AppId_t" },
                        { paramname: "pvecDepots", paramtype: "DepotId_t *" },
                        { paramname: "cMaxDepots", paramtype: "uint32" },
                    ],
                    returntype: "uint32"
                },
                {
                    methodname: "GetAppInstallDir",
                    methodname_flat: "SteamAPI_ISteamApps_GetAppInstallDir",
                    params: [
                        { paramname: "appID", paramtype: "AppId_t" },
                        { paramname: "pchFolder", paramtype: "char *" },
                        { paramname: "cchFolderBufferSize", paramtype: "uint32" },
                    ],
                    returntype: "uint32"
                },
                {
                    methodname: "BIsAppInstalled",
                    methodname_flat: "SteamAPI_ISteamApps_BIsAppInstalled",
                    params: [{ paramname: "appID", paramtype: "AppId_t" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetAppOwner",
                    methodname_flat: "SteamAPI_ISteamApps_GetAppOwner",
                    params: [],
                    returntype: "CSteamID",
                    returntype_flat: "uint64_steamid"
                },
                {
                    methodname: "GetLaunchQueryParam",
                    methodname_flat: "SteamAPI_ISteamApps_GetLaunchQueryParam",
                    params: [{ paramname: "pchKey", paramtype: "const char *" }],
                    returntype: "const char *"
                },
                {
                    methodname: "GetDlcDownloadProgress",
                    methodname_flat: "SteamAPI_ISteamApps_GetDlcDownloadProgress",
                    params: [
                        { paramname: "nAppID", paramtype: "AppId_t" },
                        { paramname: "punBytesDownloaded", paramtype: "uint64 *" },
                        { paramname: "punBytesTotal", paramtype: "uint64 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetAppBuildId",
                    methodname_flat: "SteamAPI_ISteamApps_GetAppBuildId",
                    params: [],
                    returntype: "int"
                },
                {
                    methodname: "RequestAllProofOfPurchaseKeys",
                    methodname_flat: "SteamAPI_ISteamApps_RequestAllProofOfPurchaseKeys",
                    params: [],
                    returntype: "void"
                },
                {
                    callresult: "FileDetailsResult_t",
                    methodname: "GetFileDetails",
                    methodname_flat: "SteamAPI_ISteamApps_GetFileDetails",
                    params: [{ paramname: "pszFileName", paramtype: "const char *" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetLaunchCommandLine",
                    methodname_flat: "SteamAPI_ISteamApps_GetLaunchCommandLine",
                    params: [
                        { paramname: "pszCommandLine", paramtype: "char *" },
                        { paramname: "cubCommandLine", paramtype: "int" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "BIsSubscribedFromFamilySharing",
                    methodname_flat: "SteamAPI_ISteamApps_BIsSubscribedFromFamilySharing",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "BIsTimedTrial",
                    methodname_flat: "SteamAPI_ISteamApps_BIsTimedTrial",
                    params: [
                        { paramname: "punSecondsAllowed", paramtype: "uint32 *" },
                        { paramname: "punSecondsPlayed", paramtype: "uint32 *" },
                    ],
                    returntype: "bool"
                },
            ],
            version_string: "STEAMAPPS_INTERFACE_VERSION008"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamNetworking",
                    name_flat: "SteamAPI_SteamNetworking_v006"
                },
                {
                    kind: "gameserver",
                    name: "SteamGameServerNetworking",
                    name_flat: "SteamAPI_SteamGameServerNetworking_v006"
                },
            ],
            classname: "ISteamNetworking",
            fields: [],
            methods: [
                {
                    methodname: "SendP2PPacket",
                    methodname_flat: "SteamAPI_ISteamNetworking_SendP2PPacket",
                    params: [
                        { paramname: "steamIDRemote", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pubData", paramtype: "const void *" },
                        { paramname: "cubData", paramtype: "uint32" },
                        { paramname: "eP2PSendType", paramtype: "EP2PSend" },
                        { paramname: "nChannel", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "IsP2PPacketAvailable",
                    methodname_flat: "SteamAPI_ISteamNetworking_IsP2PPacketAvailable",
                    params: [
                        { paramname: "pcubMsgSize", paramtype: "uint32 *" },
                        { paramname: "nChannel", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "ReadP2PPacket",
                    methodname_flat: "SteamAPI_ISteamNetworking_ReadP2PPacket",
                    params: [
                        { paramname: "pubDest", paramtype: "void *" },
                        { paramname: "cubDest", paramtype: "uint32" },
                        { paramname: "pcubMsgSize", paramtype: "uint32 *" },
                        { paramname: "psteamIDRemote", paramtype: "CSteamID *" },
                        { paramname: "nChannel", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "AcceptP2PSessionWithUser",
                    methodname_flat: "SteamAPI_ISteamNetworking_AcceptP2PSessionWithUser",
                    params: [{ paramname: "steamIDRemote", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "bool"
                },
                {
                    methodname: "CloseP2PSessionWithUser",
                    methodname_flat: "SteamAPI_ISteamNetworking_CloseP2PSessionWithUser",
                    params: [{ paramname: "steamIDRemote", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "bool"
                },
                {
                    methodname: "CloseP2PChannelWithUser",
                    methodname_flat: "SteamAPI_ISteamNetworking_CloseP2PChannelWithUser",
                    params: [
                        { paramname: "steamIDRemote", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "nChannel", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetP2PSessionState",
                    methodname_flat: "SteamAPI_ISteamNetworking_GetP2PSessionState",
                    params: [
                        { paramname: "steamIDRemote", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pConnectionState", paramtype: "P2PSessionState_t *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "AllowP2PPacketRelay",
                    methodname_flat: "SteamAPI_ISteamNetworking_AllowP2PPacketRelay",
                    params: [{ paramname: "bAllow", paramtype: "bool" }],
                    returntype: "bool"
                },
                {
                    methodname: "CreateListenSocket",
                    methodname_flat: "SteamAPI_ISteamNetworking_CreateListenSocket",
                    params: [
                        { paramname: "nVirtualP2PPort", paramtype: "int" },
                        { paramname: "nIP", paramtype: "SteamIPAddress_t" },
                        { paramname: "nPort", paramtype: "uint16" },
                        { paramname: "bAllowUseOfPacketRelay", paramtype: "bool" },
                    ],
                    returntype: "SNetListenSocket_t"
                },
                {
                    methodname: "CreateP2PConnectionSocket",
                    methodname_flat: "SteamAPI_ISteamNetworking_CreateP2PConnectionSocket",
                    params: [
                        { paramname: "steamIDTarget", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "nVirtualPort", paramtype: "int" },
                        { paramname: "nTimeoutSec", paramtype: "int" },
                        { paramname: "bAllowUseOfPacketRelay", paramtype: "bool" },
                    ],
                    returntype: "SNetSocket_t"
                },
                {
                    methodname: "CreateConnectionSocket",
                    methodname_flat: "SteamAPI_ISteamNetworking_CreateConnectionSocket",
                    params: [
                        { paramname: "nIP", paramtype: "SteamIPAddress_t" },
                        { paramname: "nPort", paramtype: "uint16" },
                        { paramname: "nTimeoutSec", paramtype: "int" },
                    ],
                    returntype: "SNetSocket_t"
                },
                {
                    methodname: "DestroySocket",
                    methodname_flat: "SteamAPI_ISteamNetworking_DestroySocket",
                    params: [
                        { paramname: "hSocket", paramtype: "SNetSocket_t" },
                        { paramname: "bNotifyRemoteEnd", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "DestroyListenSocket",
                    methodname_flat: "SteamAPI_ISteamNetworking_DestroyListenSocket",
                    params: [
                        { paramname: "hSocket", paramtype: "SNetListenSocket_t" },
                        { paramname: "bNotifyRemoteEnd", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SendDataOnSocket",
                    methodname_flat: "SteamAPI_ISteamNetworking_SendDataOnSocket",
                    params: [
                        { paramname: "hSocket", paramtype: "SNetSocket_t" },
                        { paramname: "pubData", paramtype: "void *" },
                        { paramname: "cubData", paramtype: "uint32" },
                        { paramname: "bReliable", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "IsDataAvailableOnSocket",
                    methodname_flat: "SteamAPI_ISteamNetworking_IsDataAvailableOnSocket",
                    params: [
                        { paramname: "hSocket", paramtype: "SNetSocket_t" },
                        { paramname: "pcubMsgSize", paramtype: "uint32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "RetrieveDataFromSocket",
                    methodname_flat: "SteamAPI_ISteamNetworking_RetrieveDataFromSocket",
                    params: [
                        { paramname: "hSocket", paramtype: "SNetSocket_t" },
                        { paramname: "pubDest", paramtype: "void *" },
                        { paramname: "cubDest", paramtype: "uint32" },
                        { paramname: "pcubMsgSize", paramtype: "uint32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "IsDataAvailable",
                    methodname_flat: "SteamAPI_ISteamNetworking_IsDataAvailable",
                    params: [
                        { paramname: "hListenSocket", paramtype: "SNetListenSocket_t" },
                        { paramname: "pcubMsgSize", paramtype: "uint32 *" },
                        { paramname: "phSocket", paramtype: "SNetSocket_t *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "RetrieveData",
                    methodname_flat: "SteamAPI_ISteamNetworking_RetrieveData",
                    params: [
                        { paramname: "hListenSocket", paramtype: "SNetListenSocket_t" },
                        { paramname: "pubDest", paramtype: "void *" },
                        { paramname: "cubDest", paramtype: "uint32" },
                        { paramname: "pcubMsgSize", paramtype: "uint32 *" },
                        { paramname: "phSocket", paramtype: "SNetSocket_t *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetSocketInfo",
                    methodname_flat: "SteamAPI_ISteamNetworking_GetSocketInfo",
                    params: [
                        { paramname: "hSocket", paramtype: "SNetSocket_t" },
                        { paramname: "pSteamIDRemote", paramtype: "CSteamID *" },
                        { paramname: "peSocketStatus", paramtype: "int *" },
                        { paramname: "punIPRemote", paramtype: "SteamIPAddress_t *" },
                        { paramname: "punPortRemote", paramtype: "uint16 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetListenSocketInfo",
                    methodname_flat: "SteamAPI_ISteamNetworking_GetListenSocketInfo",
                    params: [
                        { paramname: "hListenSocket", paramtype: "SNetListenSocket_t" },
                        { paramname: "pnIP", paramtype: "SteamIPAddress_t *" },
                        { paramname: "pnPort", paramtype: "uint16 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetSocketConnectionType",
                    methodname_flat: "SteamAPI_ISteamNetworking_GetSocketConnectionType",
                    params: [{ paramname: "hSocket", paramtype: "SNetSocket_t" }],
                    returntype: "ESNetSocketConnectionType"
                },
                {
                    methodname: "GetMaxPacketSize",
                    methodname_flat: "SteamAPI_ISteamNetworking_GetMaxPacketSize",
                    params: [{ paramname: "hSocket", paramtype: "SNetSocket_t" }],
                    returntype: "int"
                },
            ],
            version_string: "SteamNetworking006"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamScreenshots",
                    name_flat: "SteamAPI_SteamScreenshots_v003"
                },
            ],
            classname: "ISteamScreenshots",
            fields: [],
            methods: [
                {
                    methodname: "WriteScreenshot",
                    methodname_flat: "SteamAPI_ISteamScreenshots_WriteScreenshot",
                    params: [
                        { paramname: "pubRGB", paramtype: "void *" },
                        { paramname: "cubRGB", paramtype: "uint32" },
                        { paramname: "nWidth", paramtype: "int" },
                        { paramname: "nHeight", paramtype: "int" },
                    ],
                    returntype: "ScreenshotHandle"
                },
                {
                    methodname: "AddScreenshotToLibrary",
                    methodname_flat: "SteamAPI_ISteamScreenshots_AddScreenshotToLibrary",
                    params: [
                        { paramname: "pchFilename", paramtype: "const char *" },
                        { paramname: "pchThumbnailFilename", paramtype: "const char *" },
                        { paramname: "nWidth", paramtype: "int" },
                        { paramname: "nHeight", paramtype: "int" },
                    ],
                    returntype: "ScreenshotHandle"
                },
                {
                    methodname: "TriggerScreenshot",
                    methodname_flat: "SteamAPI_ISteamScreenshots_TriggerScreenshot",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "HookScreenshots",
                    methodname_flat: "SteamAPI_ISteamScreenshots_HookScreenshots",
                    params: [{ paramname: "bHook", paramtype: "bool" }],
                    returntype: "void"
                },
                {
                    methodname: "SetLocation",
                    methodname_flat: "SteamAPI_ISteamScreenshots_SetLocation",
                    params: [
                        { paramname: "hScreenshot", paramtype: "ScreenshotHandle" },
                        { paramname: "pchLocation", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "TagUser",
                    methodname_flat: "SteamAPI_ISteamScreenshots_TagUser",
                    params: [
                        { paramname: "hScreenshot", paramtype: "ScreenshotHandle" },
                        { paramname: "steamID", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "TagPublishedFile",
                    methodname_flat: "SteamAPI_ISteamScreenshots_TagPublishedFile",
                    params: [
                        { paramname: "hScreenshot", paramtype: "ScreenshotHandle" },
                        { paramname: "unPublishedFileID", paramtype: "PublishedFileId_t" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "IsScreenshotsHooked",
                    methodname_flat: "SteamAPI_ISteamScreenshots_IsScreenshotsHooked",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "AddVRScreenshotToLibrary",
                    methodname_flat: "SteamAPI_ISteamScreenshots_AddVRScreenshotToLibrary",
                    params: [
                        { paramname: "eType", paramtype: "EVRScreenshotType" },
                        { paramname: "pchFilename", paramtype: "const char *" },
                        { paramname: "pchVRFilename", paramtype: "const char *" },
                    ],
                    returntype: "ScreenshotHandle"
                },
            ],
            version_string: "STEAMSCREENSHOTS_INTERFACE_VERSION003"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamMusic",
                    name_flat: "SteamAPI_SteamMusic_v001"
                },
            ],
            classname: "ISteamMusic",
            fields: [],
            methods: [
                {
                    methodname: "BIsEnabled",
                    methodname_flat: "SteamAPI_ISteamMusic_BIsEnabled",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "BIsPlaying",
                    methodname_flat: "SteamAPI_ISteamMusic_BIsPlaying",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "GetPlaybackStatus",
                    methodname_flat: "SteamAPI_ISteamMusic_GetPlaybackStatus",
                    params: [],
                    returntype: "AudioPlayback_Status"
                },
                {
                    methodname: "Play",
                    methodname_flat: "SteamAPI_ISteamMusic_Play",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "Pause",
                    methodname_flat: "SteamAPI_ISteamMusic_Pause",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "PlayPrevious",
                    methodname_flat: "SteamAPI_ISteamMusic_PlayPrevious",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "PlayNext",
                    methodname_flat: "SteamAPI_ISteamMusic_PlayNext",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "SetVolume",
                    methodname_flat: "SteamAPI_ISteamMusic_SetVolume",
                    params: [{ paramname: "flVolume", paramtype: "float" }],
                    returntype: "void"
                },
                {
                    methodname: "GetVolume",
                    methodname_flat: "SteamAPI_ISteamMusic_GetVolume",
                    params: [],
                    returntype: "float"
                },
            ],
            version_string: "STEAMMUSIC_INTERFACE_VERSION001"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamMusicRemote",
                    name_flat: "SteamAPI_SteamMusicRemote_v001"
                },
            ],
            classname: "ISteamMusicRemote",
            fields: [],
            methods: [
                {
                    methodname: "RegisterSteamMusicRemote",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_RegisterSteamMusicRemote",
                    params: [{ paramname: "pchName", paramtype: "const char *" }],
                    returntype: "bool"
                },
                {
                    methodname: "DeregisterSteamMusicRemote",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_DeregisterSteamMusicRemote",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "BIsCurrentMusicRemote",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_BIsCurrentMusicRemote",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "BActivationSuccess",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_BActivationSuccess",
                    params: [{ paramname: "bValue", paramtype: "bool" }],
                    returntype: "bool"
                },
                {
                    methodname: "SetDisplayName",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_SetDisplayName",
                    params: [{ paramname: "pchDisplayName", paramtype: "const char *" }],
                    returntype: "bool"
                },
                {
                    methodname: "SetPNGIcon_64x64",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_SetPNGIcon_64x64",
                    params: [
                        { paramname: "pvBuffer", paramtype: "void *" },
                        { paramname: "cbBufferLength", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "EnablePlayPrevious",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_EnablePlayPrevious",
                    params: [{ paramname: "bValue", paramtype: "bool" }],
                    returntype: "bool"
                },
                {
                    methodname: "EnablePlayNext",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_EnablePlayNext",
                    params: [{ paramname: "bValue", paramtype: "bool" }],
                    returntype: "bool"
                },
                {
                    methodname: "EnableShuffled",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_EnableShuffled",
                    params: [{ paramname: "bValue", paramtype: "bool" }],
                    returntype: "bool"
                },
                {
                    methodname: "EnableLooped",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_EnableLooped",
                    params: [{ paramname: "bValue", paramtype: "bool" }],
                    returntype: "bool"
                },
                {
                    methodname: "EnableQueue",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_EnableQueue",
                    params: [{ paramname: "bValue", paramtype: "bool" }],
                    returntype: "bool"
                },
                {
                    methodname: "EnablePlaylists",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_EnablePlaylists",
                    params: [{ paramname: "bValue", paramtype: "bool" }],
                    returntype: "bool"
                },
                {
                    methodname: "UpdatePlaybackStatus",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_UpdatePlaybackStatus",
                    params: [{ paramname: "nStatus", paramtype: "AudioPlayback_Status" }],
                    returntype: "bool"
                },
                {
                    methodname: "UpdateShuffled",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_UpdateShuffled",
                    params: [{ paramname: "bValue", paramtype: "bool" }],
                    returntype: "bool"
                },
                {
                    methodname: "UpdateLooped",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_UpdateLooped",
                    params: [{ paramname: "bValue", paramtype: "bool" }],
                    returntype: "bool"
                },
                {
                    methodname: "UpdateVolume",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_UpdateVolume",
                    params: [{ paramname: "flValue", paramtype: "float" }],
                    returntype: "bool"
                },
                {
                    methodname: "CurrentEntryWillChange",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_CurrentEntryWillChange",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "CurrentEntryIsAvailable",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_CurrentEntryIsAvailable",
                    params: [{ paramname: "bAvailable", paramtype: "bool" }],
                    returntype: "bool"
                },
                {
                    methodname: "UpdateCurrentEntryText",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_UpdateCurrentEntryText",
                    params: [{ paramname: "pchText", paramtype: "const char *" }],
                    returntype: "bool"
                },
                {
                    methodname: "UpdateCurrentEntryElapsedSeconds",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_UpdateCurrentEntryElapsedSeconds",
                    params: [{ paramname: "nValue", paramtype: "int" }],
                    returntype: "bool"
                },
                {
                    methodname: "UpdateCurrentEntryCoverArt",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_UpdateCurrentEntryCoverArt",
                    params: [
                        { paramname: "pvBuffer", paramtype: "void *" },
                        { paramname: "cbBufferLength", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "CurrentEntryDidChange",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_CurrentEntryDidChange",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "QueueWillChange",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_QueueWillChange",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "ResetQueueEntries",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_ResetQueueEntries",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "SetQueueEntry",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_SetQueueEntry",
                    params: [
                        { paramname: "nID", paramtype: "int" },
                        { paramname: "nPosition", paramtype: "int" },
                        { paramname: "pchEntryText", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetCurrentQueueEntry",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_SetCurrentQueueEntry",
                    params: [{ paramname: "nID", paramtype: "int" }],
                    returntype: "bool"
                },
                {
                    methodname: "QueueDidChange",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_QueueDidChange",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "PlaylistWillChange",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_PlaylistWillChange",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "ResetPlaylistEntries",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_ResetPlaylistEntries",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "SetPlaylistEntry",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_SetPlaylistEntry",
                    params: [
                        { paramname: "nID", paramtype: "int" },
                        { paramname: "nPosition", paramtype: "int" },
                        { paramname: "pchEntryText", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetCurrentPlaylistEntry",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_SetCurrentPlaylistEntry",
                    params: [{ paramname: "nID", paramtype: "int" }],
                    returntype: "bool"
                },
                {
                    methodname: "PlaylistDidChange",
                    methodname_flat: "SteamAPI_ISteamMusicRemote_PlaylistDidChange",
                    params: [],
                    returntype: "bool"
                },
            ],
            version_string: "STEAMMUSICREMOTE_INTERFACE_VERSION001"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamHTTP",
                    name_flat: "SteamAPI_SteamHTTP_v003"
                },
                {
                    kind: "gameserver",
                    name: "SteamGameServerHTTP",
                    name_flat: "SteamAPI_SteamGameServerHTTP_v003"
                },
            ],
            classname: "ISteamHTTP",
            fields: [],
            methods: [
                {
                    methodname: "CreateHTTPRequest",
                    methodname_flat: "SteamAPI_ISteamHTTP_CreateHTTPRequest",
                    params: [
                        { paramname: "eHTTPRequestMethod", paramtype: "EHTTPMethod" },
                        { paramname: "pchAbsoluteURL", paramtype: "const char *" },
                    ],
                    returntype: "HTTPRequestHandle"
                },
                {
                    methodname: "SetHTTPRequestContextValue",
                    methodname_flat: "SteamAPI_ISteamHTTP_SetHTTPRequestContextValue",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "ulContextValue", paramtype: "uint64" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetHTTPRequestNetworkActivityTimeout",
                    methodname_flat: "SteamAPI_ISteamHTTP_SetHTTPRequestNetworkActivityTimeout",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "unTimeoutSeconds", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetHTTPRequestHeaderValue",
                    methodname_flat: "SteamAPI_ISteamHTTP_SetHTTPRequestHeaderValue",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "pchHeaderName", paramtype: "const char *" },
                        { paramname: "pchHeaderValue", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetHTTPRequestGetOrPostParameter",
                    methodname_flat: "SteamAPI_ISteamHTTP_SetHTTPRequestGetOrPostParameter",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "pchParamName", paramtype: "const char *" },
                        { paramname: "pchParamValue", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SendHTTPRequest",
                    methodname_flat: "SteamAPI_ISteamHTTP_SendHTTPRequest",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "pCallHandle", paramtype: "SteamAPICall_t *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SendHTTPRequestAndStreamResponse",
                    methodname_flat: "SteamAPI_ISteamHTTP_SendHTTPRequestAndStreamResponse",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "pCallHandle", paramtype: "SteamAPICall_t *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "DeferHTTPRequest",
                    methodname_flat: "SteamAPI_ISteamHTTP_DeferHTTPRequest",
                    params: [{ paramname: "hRequest", paramtype: "HTTPRequestHandle" }],
                    returntype: "bool"
                },
                {
                    methodname: "PrioritizeHTTPRequest",
                    methodname_flat: "SteamAPI_ISteamHTTP_PrioritizeHTTPRequest",
                    params: [{ paramname: "hRequest", paramtype: "HTTPRequestHandle" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetHTTPResponseHeaderSize",
                    methodname_flat: "SteamAPI_ISteamHTTP_GetHTTPResponseHeaderSize",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "pchHeaderName", paramtype: "const char *" },
                        { paramname: "unResponseHeaderSize", paramtype: "uint32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetHTTPResponseHeaderValue",
                    methodname_flat: "SteamAPI_ISteamHTTP_GetHTTPResponseHeaderValue",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "pchHeaderName", paramtype: "const char *" },
                        { paramname: "pHeaderValueBuffer", paramtype: "uint8 *" },
                        { paramname: "unBufferSize", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetHTTPResponseBodySize",
                    methodname_flat: "SteamAPI_ISteamHTTP_GetHTTPResponseBodySize",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "unBodySize", paramtype: "uint32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetHTTPResponseBodyData",
                    methodname_flat: "SteamAPI_ISteamHTTP_GetHTTPResponseBodyData",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "pBodyDataBuffer", paramtype: "uint8 *" },
                        { paramname: "unBufferSize", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetHTTPStreamingResponseBodyData",
                    methodname_flat: "SteamAPI_ISteamHTTP_GetHTTPStreamingResponseBodyData",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "cOffset", paramtype: "uint32" },
                        { paramname: "pBodyDataBuffer", paramtype: "uint8 *" },
                        { paramname: "unBufferSize", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "ReleaseHTTPRequest",
                    methodname_flat: "SteamAPI_ISteamHTTP_ReleaseHTTPRequest",
                    params: [{ paramname: "hRequest", paramtype: "HTTPRequestHandle" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetHTTPDownloadProgressPct",
                    methodname_flat: "SteamAPI_ISteamHTTP_GetHTTPDownloadProgressPct",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "pflPercentOut", paramtype: "float *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetHTTPRequestRawPostBody",
                    methodname_flat: "SteamAPI_ISteamHTTP_SetHTTPRequestRawPostBody",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "pchContentType", paramtype: "const char *" },
                        { paramname: "pubBody", paramtype: "uint8 *" },
                        { paramname: "unBodyLen", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "CreateCookieContainer",
                    methodname_flat: "SteamAPI_ISteamHTTP_CreateCookieContainer",
                    params: [{ paramname: "bAllowResponsesToModify", paramtype: "bool" }],
                    returntype: "HTTPCookieContainerHandle"
                },
                {
                    methodname: "ReleaseCookieContainer",
                    methodname_flat: "SteamAPI_ISteamHTTP_ReleaseCookieContainer",
                    params: [{ paramname: "hCookieContainer", paramtype: "HTTPCookieContainerHandle" }],
                    returntype: "bool"
                },
                {
                    methodname: "SetCookie",
                    methodname_flat: "SteamAPI_ISteamHTTP_SetCookie",
                    params: [
                        { paramname: "hCookieContainer", paramtype: "HTTPCookieContainerHandle" },
                        { paramname: "pchHost", paramtype: "const char *" },
                        { paramname: "pchUrl", paramtype: "const char *" },
                        { paramname: "pchCookie", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetHTTPRequestCookieContainer",
                    methodname_flat: "SteamAPI_ISteamHTTP_SetHTTPRequestCookieContainer",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "hCookieContainer", paramtype: "HTTPCookieContainerHandle" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetHTTPRequestUserAgentInfo",
                    methodname_flat: "SteamAPI_ISteamHTTP_SetHTTPRequestUserAgentInfo",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "pchUserAgentInfo", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetHTTPRequestRequiresVerifiedCertificate",
                    methodname_flat: "SteamAPI_ISteamHTTP_SetHTTPRequestRequiresVerifiedCertificate",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "bRequireVerifiedCertificate", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetHTTPRequestAbsoluteTimeoutMS",
                    methodname_flat: "SteamAPI_ISteamHTTP_SetHTTPRequestAbsoluteTimeoutMS",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "unMilliseconds", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetHTTPRequestWasTimedOut",
                    methodname_flat: "SteamAPI_ISteamHTTP_GetHTTPRequestWasTimedOut",
                    params: [
                        { paramname: "hRequest", paramtype: "HTTPRequestHandle" },
                        { paramname: "pbWasTimedOut", paramtype: "bool *" },
                    ],
                    returntype: "bool"
                },
            ],
            version_string: "STEAMHTTP_INTERFACE_VERSION003"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamInput",
                    name_flat: "SteamAPI_SteamInput_v006"
                },
            ],
            classname: "ISteamInput",
            fields: [],
            methods: [
                {
                    methodname: "Init",
                    methodname_flat: "SteamAPI_ISteamInput_Init",
                    params: [{ paramname: "bExplicitlyCallRunFrame", paramtype: "bool" }],
                    returntype: "bool"
                },
                {
                    methodname: "Shutdown",
                    methodname_flat: "SteamAPI_ISteamInput_Shutdown",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "SetInputActionManifestFilePath",
                    methodname_flat: "SteamAPI_ISteamInput_SetInputActionManifestFilePath",
                    params: [{ paramname: "pchInputActionManifestAbsolutePath", paramtype: "const char *" }],
                    returntype: "bool"
                },
                {
                    methodname: "RunFrame",
                    methodname_flat: "SteamAPI_ISteamInput_RunFrame",
                    params: [{ paramname: "bReservedValue", paramtype: "bool" }],
                    returntype: "void"
                },
                {
                    methodname: "BWaitForData",
                    methodname_flat: "SteamAPI_ISteamInput_BWaitForData",
                    params: [
                        { paramname: "bWaitForever", paramtype: "bool" },
                        { paramname: "unTimeout", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "BNewDataAvailable",
                    methodname_flat: "SteamAPI_ISteamInput_BNewDataAvailable",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "GetConnectedControllers",
                    methodname_flat: "SteamAPI_ISteamInput_GetConnectedControllers",
                    params: [
                        {
                            desc: "Receives list of connected controllers",
                            out_array_count: "STEAM_INPUT_MAX_COUNT",
                            paramname: "handlesOut",
                            paramtype: "InputHandle_t *"
                        },
                    ],
                    returntype: "int"
                },
                {
                    callback: "SteamInputConfigurationLoaded_t",
                    methodname: "EnableDeviceCallbacks",
                    methodname_flat: "SteamAPI_ISteamInput_EnableDeviceCallbacks",
                    params: [],
                    returntype: "void"
                },
                {
                    callback: "SteamInputDeviceDisconnected_t",
                    methodname: "EnableActionEventCallbacks",
                    methodname_flat: "SteamAPI_ISteamInput_EnableActionEventCallbacks",
                    params: [{ paramname: "pCallback", paramtype: "SteamInputActionEventCallbackPointer" }],
                    returntype: "void"
                },
                {
                    methodname: "GetActionSetHandle",
                    methodname_flat: "SteamAPI_ISteamInput_GetActionSetHandle",
                    params: [{ paramname: "pszActionSetName", paramtype: "const char *" }],
                    returntype: "InputActionSetHandle_t"
                },
                {
                    methodname: "ActivateActionSet",
                    methodname_flat: "SteamAPI_ISteamInput_ActivateActionSet",
                    params: [
                        { paramname: "inputHandle", paramtype: "InputHandle_t" },
                        { paramname: "actionSetHandle", paramtype: "InputActionSetHandle_t" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "GetCurrentActionSet",
                    methodname_flat: "SteamAPI_ISteamInput_GetCurrentActionSet",
                    params: [{ paramname: "inputHandle", paramtype: "InputHandle_t" }],
                    returntype: "InputActionSetHandle_t"
                },
                {
                    methodname: "ActivateActionSetLayer",
                    methodname_flat: "SteamAPI_ISteamInput_ActivateActionSetLayer",
                    params: [
                        { paramname: "inputHandle", paramtype: "InputHandle_t" },
                        { paramname: "actionSetLayerHandle", paramtype: "InputActionSetHandle_t" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "DeactivateActionSetLayer",
                    methodname_flat: "SteamAPI_ISteamInput_DeactivateActionSetLayer",
                    params: [
                        { paramname: "inputHandle", paramtype: "InputHandle_t" },
                        { paramname: "actionSetLayerHandle", paramtype: "InputActionSetHandle_t" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "DeactivateAllActionSetLayers",
                    methodname_flat: "SteamAPI_ISteamInput_DeactivateAllActionSetLayers",
                    params: [{ paramname: "inputHandle", paramtype: "InputHandle_t" }],
                    returntype: "void"
                },
                {
                    methodname: "GetActiveActionSetLayers",
                    methodname_flat: "SteamAPI_ISteamInput_GetActiveActionSetLayers",
                    params: [
                        { paramname: "inputHandle", paramtype: "InputHandle_t" },
                        {
                            desc: "Receives list of active layers",
                            out_array_count: "STEAM_INPUT_MAX_ACTIVE_LAYERS",
                            paramname: "handlesOut",
                            paramtype: "InputActionSetHandle_t *"
                        },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "GetDigitalActionHandle",
                    methodname_flat: "SteamAPI_ISteamInput_GetDigitalActionHandle",
                    params: [{ paramname: "pszActionName", paramtype: "const char *" }],
                    returntype: "InputDigitalActionHandle_t"
                },
                {
                    methodname: "GetDigitalActionData",
                    methodname_flat: "SteamAPI_ISteamInput_GetDigitalActionData",
                    params: [
                        { paramname: "inputHandle", paramtype: "InputHandle_t" },
                        { paramname: "digitalActionHandle", paramtype: "InputDigitalActionHandle_t" },
                    ],
                    returntype: "InputDigitalActionData_t"
                },
                {
                    methodname: "GetDigitalActionOrigins",
                    methodname_flat: "SteamAPI_ISteamInput_GetDigitalActionOrigins",
                    params: [
                        { paramname: "inputHandle", paramtype: "InputHandle_t" },
                        { paramname: "actionSetHandle", paramtype: "InputActionSetHandle_t" },
                        { paramname: "digitalActionHandle", paramtype: "InputDigitalActionHandle_t" },
                        {
                            desc: "Receives list of action origins",
                            out_array_count: "STEAM_INPUT_MAX_ORIGINS",
                            paramname: "originsOut",
                            paramtype: "EInputActionOrigin *"
                        },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "GetStringForDigitalActionName",
                    methodname_flat: "SteamAPI_ISteamInput_GetStringForDigitalActionName",
                    params: [{ paramname: "eActionHandle", paramtype: "InputDigitalActionHandle_t" }],
                    returntype: "const char *"
                },
                {
                    methodname: "GetAnalogActionHandle",
                    methodname_flat: "SteamAPI_ISteamInput_GetAnalogActionHandle",
                    params: [{ paramname: "pszActionName", paramtype: "const char *" }],
                    returntype: "InputAnalogActionHandle_t"
                },
                {
                    methodname: "GetAnalogActionData",
                    methodname_flat: "SteamAPI_ISteamInput_GetAnalogActionData",
                    params: [
                        { paramname: "inputHandle", paramtype: "InputHandle_t" },
                        { paramname: "analogActionHandle", paramtype: "InputAnalogActionHandle_t" },
                    ],
                    returntype: "InputAnalogActionData_t"
                },
                {
                    methodname: "GetAnalogActionOrigins",
                    methodname_flat: "SteamAPI_ISteamInput_GetAnalogActionOrigins",
                    params: [
                        { paramname: "inputHandle", paramtype: "InputHandle_t" },
                        { paramname: "actionSetHandle", paramtype: "InputActionSetHandle_t" },
                        { paramname: "analogActionHandle", paramtype: "InputAnalogActionHandle_t" },
                        {
                            desc: "Receives list of action origins",
                            out_array_count: "STEAM_INPUT_MAX_ORIGINS",
                            paramname: "originsOut",
                            paramtype: "EInputActionOrigin *"
                        },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "GetGlyphPNGForActionOrigin",
                    methodname_flat: "SteamAPI_ISteamInput_GetGlyphPNGForActionOrigin",
                    params: [
                        { paramname: "eOrigin", paramtype: "EInputActionOrigin" },
                        { paramname: "eSize", paramtype: "ESteamInputGlyphSize" },
                        { paramname: "unFlags", paramtype: "uint32" },
                    ],
                    returntype: "const char *"
                },
                {
                    methodname: "GetGlyphSVGForActionOrigin",
                    methodname_flat: "SteamAPI_ISteamInput_GetGlyphSVGForActionOrigin",
                    params: [
                        { paramname: "eOrigin", paramtype: "EInputActionOrigin" },
                        { paramname: "unFlags", paramtype: "uint32" },
                    ],
                    returntype: "const char *"
                },
                {
                    methodname: "GetGlyphForActionOrigin_Legacy",
                    methodname_flat: "SteamAPI_ISteamInput_GetGlyphForActionOrigin_Legacy",
                    params: [{ paramname: "eOrigin", paramtype: "EInputActionOrigin" }],
                    returntype: "const char *"
                },
                {
                    methodname: "GetStringForActionOrigin",
                    methodname_flat: "SteamAPI_ISteamInput_GetStringForActionOrigin",
                    params: [{ paramname: "eOrigin", paramtype: "EInputActionOrigin" }],
                    returntype: "const char *"
                },
                {
                    methodname: "GetStringForAnalogActionName",
                    methodname_flat: "SteamAPI_ISteamInput_GetStringForAnalogActionName",
                    params: [{ paramname: "eActionHandle", paramtype: "InputAnalogActionHandle_t" }],
                    returntype: "const char *"
                },
                {
                    methodname: "StopAnalogActionMomentum",
                    methodname_flat: "SteamAPI_ISteamInput_StopAnalogActionMomentum",
                    params: [
                        { paramname: "inputHandle", paramtype: "InputHandle_t" },
                        { paramname: "eAction", paramtype: "InputAnalogActionHandle_t" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "GetMotionData",
                    methodname_flat: "SteamAPI_ISteamInput_GetMotionData",
                    params: [{ paramname: "inputHandle", paramtype: "InputHandle_t" }],
                    returntype: "InputMotionData_t"
                },
                {
                    methodname: "TriggerVibration",
                    methodname_flat: "SteamAPI_ISteamInput_TriggerVibration",
                    params: [
                        { paramname: "inputHandle", paramtype: "InputHandle_t" },
                        { paramname: "usLeftSpeed", paramtype: "unsigned short" },
                        { paramname: "usRightSpeed", paramtype: "unsigned short" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "TriggerVibrationExtended",
                    methodname_flat: "SteamAPI_ISteamInput_TriggerVibrationExtended",
                    params: [
                        { paramname: "inputHandle", paramtype: "InputHandle_t" },
                        { paramname: "usLeftSpeed", paramtype: "unsigned short" },
                        { paramname: "usRightSpeed", paramtype: "unsigned short" },
                        { paramname: "usLeftTriggerSpeed", paramtype: "unsigned short" },
                        { paramname: "usRightTriggerSpeed", paramtype: "unsigned short" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "TriggerSimpleHapticEvent",
                    methodname_flat: "SteamAPI_ISteamInput_TriggerSimpleHapticEvent",
                    params: [
                        { paramname: "inputHandle", paramtype: "InputHandle_t" },
                        { paramname: "eHapticLocation", paramtype: "EControllerHapticLocation" },
                        { paramname: "nIntensity", paramtype: "uint8" },
                        { paramname: "nGainDB", paramtype: "char" },
                        { paramname: "nOtherIntensity", paramtype: "uint8" },
                        { paramname: "nOtherGainDB", paramtype: "char" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SetLEDColor",
                    methodname_flat: "SteamAPI_ISteamInput_SetLEDColor",
                    params: [
                        { paramname: "inputHandle", paramtype: "InputHandle_t" },
                        { paramname: "nColorR", paramtype: "uint8" },
                        { paramname: "nColorG", paramtype: "uint8" },
                        { paramname: "nColorB", paramtype: "uint8" },
                        { paramname: "nFlags", paramtype: "unsigned int" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "Legacy_TriggerHapticPulse",
                    methodname_flat: "SteamAPI_ISteamInput_Legacy_TriggerHapticPulse",
                    params: [
                        { paramname: "inputHandle", paramtype: "InputHandle_t" },
                        { paramname: "eTargetPad", paramtype: "ESteamControllerPad" },
                        { paramname: "usDurationMicroSec", paramtype: "unsigned short" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "Legacy_TriggerRepeatedHapticPulse",
                    methodname_flat: "SteamAPI_ISteamInput_Legacy_TriggerRepeatedHapticPulse",
                    params: [
                        { paramname: "inputHandle", paramtype: "InputHandle_t" },
                        { paramname: "eTargetPad", paramtype: "ESteamControllerPad" },
                        { paramname: "usDurationMicroSec", paramtype: "unsigned short" },
                        { paramname: "usOffMicroSec", paramtype: "unsigned short" },
                        { paramname: "unRepeat", paramtype: "unsigned short" },
                        { paramname: "nFlags", paramtype: "unsigned int" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "ShowBindingPanel",
                    methodname_flat: "SteamAPI_ISteamInput_ShowBindingPanel",
                    params: [{ paramname: "inputHandle", paramtype: "InputHandle_t" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetInputTypeForHandle",
                    methodname_flat: "SteamAPI_ISteamInput_GetInputTypeForHandle",
                    params: [{ paramname: "inputHandle", paramtype: "InputHandle_t" }],
                    returntype: "ESteamInputType"
                },
                {
                    methodname: "GetControllerForGamepadIndex",
                    methodname_flat: "SteamAPI_ISteamInput_GetControllerForGamepadIndex",
                    params: [{ paramname: "nIndex", paramtype: "int" }],
                    returntype: "InputHandle_t"
                },
                {
                    methodname: "GetGamepadIndexForController",
                    methodname_flat: "SteamAPI_ISteamInput_GetGamepadIndexForController",
                    params: [{ paramname: "ulinputHandle", paramtype: "InputHandle_t" }],
                    returntype: "int"
                },
                {
                    methodname: "GetStringForXboxOrigin",
                    methodname_flat: "SteamAPI_ISteamInput_GetStringForXboxOrigin",
                    params: [{ paramname: "eOrigin", paramtype: "EXboxOrigin" }],
                    returntype: "const char *"
                },
                {
                    methodname: "GetGlyphForXboxOrigin",
                    methodname_flat: "SteamAPI_ISteamInput_GetGlyphForXboxOrigin",
                    params: [{ paramname: "eOrigin", paramtype: "EXboxOrigin" }],
                    returntype: "const char *"
                },
                {
                    methodname: "GetActionOriginFromXboxOrigin",
                    methodname_flat: "SteamAPI_ISteamInput_GetActionOriginFromXboxOrigin",
                    params: [
                        { paramname: "inputHandle", paramtype: "InputHandle_t" },
                        { paramname: "eOrigin", paramtype: "EXboxOrigin" },
                    ],
                    returntype: "EInputActionOrigin"
                },
                {
                    methodname: "TranslateActionOrigin",
                    methodname_flat: "SteamAPI_ISteamInput_TranslateActionOrigin",
                    params: [
                        { paramname: "eDestinationInputType", paramtype: "ESteamInputType" },
                        { paramname: "eSourceOrigin", paramtype: "EInputActionOrigin" },
                    ],
                    returntype: "EInputActionOrigin"
                },
                {
                    methodname: "GetDeviceBindingRevision",
                    methodname_flat: "SteamAPI_ISteamInput_GetDeviceBindingRevision",
                    params: [
                        { paramname: "inputHandle", paramtype: "InputHandle_t" },
                        { paramname: "pMajor", paramtype: "int *" },
                        { paramname: "pMinor", paramtype: "int *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetRemotePlaySessionID",
                    methodname_flat: "SteamAPI_ISteamInput_GetRemotePlaySessionID",
                    params: [{ paramname: "inputHandle", paramtype: "InputHandle_t" }],
                    returntype: "uint32"
                },
                {
                    methodname: "GetSessionInputConfigurationSettings",
                    methodname_flat: "SteamAPI_ISteamInput_GetSessionInputConfigurationSettings",
                    params: [],
                    returntype: "uint16"
                },
            ],
            version_string: "SteamInput006"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamController",
                    name_flat: "SteamAPI_SteamController_v008"
                },
            ],
            classname: "ISteamController",
            fields: [],
            methods: [
                {
                    methodname: "Init",
                    methodname_flat: "SteamAPI_ISteamController_Init",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "Shutdown",
                    methodname_flat: "SteamAPI_ISteamController_Shutdown",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "RunFrame",
                    methodname_flat: "SteamAPI_ISteamController_RunFrame",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "GetConnectedControllers",
                    methodname_flat: "SteamAPI_ISteamController_GetConnectedControllers",
                    params: [
                        {
                            desc: "Receives list of connected controllers",
                            out_array_count: "STEAM_CONTROLLER_MAX_COUNT",
                            paramname: "handlesOut",
                            paramtype: "ControllerHandle_t *"
                        },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "GetActionSetHandle",
                    methodname_flat: "SteamAPI_ISteamController_GetActionSetHandle",
                    params: [{ paramname: "pszActionSetName", paramtype: "const char *" }],
                    returntype: "ControllerActionSetHandle_t"
                },
                {
                    methodname: "ActivateActionSet",
                    methodname_flat: "SteamAPI_ISteamController_ActivateActionSet",
                    params: [
                        { paramname: "controllerHandle", paramtype: "ControllerHandle_t" },
                        { paramname: "actionSetHandle", paramtype: "ControllerActionSetHandle_t" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "GetCurrentActionSet",
                    methodname_flat: "SteamAPI_ISteamController_GetCurrentActionSet",
                    params: [{ paramname: "controllerHandle", paramtype: "ControllerHandle_t" }],
                    returntype: "ControllerActionSetHandle_t"
                },
                {
                    methodname: "ActivateActionSetLayer",
                    methodname_flat: "SteamAPI_ISteamController_ActivateActionSetLayer",
                    params: [
                        { paramname: "controllerHandle", paramtype: "ControllerHandle_t" },
                        { paramname: "actionSetLayerHandle", paramtype: "ControllerActionSetHandle_t" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "DeactivateActionSetLayer",
                    methodname_flat: "SteamAPI_ISteamController_DeactivateActionSetLayer",
                    params: [
                        { paramname: "controllerHandle", paramtype: "ControllerHandle_t" },
                        { paramname: "actionSetLayerHandle", paramtype: "ControllerActionSetHandle_t" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "DeactivateAllActionSetLayers",
                    methodname_flat: "SteamAPI_ISteamController_DeactivateAllActionSetLayers",
                    params: [{ paramname: "controllerHandle", paramtype: "ControllerHandle_t" }],
                    returntype: "void"
                },
                {
                    methodname: "GetActiveActionSetLayers",
                    methodname_flat: "SteamAPI_ISteamController_GetActiveActionSetLayers",
                    params: [
                        { paramname: "controllerHandle", paramtype: "ControllerHandle_t" },
                        {
                            desc: "Receives list of active layers",
                            out_array_count: "STEAM_CONTROLLER_MAX_ACTIVE_LAYERS",
                            paramname: "handlesOut",
                            paramtype: "ControllerActionSetHandle_t *"
                        },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "GetDigitalActionHandle",
                    methodname_flat: "SteamAPI_ISteamController_GetDigitalActionHandle",
                    params: [{ paramname: "pszActionName", paramtype: "const char *" }],
                    returntype: "ControllerDigitalActionHandle_t"
                },
                {
                    methodname: "GetDigitalActionData",
                    methodname_flat: "SteamAPI_ISteamController_GetDigitalActionData",
                    params: [
                        { paramname: "controllerHandle", paramtype: "ControllerHandle_t" },
                        { paramname: "digitalActionHandle", paramtype: "ControllerDigitalActionHandle_t" },
                    ],
                    returntype: "InputDigitalActionData_t"
                },
                {
                    methodname: "GetDigitalActionOrigins",
                    methodname_flat: "SteamAPI_ISteamController_GetDigitalActionOrigins",
                    params: [
                        { paramname: "controllerHandle", paramtype: "ControllerHandle_t" },
                        { paramname: "actionSetHandle", paramtype: "ControllerActionSetHandle_t" },
                        { paramname: "digitalActionHandle", paramtype: "ControllerDigitalActionHandle_t" },
                        {
                            desc: "Receives list of aciton origins",
                            out_array_count: "STEAM_CONTROLLER_MAX_ORIGINS",
                            paramname: "originsOut",
                            paramtype: "EControllerActionOrigin *"
                        },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "GetAnalogActionHandle",
                    methodname_flat: "SteamAPI_ISteamController_GetAnalogActionHandle",
                    params: [{ paramname: "pszActionName", paramtype: "const char *" }],
                    returntype: "ControllerAnalogActionHandle_t"
                },
                {
                    methodname: "GetAnalogActionData",
                    methodname_flat: "SteamAPI_ISteamController_GetAnalogActionData",
                    params: [
                        { paramname: "controllerHandle", paramtype: "ControllerHandle_t" },
                        { paramname: "analogActionHandle", paramtype: "ControllerAnalogActionHandle_t" },
                    ],
                    returntype: "InputAnalogActionData_t"
                },
                {
                    methodname: "GetAnalogActionOrigins",
                    methodname_flat: "SteamAPI_ISteamController_GetAnalogActionOrigins",
                    params: [
                        { paramname: "controllerHandle", paramtype: "ControllerHandle_t" },
                        { paramname: "actionSetHandle", paramtype: "ControllerActionSetHandle_t" },
                        { paramname: "analogActionHandle", paramtype: "ControllerAnalogActionHandle_t" },
                        {
                            desc: "Receives list of action origins",
                            out_array_count: "STEAM_CONTROLLER_MAX_ORIGINS",
                            paramname: "originsOut",
                            paramtype: "EControllerActionOrigin *"
                        },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "GetGlyphForActionOrigin",
                    methodname_flat: "SteamAPI_ISteamController_GetGlyphForActionOrigin",
                    params: [{ paramname: "eOrigin", paramtype: "EControllerActionOrigin" }],
                    returntype: "const char *"
                },
                {
                    methodname: "GetStringForActionOrigin",
                    methodname_flat: "SteamAPI_ISteamController_GetStringForActionOrigin",
                    params: [{ paramname: "eOrigin", paramtype: "EControllerActionOrigin" }],
                    returntype: "const char *"
                },
                {
                    methodname: "StopAnalogActionMomentum",
                    methodname_flat: "SteamAPI_ISteamController_StopAnalogActionMomentum",
                    params: [
                        { paramname: "controllerHandle", paramtype: "ControllerHandle_t" },
                        { paramname: "eAction", paramtype: "ControllerAnalogActionHandle_t" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "GetMotionData",
                    methodname_flat: "SteamAPI_ISteamController_GetMotionData",
                    params: [{ paramname: "controllerHandle", paramtype: "ControllerHandle_t" }],
                    returntype: "InputMotionData_t"
                },
                {
                    methodname: "TriggerHapticPulse",
                    methodname_flat: "SteamAPI_ISteamController_TriggerHapticPulse",
                    params: [
                        { paramname: "controllerHandle", paramtype: "ControllerHandle_t" },
                        { paramname: "eTargetPad", paramtype: "ESteamControllerPad" },
                        { paramname: "usDurationMicroSec", paramtype: "unsigned short" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "TriggerRepeatedHapticPulse",
                    methodname_flat: "SteamAPI_ISteamController_TriggerRepeatedHapticPulse",
                    params: [
                        { paramname: "controllerHandle", paramtype: "ControllerHandle_t" },
                        { paramname: "eTargetPad", paramtype: "ESteamControllerPad" },
                        { paramname: "usDurationMicroSec", paramtype: "unsigned short" },
                        { paramname: "usOffMicroSec", paramtype: "unsigned short" },
                        { paramname: "unRepeat", paramtype: "unsigned short" },
                        { paramname: "nFlags", paramtype: "unsigned int" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "TriggerVibration",
                    methodname_flat: "SteamAPI_ISteamController_TriggerVibration",
                    params: [
                        { paramname: "controllerHandle", paramtype: "ControllerHandle_t" },
                        { paramname: "usLeftSpeed", paramtype: "unsigned short" },
                        { paramname: "usRightSpeed", paramtype: "unsigned short" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SetLEDColor",
                    methodname_flat: "SteamAPI_ISteamController_SetLEDColor",
                    params: [
                        { paramname: "controllerHandle", paramtype: "ControllerHandle_t" },
                        { paramname: "nColorR", paramtype: "uint8" },
                        { paramname: "nColorG", paramtype: "uint8" },
                        { paramname: "nColorB", paramtype: "uint8" },
                        { paramname: "nFlags", paramtype: "unsigned int" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "ShowBindingPanel",
                    methodname_flat: "SteamAPI_ISteamController_ShowBindingPanel",
                    params: [{ paramname: "controllerHandle", paramtype: "ControllerHandle_t" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetInputTypeForHandle",
                    methodname_flat: "SteamAPI_ISteamController_GetInputTypeForHandle",
                    params: [{ paramname: "controllerHandle", paramtype: "ControllerHandle_t" }],
                    returntype: "ESteamInputType"
                },
                {
                    methodname: "GetControllerForGamepadIndex",
                    methodname_flat: "SteamAPI_ISteamController_GetControllerForGamepadIndex",
                    params: [{ paramname: "nIndex", paramtype: "int" }],
                    returntype: "ControllerHandle_t"
                },
                {
                    methodname: "GetGamepadIndexForController",
                    methodname_flat: "SteamAPI_ISteamController_GetGamepadIndexForController",
                    params: [{ paramname: "ulControllerHandle", paramtype: "ControllerHandle_t" }],
                    returntype: "int"
                },
                {
                    methodname: "GetStringForXboxOrigin",
                    methodname_flat: "SteamAPI_ISteamController_GetStringForXboxOrigin",
                    params: [{ paramname: "eOrigin", paramtype: "EXboxOrigin" }],
                    returntype: "const char *"
                },
                {
                    methodname: "GetGlyphForXboxOrigin",
                    methodname_flat: "SteamAPI_ISteamController_GetGlyphForXboxOrigin",
                    params: [{ paramname: "eOrigin", paramtype: "EXboxOrigin" }],
                    returntype: "const char *"
                },
                {
                    methodname: "GetActionOriginFromXboxOrigin",
                    methodname_flat: "SteamAPI_ISteamController_GetActionOriginFromXboxOrigin",
                    params: [
                        { paramname: "controllerHandle", paramtype: "ControllerHandle_t" },
                        { paramname: "eOrigin", paramtype: "EXboxOrigin" },
                    ],
                    returntype: "EControllerActionOrigin"
                },
                {
                    methodname: "TranslateActionOrigin",
                    methodname_flat: "SteamAPI_ISteamController_TranslateActionOrigin",
                    params: [
                        { paramname: "eDestinationInputType", paramtype: "ESteamInputType" },
                        { paramname: "eSourceOrigin", paramtype: "EControllerActionOrigin" },
                    ],
                    returntype: "EControllerActionOrigin"
                },
                {
                    methodname: "GetControllerBindingRevision",
                    methodname_flat: "SteamAPI_ISteamController_GetControllerBindingRevision",
                    params: [
                        { paramname: "controllerHandle", paramtype: "ControllerHandle_t" },
                        { paramname: "pMajor", paramtype: "int *" },
                        { paramname: "pMinor", paramtype: "int *" },
                    ],
                    returntype: "bool"
                },
            ],
            version_string: "SteamController008"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamUGC",
                    name_flat: "SteamAPI_SteamUGC_v016"
                },
                {
                    kind: "gameserver",
                    name: "SteamGameServerUGC",
                    name_flat: "SteamAPI_SteamGameServerUGC_v016"
                },
            ],
            classname: "ISteamUGC",
            fields: [],
            methods: [
                {
                    methodname: "CreateQueryUserUGCRequest",
                    methodname_flat: "SteamAPI_ISteamUGC_CreateQueryUserUGCRequest",
                    params: [
                        { paramname: "unAccountID", paramtype: "AccountID_t" },
                        { paramname: "eListType", paramtype: "EUserUGCList" },
                        { paramname: "eMatchingUGCType", paramtype: "EUGCMatchingUGCType" },
                        { paramname: "eSortOrder", paramtype: "EUserUGCListSortOrder" },
                        { paramname: "nCreatorAppID", paramtype: "AppId_t" },
                        { paramname: "nConsumerAppID", paramtype: "AppId_t" },
                        { paramname: "unPage", paramtype: "uint32" },
                    ],
                    returntype: "UGCQueryHandle_t"
                },
                {
                    methodname: "CreateQueryAllUGCRequest",
                    methodname_flat: "SteamAPI_ISteamUGC_CreateQueryAllUGCRequestPage",
                    params: [
                        { paramname: "eQueryType", paramtype: "EUGCQuery" },
                        { paramname: "eMatchingeMatchingUGCTypeFileType", paramtype: "EUGCMatchingUGCType" },
                        { paramname: "nCreatorAppID", paramtype: "AppId_t" },
                        { paramname: "nConsumerAppID", paramtype: "AppId_t" },
                        { paramname: "unPage", paramtype: "uint32" },
                    ],
                    returntype: "UGCQueryHandle_t"
                },
                {
                    methodname: "CreateQueryAllUGCRequest",
                    methodname_flat: "SteamAPI_ISteamUGC_CreateQueryAllUGCRequestCursor",
                    params: [
                        { paramname: "eQueryType", paramtype: "EUGCQuery" },
                        { paramname: "eMatchingeMatchingUGCTypeFileType", paramtype: "EUGCMatchingUGCType" },
                        { paramname: "nCreatorAppID", paramtype: "AppId_t" },
                        { paramname: "nConsumerAppID", paramtype: "AppId_t" },
                        { paramname: "pchCursor", paramtype: "const char *" },
                    ],
                    returntype: "UGCQueryHandle_t"
                },
                {
                    methodname: "CreateQueryUGCDetailsRequest",
                    methodname_flat: "SteamAPI_ISteamUGC_CreateQueryUGCDetailsRequest",
                    params: [
                        { paramname: "pvecPublishedFileID", paramtype: "PublishedFileId_t *" },
                        { paramname: "unNumPublishedFileIDs", paramtype: "uint32" },
                    ],
                    returntype: "UGCQueryHandle_t"
                },
                {
                    callresult: "SteamUGCQueryCompleted_t",
                    methodname: "SendQueryUGCRequest",
                    methodname_flat: "SteamAPI_ISteamUGC_SendQueryUGCRequest",
                    params: [{ paramname: "handle", paramtype: "UGCQueryHandle_t" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetQueryUGCResult",
                    methodname_flat: "SteamAPI_ISteamUGC_GetQueryUGCResult",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "index", paramtype: "uint32" },
                        { paramname: "pDetails", paramtype: "SteamUGCDetails_t *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetQueryUGCNumTags",
                    methodname_flat: "SteamAPI_ISteamUGC_GetQueryUGCNumTags",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "index", paramtype: "uint32" },
                    ],
                    returntype: "uint32"
                },
                {
                    methodname: "GetQueryUGCTag",
                    methodname_flat: "SteamAPI_ISteamUGC_GetQueryUGCTag",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "index", paramtype: "uint32" },
                        { paramname: "indexTag", paramtype: "uint32" },
                        {
                            out_string_count: "cchValueSize",
                            paramname: "pchValue",
                            paramtype: "char *"
                        },
                        { paramname: "cchValueSize", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetQueryUGCTagDisplayName",
                    methodname_flat: "SteamAPI_ISteamUGC_GetQueryUGCTagDisplayName",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "index", paramtype: "uint32" },
                        { paramname: "indexTag", paramtype: "uint32" },
                        {
                            out_string_count: "cchValueSize",
                            paramname: "pchValue",
                            paramtype: "char *"
                        },
                        { paramname: "cchValueSize", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetQueryUGCPreviewURL",
                    methodname_flat: "SteamAPI_ISteamUGC_GetQueryUGCPreviewURL",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "index", paramtype: "uint32" },
                        {
                            out_string_count: "cchURLSize",
                            paramname: "pchURL",
                            paramtype: "char *"
                        },
                        { paramname: "cchURLSize", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetQueryUGCMetadata",
                    methodname_flat: "SteamAPI_ISteamUGC_GetQueryUGCMetadata",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "index", paramtype: "uint32" },
                        {
                            out_string_count: "cchMetadatasize",
                            paramname: "pchMetadata",
                            paramtype: "char *"
                        },
                        { paramname: "cchMetadatasize", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetQueryUGCChildren",
                    methodname_flat: "SteamAPI_ISteamUGC_GetQueryUGCChildren",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "index", paramtype: "uint32" },
                        { paramname: "pvecPublishedFileID", paramtype: "PublishedFileId_t *" },
                        { paramname: "cMaxEntries", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetQueryUGCStatistic",
                    methodname_flat: "SteamAPI_ISteamUGC_GetQueryUGCStatistic",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "index", paramtype: "uint32" },
                        { paramname: "eStatType", paramtype: "EItemStatistic" },
                        { paramname: "pStatValue", paramtype: "uint64 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetQueryUGCNumAdditionalPreviews",
                    methodname_flat: "SteamAPI_ISteamUGC_GetQueryUGCNumAdditionalPreviews",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "index", paramtype: "uint32" },
                    ],
                    returntype: "uint32"
                },
                {
                    methodname: "GetQueryUGCAdditionalPreview",
                    methodname_flat: "SteamAPI_ISteamUGC_GetQueryUGCAdditionalPreview",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "index", paramtype: "uint32" },
                        { paramname: "previewIndex", paramtype: "uint32" },
                        {
                            out_string_count: "cchURLSize",
                            paramname: "pchURLOrVideoID",
                            paramtype: "char *"
                        },
                        { paramname: "cchURLSize", paramtype: "uint32" },
                        {
                            out_string_count: "cchURLSize",
                            paramname: "pchOriginalFileName",
                            paramtype: "char *"
                        },
                        { paramname: "cchOriginalFileNameSize", paramtype: "uint32" },
                        { paramname: "pPreviewType", paramtype: "EItemPreviewType *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetQueryUGCNumKeyValueTags",
                    methodname_flat: "SteamAPI_ISteamUGC_GetQueryUGCNumKeyValueTags",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "index", paramtype: "uint32" },
                    ],
                    returntype: "uint32"
                },
                {
                    methodname: "GetQueryUGCKeyValueTag",
                    methodname_flat: "SteamAPI_ISteamUGC_GetQueryUGCKeyValueTag",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "index", paramtype: "uint32" },
                        { paramname: "keyValueTagIndex", paramtype: "uint32" },
                        {
                            out_string_count: "cchKeySize",
                            paramname: "pchKey",
                            paramtype: "char *"
                        },
                        { paramname: "cchKeySize", paramtype: "uint32" },
                        {
                            out_string_count: "cchValueSize",
                            paramname: "pchValue",
                            paramtype: "char *"
                        },
                        { paramname: "cchValueSize", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetQueryUGCKeyValueTag",
                    methodname_flat: "SteamAPI_ISteamUGC_GetQueryFirstUGCKeyValueTag",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "index", paramtype: "uint32" },
                        { paramname: "pchKey", paramtype: "const char *" },
                        {
                            out_string_count: "cchValueSize",
                            paramname: "pchValue",
                            paramtype: "char *"
                        },
                        { paramname: "cchValueSize", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "ReleaseQueryUGCRequest",
                    methodname_flat: "SteamAPI_ISteamUGC_ReleaseQueryUGCRequest",
                    params: [{ paramname: "handle", paramtype: "UGCQueryHandle_t" }],
                    returntype: "bool"
                },
                {
                    methodname: "AddRequiredTag",
                    methodname_flat: "SteamAPI_ISteamUGC_AddRequiredTag",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "pTagName", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "AddRequiredTagGroup",
                    methodname_flat: "SteamAPI_ISteamUGC_AddRequiredTagGroup",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "pTagGroups", paramtype: "const SteamParamStringArray_t *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "AddExcludedTag",
                    methodname_flat: "SteamAPI_ISteamUGC_AddExcludedTag",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "pTagName", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetReturnOnlyIDs",
                    methodname_flat: "SteamAPI_ISteamUGC_SetReturnOnlyIDs",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "bReturnOnlyIDs", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetReturnKeyValueTags",
                    methodname_flat: "SteamAPI_ISteamUGC_SetReturnKeyValueTags",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "bReturnKeyValueTags", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetReturnLongDescription",
                    methodname_flat: "SteamAPI_ISteamUGC_SetReturnLongDescription",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "bReturnLongDescription", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetReturnMetadata",
                    methodname_flat: "SteamAPI_ISteamUGC_SetReturnMetadata",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "bReturnMetadata", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetReturnChildren",
                    methodname_flat: "SteamAPI_ISteamUGC_SetReturnChildren",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "bReturnChildren", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetReturnAdditionalPreviews",
                    methodname_flat: "SteamAPI_ISteamUGC_SetReturnAdditionalPreviews",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "bReturnAdditionalPreviews", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetReturnTotalOnly",
                    methodname_flat: "SteamAPI_ISteamUGC_SetReturnTotalOnly",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "bReturnTotalOnly", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetReturnPlaytimeStats",
                    methodname_flat: "SteamAPI_ISteamUGC_SetReturnPlaytimeStats",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "unDays", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetLanguage",
                    methodname_flat: "SteamAPI_ISteamUGC_SetLanguage",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "pchLanguage", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetAllowCachedResponse",
                    methodname_flat: "SteamAPI_ISteamUGC_SetAllowCachedResponse",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "unMaxAgeSeconds", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetCloudFileNameFilter",
                    methodname_flat: "SteamAPI_ISteamUGC_SetCloudFileNameFilter",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "pMatchCloudFileName", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetMatchAnyTag",
                    methodname_flat: "SteamAPI_ISteamUGC_SetMatchAnyTag",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "bMatchAnyTag", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetSearchText",
                    methodname_flat: "SteamAPI_ISteamUGC_SetSearchText",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "pSearchText", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetRankedByTrendDays",
                    methodname_flat: "SteamAPI_ISteamUGC_SetRankedByTrendDays",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "unDays", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetTimeCreatedDateRange",
                    methodname_flat: "SteamAPI_ISteamUGC_SetTimeCreatedDateRange",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "rtStart", paramtype: "RTime32" },
                        { paramname: "rtEnd", paramtype: "RTime32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetTimeUpdatedDateRange",
                    methodname_flat: "SteamAPI_ISteamUGC_SetTimeUpdatedDateRange",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "rtStart", paramtype: "RTime32" },
                        { paramname: "rtEnd", paramtype: "RTime32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "AddRequiredKeyValueTag",
                    methodname_flat: "SteamAPI_ISteamUGC_AddRequiredKeyValueTag",
                    params: [
                        { paramname: "handle", paramtype: "UGCQueryHandle_t" },
                        { paramname: "pKey", paramtype: "const char *" },
                        { paramname: "pValue", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    callresult: "SteamUGCRequestUGCDetailsResult_t",
                    methodname: "RequestUGCDetails",
                    methodname_flat: "SteamAPI_ISteamUGC_RequestUGCDetails",
                    params: [
                        { paramname: "nPublishedFileID", paramtype: "PublishedFileId_t" },
                        { paramname: "unMaxAgeSeconds", paramtype: "uint32" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "CreateItemResult_t",
                    methodname: "CreateItem",
                    methodname_flat: "SteamAPI_ISteamUGC_CreateItem",
                    params: [
                        { paramname: "nConsumerAppId", paramtype: "AppId_t" },
                        { paramname: "eFileType", paramtype: "EWorkshopFileType" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "StartItemUpdate",
                    methodname_flat: "SteamAPI_ISteamUGC_StartItemUpdate",
                    params: [
                        { paramname: "nConsumerAppId", paramtype: "AppId_t" },
                        { paramname: "nPublishedFileID", paramtype: "PublishedFileId_t" },
                    ],
                    returntype: "UGCUpdateHandle_t"
                },
                {
                    methodname: "SetItemTitle",
                    methodname_flat: "SteamAPI_ISteamUGC_SetItemTitle",
                    params: [
                        { paramname: "handle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "pchTitle", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetItemDescription",
                    methodname_flat: "SteamAPI_ISteamUGC_SetItemDescription",
                    params: [
                        { paramname: "handle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "pchDescription", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetItemUpdateLanguage",
                    methodname_flat: "SteamAPI_ISteamUGC_SetItemUpdateLanguage",
                    params: [
                        { paramname: "handle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "pchLanguage", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetItemMetadata",
                    methodname_flat: "SteamAPI_ISteamUGC_SetItemMetadata",
                    params: [
                        { paramname: "handle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "pchMetaData", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetItemVisibility",
                    methodname_flat: "SteamAPI_ISteamUGC_SetItemVisibility",
                    params: [
                        { paramname: "handle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "eVisibility", paramtype: "ERemoteStoragePublishedFileVisibility" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetItemTags",
                    methodname_flat: "SteamAPI_ISteamUGC_SetItemTags",
                    params: [
                        { paramname: "updateHandle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "pTags", paramtype: "const SteamParamStringArray_t *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetItemContent",
                    methodname_flat: "SteamAPI_ISteamUGC_SetItemContent",
                    params: [
                        { paramname: "handle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "pszContentFolder", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetItemPreview",
                    methodname_flat: "SteamAPI_ISteamUGC_SetItemPreview",
                    params: [
                        { paramname: "handle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "pszPreviewFile", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetAllowLegacyUpload",
                    methodname_flat: "SteamAPI_ISteamUGC_SetAllowLegacyUpload",
                    params: [
                        { paramname: "handle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "bAllowLegacyUpload", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "RemoveAllItemKeyValueTags",
                    methodname_flat: "SteamAPI_ISteamUGC_RemoveAllItemKeyValueTags",
                    params: [{ paramname: "handle", paramtype: "UGCUpdateHandle_t" }],
                    returntype: "bool"
                },
                {
                    methodname: "RemoveItemKeyValueTags",
                    methodname_flat: "SteamAPI_ISteamUGC_RemoveItemKeyValueTags",
                    params: [
                        { paramname: "handle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "pchKey", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "AddItemKeyValueTag",
                    methodname_flat: "SteamAPI_ISteamUGC_AddItemKeyValueTag",
                    params: [
                        { paramname: "handle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "pchKey", paramtype: "const char *" },
                        { paramname: "pchValue", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "AddItemPreviewFile",
                    methodname_flat: "SteamAPI_ISteamUGC_AddItemPreviewFile",
                    params: [
                        { paramname: "handle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "pszPreviewFile", paramtype: "const char *" },
                        { paramname: "type", paramtype: "EItemPreviewType" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "AddItemPreviewVideo",
                    methodname_flat: "SteamAPI_ISteamUGC_AddItemPreviewVideo",
                    params: [
                        { paramname: "handle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "pszVideoID", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "UpdateItemPreviewFile",
                    methodname_flat: "SteamAPI_ISteamUGC_UpdateItemPreviewFile",
                    params: [
                        { paramname: "handle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "index", paramtype: "uint32" },
                        { paramname: "pszPreviewFile", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "UpdateItemPreviewVideo",
                    methodname_flat: "SteamAPI_ISteamUGC_UpdateItemPreviewVideo",
                    params: [
                        { paramname: "handle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "index", paramtype: "uint32" },
                        { paramname: "pszVideoID", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "RemoveItemPreview",
                    methodname_flat: "SteamAPI_ISteamUGC_RemoveItemPreview",
                    params: [
                        { paramname: "handle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "index", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    callresult: "SubmitItemUpdateResult_t",
                    methodname: "SubmitItemUpdate",
                    methodname_flat: "SteamAPI_ISteamUGC_SubmitItemUpdate",
                    params: [
                        { paramname: "handle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "pchChangeNote", paramtype: "const char *" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetItemUpdateProgress",
                    methodname_flat: "SteamAPI_ISteamUGC_GetItemUpdateProgress",
                    params: [
                        { paramname: "handle", paramtype: "UGCUpdateHandle_t" },
                        { paramname: "punBytesProcessed", paramtype: "uint64 *" },
                        { paramname: "punBytesTotal", paramtype: "uint64 *" },
                    ],
                    returntype: "EItemUpdateStatus"
                },
                {
                    callresult: "SetUserItemVoteResult_t",
                    methodname: "SetUserItemVote",
                    methodname_flat: "SteamAPI_ISteamUGC_SetUserItemVote",
                    params: [
                        { paramname: "nPublishedFileID", paramtype: "PublishedFileId_t" },
                        { paramname: "bVoteUp", paramtype: "bool" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "GetUserItemVoteResult_t",
                    methodname: "GetUserItemVote",
                    methodname_flat: "SteamAPI_ISteamUGC_GetUserItemVote",
                    params: [{ paramname: "nPublishedFileID", paramtype: "PublishedFileId_t" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "UserFavoriteItemsListChanged_t",
                    methodname: "AddItemToFavorites",
                    methodname_flat: "SteamAPI_ISteamUGC_AddItemToFavorites",
                    params: [
                        { paramname: "nAppId", paramtype: "AppId_t" },
                        { paramname: "nPublishedFileID", paramtype: "PublishedFileId_t" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "UserFavoriteItemsListChanged_t",
                    methodname: "RemoveItemFromFavorites",
                    methodname_flat: "SteamAPI_ISteamUGC_RemoveItemFromFavorites",
                    params: [
                        { paramname: "nAppId", paramtype: "AppId_t" },
                        { paramname: "nPublishedFileID", paramtype: "PublishedFileId_t" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoteStorageSubscribePublishedFileResult_t",
                    methodname: "SubscribeItem",
                    methodname_flat: "SteamAPI_ISteamUGC_SubscribeItem",
                    params: [{ paramname: "nPublishedFileID", paramtype: "PublishedFileId_t" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoteStorageUnsubscribePublishedFileResult_t",
                    methodname: "UnsubscribeItem",
                    methodname_flat: "SteamAPI_ISteamUGC_UnsubscribeItem",
                    params: [{ paramname: "nPublishedFileID", paramtype: "PublishedFileId_t" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetNumSubscribedItems",
                    methodname_flat: "SteamAPI_ISteamUGC_GetNumSubscribedItems",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "GetSubscribedItems",
                    methodname_flat: "SteamAPI_ISteamUGC_GetSubscribedItems",
                    params: [
                        { paramname: "pvecPublishedFileID", paramtype: "PublishedFileId_t *" },
                        { paramname: "cMaxEntries", paramtype: "uint32" },
                    ],
                    returntype: "uint32"
                },
                {
                    methodname: "GetItemState",
                    methodname_flat: "SteamAPI_ISteamUGC_GetItemState",
                    params: [{ paramname: "nPublishedFileID", paramtype: "PublishedFileId_t" }],
                    returntype: "uint32"
                },
                {
                    methodname: "GetItemInstallInfo",
                    methodname_flat: "SteamAPI_ISteamUGC_GetItemInstallInfo",
                    params: [
                        { paramname: "nPublishedFileID", paramtype: "PublishedFileId_t" },
                        { paramname: "punSizeOnDisk", paramtype: "uint64 *" },
                        {
                            out_string_count: "cchFolderSize",
                            paramname: "pchFolder",
                            paramtype: "char *"
                        },
                        { paramname: "cchFolderSize", paramtype: "uint32" },
                        { paramname: "punTimeStamp", paramtype: "uint32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetItemDownloadInfo",
                    methodname_flat: "SteamAPI_ISteamUGC_GetItemDownloadInfo",
                    params: [
                        { paramname: "nPublishedFileID", paramtype: "PublishedFileId_t" },
                        { paramname: "punBytesDownloaded", paramtype: "uint64 *" },
                        { paramname: "punBytesTotal", paramtype: "uint64 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "DownloadItem",
                    methodname_flat: "SteamAPI_ISteamUGC_DownloadItem",
                    params: [
                        { paramname: "nPublishedFileID", paramtype: "PublishedFileId_t" },
                        { paramname: "bHighPriority", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "BInitWorkshopForGameServer",
                    methodname_flat: "SteamAPI_ISteamUGC_BInitWorkshopForGameServer",
                    params: [
                        { paramname: "unWorkshopDepotID", paramtype: "DepotId_t" },
                        { paramname: "pszFolder", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SuspendDownloads",
                    methodname_flat: "SteamAPI_ISteamUGC_SuspendDownloads",
                    params: [{ paramname: "bSuspend", paramtype: "bool" }],
                    returntype: "void"
                },
                {
                    callresult: "StartPlaytimeTrackingResult_t",
                    methodname: "StartPlaytimeTracking",
                    methodname_flat: "SteamAPI_ISteamUGC_StartPlaytimeTracking",
                    params: [
                        { paramname: "pvecPublishedFileID", paramtype: "PublishedFileId_t *" },
                        { paramname: "unNumPublishedFileIDs", paramtype: "uint32" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "StopPlaytimeTrackingResult_t",
                    methodname: "StopPlaytimeTracking",
                    methodname_flat: "SteamAPI_ISteamUGC_StopPlaytimeTracking",
                    params: [
                        { paramname: "pvecPublishedFileID", paramtype: "PublishedFileId_t *" },
                        { paramname: "unNumPublishedFileIDs", paramtype: "uint32" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "StopPlaytimeTrackingResult_t",
                    methodname: "StopPlaytimeTrackingForAllItems",
                    methodname_flat: "SteamAPI_ISteamUGC_StopPlaytimeTrackingForAllItems",
                    params: [],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "AddUGCDependencyResult_t",
                    methodname: "AddDependency",
                    methodname_flat: "SteamAPI_ISteamUGC_AddDependency",
                    params: [
                        { paramname: "nParentPublishedFileID", paramtype: "PublishedFileId_t" },
                        { paramname: "nChildPublishedFileID", paramtype: "PublishedFileId_t" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoveUGCDependencyResult_t",
                    methodname: "RemoveDependency",
                    methodname_flat: "SteamAPI_ISteamUGC_RemoveDependency",
                    params: [
                        { paramname: "nParentPublishedFileID", paramtype: "PublishedFileId_t" },
                        { paramname: "nChildPublishedFileID", paramtype: "PublishedFileId_t" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "AddAppDependencyResult_t",
                    methodname: "AddAppDependency",
                    methodname_flat: "SteamAPI_ISteamUGC_AddAppDependency",
                    params: [
                        { paramname: "nPublishedFileID", paramtype: "PublishedFileId_t" },
                        { paramname: "nAppID", paramtype: "AppId_t" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "RemoveAppDependencyResult_t",
                    methodname: "RemoveAppDependency",
                    methodname_flat: "SteamAPI_ISteamUGC_RemoveAppDependency",
                    params: [
                        { paramname: "nPublishedFileID", paramtype: "PublishedFileId_t" },
                        { paramname: "nAppID", paramtype: "AppId_t" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "GetAppDependenciesResult_t",
                    methodname: "GetAppDependencies",
                    methodname_flat: "SteamAPI_ISteamUGC_GetAppDependencies",
                    params: [{ paramname: "nPublishedFileID", paramtype: "PublishedFileId_t" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "DeleteItemResult_t",
                    methodname: "DeleteItem",
                    methodname_flat: "SteamAPI_ISteamUGC_DeleteItem",
                    params: [{ paramname: "nPublishedFileID", paramtype: "PublishedFileId_t" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "ShowWorkshopEULA",
                    methodname_flat: "SteamAPI_ISteamUGC_ShowWorkshopEULA",
                    params: [],
                    returntype: "bool"
                },
                {
                    callresult: "WorkshopEULAStatus_t",
                    methodname: "GetWorkshopEULAStatus",
                    methodname_flat: "SteamAPI_ISteamUGC_GetWorkshopEULAStatus",
                    params: [],
                    returntype: "SteamAPICall_t"
                },
            ],
            version_string: "STEAMUGC_INTERFACE_VERSION016"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamAppList",
                    name_flat: "SteamAPI_SteamAppList_v001"
                },
            ],
            classname: "ISteamAppList",
            fields: [],
            methods: [
                {
                    methodname: "GetNumInstalledApps",
                    methodname_flat: "SteamAPI_ISteamAppList_GetNumInstalledApps",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "GetInstalledApps",
                    methodname_flat: "SteamAPI_ISteamAppList_GetInstalledApps",
                    params: [
                        { paramname: "pvecAppID", paramtype: "AppId_t *" },
                        { paramname: "unMaxAppIDs", paramtype: "uint32" },
                    ],
                    returntype: "uint32"
                },
                {
                    methodname: "GetAppName",
                    methodname_flat: "SteamAPI_ISteamAppList_GetAppName",
                    params: [
                        { paramname: "nAppID", paramtype: "AppId_t" },
                        {
                            out_string: "",
                            paramname: "pchName",
                            paramtype: "char *"
                        },
                        { paramname: "cchNameMax", paramtype: "int" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "GetAppInstallDir",
                    methodname_flat: "SteamAPI_ISteamAppList_GetAppInstallDir",
                    params: [
                        { paramname: "nAppID", paramtype: "AppId_t" },
                        { paramname: "pchDirectory", paramtype: "char *" },
                        { paramname: "cchNameMax", paramtype: "int" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "GetAppBuildId",
                    methodname_flat: "SteamAPI_ISteamAppList_GetAppBuildId",
                    params: [{ paramname: "nAppID", paramtype: "AppId_t" }],
                    returntype: "int"
                },
            ],
            version_string: "STEAMAPPLIST_INTERFACE_VERSION001"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamHTMLSurface",
                    name_flat: "SteamAPI_SteamHTMLSurface_v005"
                },
            ],
            classname: "ISteamHTMLSurface",
            enums: [
                {
                    enumname: "EHTMLMouseButton",
                    fqname: "ISteamHTMLSurface::EHTMLMouseButton",
                    values: [
                        { name: "eHTMLMouseButton_Left", value: "0" },
                        { name: "eHTMLMouseButton_Right", value: "1" },
                        { name: "eHTMLMouseButton_Middle", value: "2" },
                    ]
                },
                {
                    enumname: "EMouseCursor",
                    fqname: "ISteamHTMLSurface::EMouseCursor",
                    values: [
                        { name: "dc_user", value: "0" },
                        { name: "dc_none", value: "1" },
                        { name: "dc_arrow", value: "2" },
                        { name: "dc_ibeam", value: "3" },
                        { name: "dc_hourglass", value: "4" },
                        { name: "dc_waitarrow", value: "5" },
                        { name: "dc_crosshair", value: "6" },
                        { name: "dc_up", value: "7" },
                        { name: "dc_sizenw", value: "8" },
                        { name: "dc_sizese", value: "9" },
                        { name: "dc_sizene", value: "10" },
                        { name: "dc_sizesw", value: "11" },
                        { name: "dc_sizew", value: "12" },
                        { name: "dc_sizee", value: "13" },
                        { name: "dc_sizen", value: "14" },
                        { name: "dc_sizes", value: "15" },
                        { name: "dc_sizewe", value: "16" },
                        { name: "dc_sizens", value: "17" },
                        { name: "dc_sizeall", value: "18" },
                        { name: "dc_no", value: "19" },
                        { name: "dc_hand", value: "20" },
                        { name: "dc_blank", value: "21" },
                        { name: "dc_middle_pan", value: "22" },
                        { name: "dc_north_pan", value: "23" },
                        { name: "dc_north_east_pan", value: "24" },
                        { name: "dc_east_pan", value: "25" },
                        { name: "dc_south_east_pan", value: "26" },
                        { name: "dc_south_pan", value: "27" },
                        { name: "dc_south_west_pan", value: "28" },
                        { name: "dc_west_pan", value: "29" },
                        { name: "dc_north_west_pan", value: "30" },
                        { name: "dc_alias", value: "31" },
                        { name: "dc_cell", value: "32" },
                        { name: "dc_colresize", value: "33" },
                        { name: "dc_copycur", value: "34" },
                        { name: "dc_verticaltext", value: "35" },
                        { name: "dc_rowresize", value: "36" },
                        { name: "dc_zoomin", value: "37" },
                        { name: "dc_zoomout", value: "38" },
                        { name: "dc_help", value: "39" },
                        { name: "dc_custom", value: "40" },
                        { name: "dc_last", value: "41" },
                    ]
                },
                {
                    enumname: "EHTMLKeyModifiers",
                    fqname: "ISteamHTMLSurface::EHTMLKeyModifiers",
                    values: [
                        { name: "k_eHTMLKeyModifier_None", value: "0" },
                        { name: "k_eHTMLKeyModifier_AltDown", value: "1" },
                        { name: "k_eHTMLKeyModifier_CtrlDown", value: "2" },
                        { name: "k_eHTMLKeyModifier_ShiftDown", value: "4" },
                    ]
                },
            ],
            fields: [],
            methods: [
                {
                    methodname: "Init",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_Init",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "Shutdown",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_Shutdown",
                    params: [],
                    returntype: "bool"
                },
                {
                    callresult: "HTML_BrowserReady_t",
                    methodname: "CreateBrowser",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_CreateBrowser",
                    params: [
                        { paramname: "pchUserAgent", paramtype: "const char *" },
                        { paramname: "pchUserCSS", paramtype: "const char *" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "RemoveBrowser",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_RemoveBrowser",
                    params: [{ paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" }],
                    returntype: "void"
                },
                {
                    methodname: "LoadURL",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_LoadURL",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "pchURL", paramtype: "const char *" },
                        { paramname: "pchPostData", paramtype: "const char *" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SetSize",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_SetSize",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "unWidth", paramtype: "uint32" },
                        { paramname: "unHeight", paramtype: "uint32" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "StopLoad",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_StopLoad",
                    params: [{ paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" }],
                    returntype: "void"
                },
                {
                    methodname: "Reload",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_Reload",
                    params: [{ paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" }],
                    returntype: "void"
                },
                {
                    methodname: "GoBack",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_GoBack",
                    params: [{ paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" }],
                    returntype: "void"
                },
                {
                    methodname: "GoForward",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_GoForward",
                    params: [{ paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" }],
                    returntype: "void"
                },
                {
                    methodname: "AddHeader",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_AddHeader",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "pchKey", paramtype: "const char *" },
                        { paramname: "pchValue", paramtype: "const char *" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "ExecuteJavascript",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_ExecuteJavascript",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "pchScript", paramtype: "const char *" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "MouseUp",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_MouseUp",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "eMouseButton", paramtype: "ISteamHTMLSurface::EHTMLMouseButton" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "MouseDown",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_MouseDown",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "eMouseButton", paramtype: "ISteamHTMLSurface::EHTMLMouseButton" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "MouseDoubleClick",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_MouseDoubleClick",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "eMouseButton", paramtype: "ISteamHTMLSurface::EHTMLMouseButton" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "MouseMove",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_MouseMove",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "x", paramtype: "int" },
                        { paramname: "y", paramtype: "int" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "MouseWheel",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_MouseWheel",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "nDelta", paramtype: "int32" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "KeyDown",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_KeyDown",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "nNativeKeyCode", paramtype: "uint32" },
                        { paramname: "eHTMLKeyModifiers", paramtype: "ISteamHTMLSurface::EHTMLKeyModifiers" },
                        { paramname: "bIsSystemKey", paramtype: "bool" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "KeyUp",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_KeyUp",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "nNativeKeyCode", paramtype: "uint32" },
                        { paramname: "eHTMLKeyModifiers", paramtype: "ISteamHTMLSurface::EHTMLKeyModifiers" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "KeyChar",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_KeyChar",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "cUnicodeChar", paramtype: "uint32" },
                        { paramname: "eHTMLKeyModifiers", paramtype: "ISteamHTMLSurface::EHTMLKeyModifiers" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SetHorizontalScroll",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_SetHorizontalScroll",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "nAbsolutePixelScroll", paramtype: "uint32" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SetVerticalScroll",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_SetVerticalScroll",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "nAbsolutePixelScroll", paramtype: "uint32" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SetKeyFocus",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_SetKeyFocus",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "bHasKeyFocus", paramtype: "bool" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "ViewSource",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_ViewSource",
                    params: [{ paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" }],
                    returntype: "void"
                },
                {
                    methodname: "CopyToClipboard",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_CopyToClipboard",
                    params: [{ paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" }],
                    returntype: "void"
                },
                {
                    methodname: "PasteFromClipboard",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_PasteFromClipboard",
                    params: [{ paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" }],
                    returntype: "void"
                },
                {
                    methodname: "Find",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_Find",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "pchSearchStr", paramtype: "const char *" },
                        { paramname: "bCurrentlyInFind", paramtype: "bool" },
                        { paramname: "bReverse", paramtype: "bool" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "StopFind",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_StopFind",
                    params: [{ paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" }],
                    returntype: "void"
                },
                {
                    methodname: "GetLinkAtPosition",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_GetLinkAtPosition",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "x", paramtype: "int" },
                        { paramname: "y", paramtype: "int" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SetCookie",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_SetCookie",
                    params: [
                        { paramname: "pchHostname", paramtype: "const char *" },
                        { paramname: "pchKey", paramtype: "const char *" },
                        { paramname: "pchValue", paramtype: "const char *" },
                        { paramname: "pchPath", paramtype: "const char *" },
                        { paramname: "nExpires", paramtype: "RTime32" },
                        { paramname: "bSecure", paramtype: "bool" },
                        { paramname: "bHTTPOnly", paramtype: "bool" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SetPageScaleFactor",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_SetPageScaleFactor",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "flZoom", paramtype: "float" },
                        { paramname: "nPointX", paramtype: "int" },
                        { paramname: "nPointY", paramtype: "int" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SetBackgroundMode",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_SetBackgroundMode",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "bBackgroundMode", paramtype: "bool" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SetDPIScalingFactor",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_SetDPIScalingFactor",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "flDPIScaling", paramtype: "float" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "OpenDeveloperTools",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_OpenDeveloperTools",
                    params: [{ paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" }],
                    returntype: "void"
                },
                {
                    methodname: "AllowStartRequest",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_AllowStartRequest",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "bAllowed", paramtype: "bool" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "JSDialogResponse",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_JSDialogResponse",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "bResult", paramtype: "bool" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "FileLoadDialogResponse",
                    methodname_flat: "SteamAPI_ISteamHTMLSurface_FileLoadDialogResponse",
                    params: [
                        { paramname: "unBrowserHandle", paramtype: "HHTMLBrowser" },
                        { paramname: "pchSelectedFiles", paramtype: "const char **" },
                    ],
                    returntype: "void"
                },
            ],
            version_string: "STEAMHTMLSURFACE_INTERFACE_VERSION_005"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamInventory",
                    name_flat: "SteamAPI_SteamInventory_v003"
                },
                {
                    kind: "gameserver",
                    name: "SteamGameServerInventory",
                    name_flat: "SteamAPI_SteamGameServerInventory_v003"
                },
            ],
            classname: "ISteamInventory",
            fields: [],
            methods: [
                {
                    methodname: "GetResultStatus",
                    methodname_flat: "SteamAPI_ISteamInventory_GetResultStatus",
                    params: [{ paramname: "resultHandle", paramtype: "SteamInventoryResult_t" }],
                    returntype: "EResult"
                },
                {
                    methodname: "GetResultItems",
                    methodname_flat: "SteamAPI_ISteamInventory_GetResultItems",
                    params: [
                        { paramname: "resultHandle", paramtype: "SteamInventoryResult_t" },
                        {
                            desc: "Output array",
                            out_array_count: "punOutItemsArraySize",
                            paramname: "pOutItemsArray",
                            paramtype: "SteamItemDetails_t *"
                        },
                        { paramname: "punOutItemsArraySize", paramtype: "uint32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetResultItemProperty",
                    methodname_flat: "SteamAPI_ISteamInventory_GetResultItemProperty",
                    params: [
                        { paramname: "resultHandle", paramtype: "SteamInventoryResult_t" },
                        { paramname: "unItemIndex", paramtype: "uint32" },
                        { paramname: "pchPropertyName", paramtype: "const char *" },
                        {
                            out_string_count: "punValueBufferSizeOut",
                            paramname: "pchValueBuffer",
                            paramtype: "char *"
                        },
                        { paramname: "punValueBufferSizeOut", paramtype: "uint32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetResultTimestamp",
                    methodname_flat: "SteamAPI_ISteamInventory_GetResultTimestamp",
                    params: [{ paramname: "resultHandle", paramtype: "SteamInventoryResult_t" }],
                    returntype: "uint32"
                },
                {
                    methodname: "CheckResultSteamID",
                    methodname_flat: "SteamAPI_ISteamInventory_CheckResultSteamID",
                    params: [
                        { paramname: "resultHandle", paramtype: "SteamInventoryResult_t" },
                        { paramname: "steamIDExpected", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "DestroyResult",
                    methodname_flat: "SteamAPI_ISteamInventory_DestroyResult",
                    params: [{ paramname: "resultHandle", paramtype: "SteamInventoryResult_t" }],
                    returntype: "void"
                },
                {
                    methodname: "GetAllItems",
                    methodname_flat: "SteamAPI_ISteamInventory_GetAllItems",
                    params: [{ paramname: "pResultHandle", paramtype: "SteamInventoryResult_t *" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetItemsByID",
                    methodname_flat: "SteamAPI_ISteamInventory_GetItemsByID",
                    params: [
                        { paramname: "pResultHandle", paramtype: "SteamInventoryResult_t *" },
                        {
                            array_count: "unCountInstanceIDs",
                            paramname: "pInstanceIDs",
                            paramtype: "const SteamItemInstanceID_t *"
                        },
                        { paramname: "unCountInstanceIDs", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SerializeResult",
                    methodname_flat: "SteamAPI_ISteamInventory_SerializeResult",
                    params: [
                        { paramname: "resultHandle", paramtype: "SteamInventoryResult_t" },
                        {
                            out_buffer_count: "punOutBufferSize",
                            paramname: "pOutBuffer",
                            paramtype: "void *"
                        },
                        { paramname: "punOutBufferSize", paramtype: "uint32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "DeserializeResult",
                    methodname_flat: "SteamAPI_ISteamInventory_DeserializeResult",
                    params: [
                        { paramname: "pOutResultHandle", paramtype: "SteamInventoryResult_t *" },
                        {
                            buffer_count: "punOutBufferSize",
                            paramname: "pBuffer",
                            paramtype: "const void *"
                        },
                        { paramname: "unBufferSize", paramtype: "uint32" },
                        { paramname: "bRESERVED_MUST_BE_FALSE", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GenerateItems",
                    methodname_flat: "SteamAPI_ISteamInventory_GenerateItems",
                    params: [
                        { paramname: "pResultHandle", paramtype: "SteamInventoryResult_t *" },
                        {
                            array_count: "unArrayLength",
                            paramname: "pArrayItemDefs",
                            paramtype: "const SteamItemDef_t *"
                        },
                        {
                            array_count: "unArrayLength",
                            paramname: "punArrayQuantity",
                            paramtype: "const uint32 *"
                        },
                        { paramname: "unArrayLength", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GrantPromoItems",
                    methodname_flat: "SteamAPI_ISteamInventory_GrantPromoItems",
                    params: [{ paramname: "pResultHandle", paramtype: "SteamInventoryResult_t *" }],
                    returntype: "bool"
                },
                {
                    methodname: "AddPromoItem",
                    methodname_flat: "SteamAPI_ISteamInventory_AddPromoItem",
                    params: [
                        { paramname: "pResultHandle", paramtype: "SteamInventoryResult_t *" },
                        { paramname: "itemDef", paramtype: "SteamItemDef_t" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "AddPromoItems",
                    methodname_flat: "SteamAPI_ISteamInventory_AddPromoItems",
                    params: [
                        { paramname: "pResultHandle", paramtype: "SteamInventoryResult_t *" },
                        {
                            array_count: "unArrayLength",
                            paramname: "pArrayItemDefs",
                            paramtype: "const SteamItemDef_t *"
                        },
                        { paramname: "unArrayLength", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "ConsumeItem",
                    methodname_flat: "SteamAPI_ISteamInventory_ConsumeItem",
                    params: [
                        { paramname: "pResultHandle", paramtype: "SteamInventoryResult_t *" },
                        { paramname: "itemConsume", paramtype: "SteamItemInstanceID_t" },
                        { paramname: "unQuantity", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "ExchangeItems",
                    methodname_flat: "SteamAPI_ISteamInventory_ExchangeItems",
                    params: [
                        { paramname: "pResultHandle", paramtype: "SteamInventoryResult_t *" },
                        {
                            array_count: "unArrayGenerateLength",
                            paramname: "pArrayGenerate",
                            paramtype: "const SteamItemDef_t *"
                        },
                        {
                            array_count: "unArrayGenerateLength",
                            paramname: "punArrayGenerateQuantity",
                            paramtype: "const uint32 *"
                        },
                        { paramname: "unArrayGenerateLength", paramtype: "uint32" },
                        {
                            array_count: "unArrayDestroyLength",
                            paramname: "pArrayDestroy",
                            paramtype: "const SteamItemInstanceID_t *"
                        },
                        {
                            array_count: "unArrayDestroyLength",
                            paramname: "punArrayDestroyQuantity",
                            paramtype: "const uint32 *"
                        },
                        { paramname: "unArrayDestroyLength", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "TransferItemQuantity",
                    methodname_flat: "SteamAPI_ISteamInventory_TransferItemQuantity",
                    params: [
                        { paramname: "pResultHandle", paramtype: "SteamInventoryResult_t *" },
                        { paramname: "itemIdSource", paramtype: "SteamItemInstanceID_t" },
                        { paramname: "unQuantity", paramtype: "uint32" },
                        { paramname: "itemIdDest", paramtype: "SteamItemInstanceID_t" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SendItemDropHeartbeat",
                    methodname_flat: "SteamAPI_ISteamInventory_SendItemDropHeartbeat",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "TriggerItemDrop",
                    methodname_flat: "SteamAPI_ISteamInventory_TriggerItemDrop",
                    params: [
                        { paramname: "pResultHandle", paramtype: "SteamInventoryResult_t *" },
                        { paramname: "dropListDefinition", paramtype: "SteamItemDef_t" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "TradeItems",
                    methodname_flat: "SteamAPI_ISteamInventory_TradeItems",
                    params: [
                        { paramname: "pResultHandle", paramtype: "SteamInventoryResult_t *" },
                        { paramname: "steamIDTradePartner", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        {
                            array_count: "nArrayGiveLength",
                            paramname: "pArrayGive",
                            paramtype: "const SteamItemInstanceID_t *"
                        },
                        {
                            array_count: "nArrayGiveLength",
                            paramname: "pArrayGiveQuantity",
                            paramtype: "const uint32 *"
                        },
                        { paramname: "nArrayGiveLength", paramtype: "uint32" },
                        {
                            array_count: "nArrayGetLength",
                            paramname: "pArrayGet",
                            paramtype: "const SteamItemInstanceID_t *"
                        },
                        {
                            array_count: "nArrayGetLength",
                            paramname: "pArrayGetQuantity",
                            paramtype: "const uint32 *"
                        },
                        { paramname: "nArrayGetLength", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "LoadItemDefinitions",
                    methodname_flat: "SteamAPI_ISteamInventory_LoadItemDefinitions",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "GetItemDefinitionIDs",
                    methodname_flat: "SteamAPI_ISteamInventory_GetItemDefinitionIDs",
                    params: [
                        {
                            desc: "List of item definition IDs",
                            out_array_count: "punItemDefIDsArraySize",
                            paramname: "pItemDefIDs",
                            paramtype: "SteamItemDef_t *"
                        },
                        {
                            desc: "Size of array is passed in and actual size used is returned in this param",
                            paramname: "punItemDefIDsArraySize",
                            paramtype: "uint32 *"
                        },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetItemDefinitionProperty",
                    methodname_flat: "SteamAPI_ISteamInventory_GetItemDefinitionProperty",
                    params: [
                        { paramname: "iDefinition", paramtype: "SteamItemDef_t" },
                        { paramname: "pchPropertyName", paramtype: "const char *" },
                        {
                            out_string_count: "punValueBufferSizeOut",
                            paramname: "pchValueBuffer",
                            paramtype: "char *"
                        },
                        { paramname: "punValueBufferSizeOut", paramtype: "uint32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    callresult: "SteamInventoryEligiblePromoItemDefIDs_t",
                    methodname: "RequestEligiblePromoItemDefinitionsIDs",
                    methodname_flat: "SteamAPI_ISteamInventory_RequestEligiblePromoItemDefinitionsIDs",
                    params: [{ paramname: "steamID", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetEligiblePromoItemDefinitionIDs",
                    methodname_flat: "SteamAPI_ISteamInventory_GetEligiblePromoItemDefinitionIDs",
                    params: [
                        { paramname: "steamID", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        {
                            desc: "List of item definition IDs",
                            out_array_count: "punItemDefIDsArraySize",
                            paramname: "pItemDefIDs",
                            paramtype: "SteamItemDef_t *"
                        },
                        {
                            desc: "Size of array is passed in and actual size used is returned in this param",
                            paramname: "punItemDefIDsArraySize",
                            paramtype: "uint32 *"
                        },
                    ],
                    returntype: "bool"
                },
                {
                    callresult: "SteamInventoryStartPurchaseResult_t",
                    methodname: "StartPurchase",
                    methodname_flat: "SteamAPI_ISteamInventory_StartPurchase",
                    params: [
                        {
                            array_count: "unArrayLength",
                            paramname: "pArrayItemDefs",
                            paramtype: "const SteamItemDef_t *"
                        },
                        {
                            array_count: "unArrayLength",
                            paramname: "punArrayQuantity",
                            paramtype: "const uint32 *"
                        },
                        { paramname: "unArrayLength", paramtype: "uint32" },
                    ],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "SteamInventoryRequestPricesResult_t",
                    methodname: "RequestPrices",
                    methodname_flat: "SteamAPI_ISteamInventory_RequestPrices",
                    params: [],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetNumItemsWithPrices",
                    methodname_flat: "SteamAPI_ISteamInventory_GetNumItemsWithPrices",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "GetItemsWithPrices",
                    methodname_flat: "SteamAPI_ISteamInventory_GetItemsWithPrices",
                    params: [
                        {
                            array_count: "unArrayLength",
                            desc: "Items with prices",
                            out_array_count: "pArrayItemDefs",
                            paramname: "pArrayItemDefs",
                            paramtype: "SteamItemDef_t *"
                        },
                        {
                            array_count: "unArrayLength",
                            desc: "List of prices for the given item defs",
                            out_array_count: "pPrices",
                            paramname: "pCurrentPrices",
                            paramtype: "uint64 *"
                        },
                        {
                            array_count: "unArrayLength",
                            desc: "List of prices for the given item defs",
                            out_array_count: "pPrices",
                            paramname: "pBasePrices",
                            paramtype: "uint64 *"
                        },
                        { paramname: "unArrayLength", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetItemPrice",
                    methodname_flat: "SteamAPI_ISteamInventory_GetItemPrice",
                    params: [
                        { paramname: "iDefinition", paramtype: "SteamItemDef_t" },
                        { paramname: "pCurrentPrice", paramtype: "uint64 *" },
                        { paramname: "pBasePrice", paramtype: "uint64 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "StartUpdateProperties",
                    methodname_flat: "SteamAPI_ISteamInventory_StartUpdateProperties",
                    params: [],
                    returntype: "SteamInventoryUpdateHandle_t"
                },
                {
                    methodname: "RemoveProperty",
                    methodname_flat: "SteamAPI_ISteamInventory_RemoveProperty",
                    params: [
                        { paramname: "handle", paramtype: "SteamInventoryUpdateHandle_t" },
                        { paramname: "nItemID", paramtype: "SteamItemInstanceID_t" },
                        { paramname: "pchPropertyName", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetProperty",
                    methodname_flat: "SteamAPI_ISteamInventory_SetPropertyString",
                    params: [
                        { paramname: "handle", paramtype: "SteamInventoryUpdateHandle_t" },
                        { paramname: "nItemID", paramtype: "SteamItemInstanceID_t" },
                        { paramname: "pchPropertyName", paramtype: "const char *" },
                        { paramname: "pchPropertyValue", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetProperty",
                    methodname_flat: "SteamAPI_ISteamInventory_SetPropertyBool",
                    params: [
                        { paramname: "handle", paramtype: "SteamInventoryUpdateHandle_t" },
                        { paramname: "nItemID", paramtype: "SteamItemInstanceID_t" },
                        { paramname: "pchPropertyName", paramtype: "const char *" },
                        { paramname: "bValue", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetProperty",
                    methodname_flat: "SteamAPI_ISteamInventory_SetPropertyInt64",
                    params: [
                        { paramname: "handle", paramtype: "SteamInventoryUpdateHandle_t" },
                        { paramname: "nItemID", paramtype: "SteamItemInstanceID_t" },
                        { paramname: "pchPropertyName", paramtype: "const char *" },
                        { paramname: "nValue", paramtype: "int64" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetProperty",
                    methodname_flat: "SteamAPI_ISteamInventory_SetPropertyFloat",
                    params: [
                        { paramname: "handle", paramtype: "SteamInventoryUpdateHandle_t" },
                        { paramname: "nItemID", paramtype: "SteamItemInstanceID_t" },
                        { paramname: "pchPropertyName", paramtype: "const char *" },
                        { paramname: "flValue", paramtype: "float" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SubmitUpdateProperties",
                    methodname_flat: "SteamAPI_ISteamInventory_SubmitUpdateProperties",
                    params: [
                        { paramname: "handle", paramtype: "SteamInventoryUpdateHandle_t" },
                        { paramname: "pResultHandle", paramtype: "SteamInventoryResult_t *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "InspectItem",
                    methodname_flat: "SteamAPI_ISteamInventory_InspectItem",
                    params: [
                        { paramname: "pResultHandle", paramtype: "SteamInventoryResult_t *" },
                        { paramname: "pchItemToken", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
            ],
            version_string: "STEAMINVENTORY_INTERFACE_V003"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamVideo",
                    name_flat: "SteamAPI_SteamVideo_v002"
                },
            ],
            classname: "ISteamVideo",
            fields: [],
            methods: [
                {
                    methodname: "GetVideoURL",
                    methodname_flat: "SteamAPI_ISteamVideo_GetVideoURL",
                    params: [{ paramname: "unVideoAppID", paramtype: "AppId_t" }],
                    returntype: "void"
                },
                {
                    methodname: "IsBroadcasting",
                    methodname_flat: "SteamAPI_ISteamVideo_IsBroadcasting",
                    params: [{ paramname: "pnNumViewers", paramtype: "int *" }],
                    returntype: "bool"
                },
                {
                    callback: "GetOPFSettingsResult_t",
                    methodname: "GetOPFSettings",
                    methodname_flat: "SteamAPI_ISteamVideo_GetOPFSettings",
                    params: [{ paramname: "unVideoAppID", paramtype: "AppId_t" }],
                    returntype: "void"
                },
                {
                    methodname: "GetOPFStringForApp",
                    methodname_flat: "SteamAPI_ISteamVideo_GetOPFStringForApp",
                    params: [
                        { paramname: "unVideoAppID", paramtype: "AppId_t" },
                        { paramname: "pchBuffer", paramtype: "char *" },
                        { paramname: "pnBufferSize", paramtype: "int32 *" },
                    ],
                    returntype: "bool"
                },
            ],
            version_string: "STEAMVIDEO_INTERFACE_V002"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamParentalSettings",
                    name_flat: "SteamAPI_SteamParentalSettings_v001"
                },
            ],
            classname: "ISteamParentalSettings",
            fields: [],
            methods: [
                {
                    methodname: "BIsParentalLockEnabled",
                    methodname_flat: "SteamAPI_ISteamParentalSettings_BIsParentalLockEnabled",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "BIsParentalLockLocked",
                    methodname_flat: "SteamAPI_ISteamParentalSettings_BIsParentalLockLocked",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "BIsAppBlocked",
                    methodname_flat: "SteamAPI_ISteamParentalSettings_BIsAppBlocked",
                    params: [{ paramname: "nAppID", paramtype: "AppId_t" }],
                    returntype: "bool"
                },
                {
                    methodname: "BIsAppInBlockList",
                    methodname_flat: "SteamAPI_ISteamParentalSettings_BIsAppInBlockList",
                    params: [{ paramname: "nAppID", paramtype: "AppId_t" }],
                    returntype: "bool"
                },
                {
                    methodname: "BIsFeatureBlocked",
                    methodname_flat: "SteamAPI_ISteamParentalSettings_BIsFeatureBlocked",
                    params: [{ paramname: "eFeature", paramtype: "EParentalFeature" }],
                    returntype: "bool"
                },
                {
                    methodname: "BIsFeatureInBlockList",
                    methodname_flat: "SteamAPI_ISteamParentalSettings_BIsFeatureInBlockList",
                    params: [{ paramname: "eFeature", paramtype: "EParentalFeature" }],
                    returntype: "bool"
                },
            ],
            version_string: "STEAMPARENTALSETTINGS_INTERFACE_VERSION001"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamRemotePlay",
                    name_flat: "SteamAPI_SteamRemotePlay_v001"
                },
            ],
            classname: "ISteamRemotePlay",
            fields: [],
            methods: [
                {
                    methodname: "GetSessionCount",
                    methodname_flat: "SteamAPI_ISteamRemotePlay_GetSessionCount",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "GetSessionID",
                    methodname_flat: "SteamAPI_ISteamRemotePlay_GetSessionID",
                    params: [{ paramname: "iSessionIndex", paramtype: "int" }],
                    returntype: "RemotePlaySessionID_t"
                },
                {
                    methodname: "GetSessionSteamID",
                    methodname_flat: "SteamAPI_ISteamRemotePlay_GetSessionSteamID",
                    params: [{ paramname: "unSessionID", paramtype: "RemotePlaySessionID_t" }],
                    returntype: "CSteamID",
                    returntype_flat: "uint64_steamid"
                },
                {
                    methodname: "GetSessionClientName",
                    methodname_flat: "SteamAPI_ISteamRemotePlay_GetSessionClientName",
                    params: [{ paramname: "unSessionID", paramtype: "RemotePlaySessionID_t" }],
                    returntype: "const char *"
                },
                {
                    methodname: "GetSessionClientFormFactor",
                    methodname_flat: "SteamAPI_ISteamRemotePlay_GetSessionClientFormFactor",
                    params: [{ paramname: "unSessionID", paramtype: "RemotePlaySessionID_t" }],
                    returntype: "ESteamDeviceFormFactor"
                },
                {
                    methodname: "BGetSessionClientResolution",
                    methodname_flat: "SteamAPI_ISteamRemotePlay_BGetSessionClientResolution",
                    params: [
                        { paramname: "unSessionID", paramtype: "RemotePlaySessionID_t" },
                        { paramname: "pnResolutionX", paramtype: "int *" },
                        { paramname: "pnResolutionY", paramtype: "int *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "BSendRemotePlayTogetherInvite",
                    methodname_flat: "SteamAPI_ISteamRemotePlay_BSendRemotePlayTogetherInvite",
                    params: [{ paramname: "steamIDFriend", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "bool"
                },
            ],
            version_string: "STEAMREMOTEPLAY_INTERFACE_VERSION001"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamNetworkingMessages_SteamAPI",
                    name_flat: "SteamAPI_SteamNetworkingMessages_SteamAPI_v002"
                },
                {
                    kind: "gameserver",
                    name: "SteamGameServerNetworkingMessages_SteamAPI",
                    name_flat: "SteamAPI_SteamGameServerNetworkingMessages_SteamAPI_v002"
                },
            ],
            classname: "ISteamNetworkingMessages",
            fields: [],
            methods: [
                {
                    methodname: "SendMessageToUser",
                    methodname_flat: "SteamAPI_ISteamNetworkingMessages_SendMessageToUser",
                    params: [
                        { paramname: "identityRemote", paramtype: "const SteamNetworkingIdentity &" },
                        { paramname: "pubData", paramtype: "const void *" },
                        { paramname: "cubData", paramtype: "uint32" },
                        { paramname: "nSendFlags", paramtype: "int" },
                        { paramname: "nRemoteChannel", paramtype: "int" },
                    ],
                    returntype: "EResult"
                },
                {
                    methodname: "ReceiveMessagesOnChannel",
                    methodname_flat: "SteamAPI_ISteamNetworkingMessages_ReceiveMessagesOnChannel",
                    params: [
                        { paramname: "nLocalChannel", paramtype: "int" },
                        { paramname: "ppOutMessages", paramtype: "SteamNetworkingMessage_t **" },
                        { paramname: "nMaxMessages", paramtype: "int" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "AcceptSessionWithUser",
                    methodname_flat: "SteamAPI_ISteamNetworkingMessages_AcceptSessionWithUser",
                    params: [{ paramname: "identityRemote", paramtype: "const SteamNetworkingIdentity &" }],
                    returntype: "bool"
                },
                {
                    methodname: "CloseSessionWithUser",
                    methodname_flat: "SteamAPI_ISteamNetworkingMessages_CloseSessionWithUser",
                    params: [{ paramname: "identityRemote", paramtype: "const SteamNetworkingIdentity &" }],
                    returntype: "bool"
                },
                {
                    methodname: "CloseChannelWithUser",
                    methodname_flat: "SteamAPI_ISteamNetworkingMessages_CloseChannelWithUser",
                    params: [
                        { paramname: "identityRemote", paramtype: "const SteamNetworkingIdentity &" },
                        { paramname: "nLocalChannel", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetSessionConnectionInfo",
                    methodname_flat: "SteamAPI_ISteamNetworkingMessages_GetSessionConnectionInfo",
                    params: [
                        { paramname: "identityRemote", paramtype: "const SteamNetworkingIdentity &" },
                        { paramname: "pConnectionInfo", paramtype: "SteamNetConnectionInfo_t *" },
                        { paramname: "pQuickStatus", paramtype: "SteamNetConnectionRealTimeStatus_t *" },
                    ],
                    returntype: "ESteamNetworkingConnectionState"
                },
            ],
            version_string: "SteamNetworkingMessages002"
        },
        {
            accessors: [
                {
                    kind: "user",
                    name: "SteamNetworkingSockets_SteamAPI",
                    name_flat: "SteamAPI_SteamNetworkingSockets_SteamAPI_v012"
                },
                {
                    kind: "gameserver",
                    name: "SteamGameServerNetworkingSockets_SteamAPI",
                    name_flat: "SteamAPI_SteamGameServerNetworkingSockets_SteamAPI_v012"
                },
            ],
            classname: "ISteamNetworkingSockets",
            fields: [],
            methods: [
                {
                    methodname: "CreateListenSocketIP",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_CreateListenSocketIP",
                    params: [
                        { paramname: "localAddress", paramtype: "const SteamNetworkingIPAddr &" },
                        { paramname: "nOptions", paramtype: "int" },
                        { paramname: "pOptions", paramtype: "const SteamNetworkingConfigValue_t *" },
                    ],
                    returntype: "HSteamListenSocket"
                },
                {
                    methodname: "ConnectByIPAddress",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_ConnectByIPAddress",
                    params: [
                        { paramname: "address", paramtype: "const SteamNetworkingIPAddr &" },
                        { paramname: "nOptions", paramtype: "int" },
                        { paramname: "pOptions", paramtype: "const SteamNetworkingConfigValue_t *" },
                    ],
                    returntype: "HSteamNetConnection"
                },
                {
                    methodname: "CreateListenSocketP2P",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_CreateListenSocketP2P",
                    params: [
                        { paramname: "nLocalVirtualPort", paramtype: "int" },
                        { paramname: "nOptions", paramtype: "int" },
                        { paramname: "pOptions", paramtype: "const SteamNetworkingConfigValue_t *" },
                    ],
                    returntype: "HSteamListenSocket"
                },
                {
                    methodname: "ConnectP2P",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_ConnectP2P",
                    params: [
                        { paramname: "identityRemote", paramtype: "const SteamNetworkingIdentity &" },
                        { paramname: "nRemoteVirtualPort", paramtype: "int" },
                        { paramname: "nOptions", paramtype: "int" },
                        { paramname: "pOptions", paramtype: "const SteamNetworkingConfigValue_t *" },
                    ],
                    returntype: "HSteamNetConnection"
                },
                {
                    methodname: "AcceptConnection",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_AcceptConnection",
                    params: [{ paramname: "hConn", paramtype: "HSteamNetConnection" }],
                    returntype: "EResult"
                },
                {
                    methodname: "CloseConnection",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_CloseConnection",
                    params: [
                        { paramname: "hPeer", paramtype: "HSteamNetConnection" },
                        { paramname: "nReason", paramtype: "int" },
                        { paramname: "pszDebug", paramtype: "const char *" },
                        { paramname: "bEnableLinger", paramtype: "bool" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "CloseListenSocket",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_CloseListenSocket",
                    params: [{ paramname: "hSocket", paramtype: "HSteamListenSocket" }],
                    returntype: "bool"
                },
                {
                    methodname: "SetConnectionUserData",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_SetConnectionUserData",
                    params: [
                        { paramname: "hPeer", paramtype: "HSteamNetConnection" },
                        { paramname: "nUserData", paramtype: "int64" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetConnectionUserData",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_GetConnectionUserData",
                    params: [{ paramname: "hPeer", paramtype: "HSteamNetConnection" }],
                    returntype: "int64"
                },
                {
                    methodname: "SetConnectionName",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_SetConnectionName",
                    params: [
                        { paramname: "hPeer", paramtype: "HSteamNetConnection" },
                        { paramname: "pszName", paramtype: "const char *" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "GetConnectionName",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_GetConnectionName",
                    params: [
                        { paramname: "hPeer", paramtype: "HSteamNetConnection" },
                        { paramname: "pszName", paramtype: "char *" },
                        { paramname: "nMaxLen", paramtype: "int" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SendMessageToConnection",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_SendMessageToConnection",
                    params: [
                        { paramname: "hConn", paramtype: "HSteamNetConnection" },
                        { paramname: "pData", paramtype: "const void *" },
                        { paramname: "cbData", paramtype: "uint32" },
                        { paramname: "nSendFlags", paramtype: "int" },
                        { paramname: "pOutMessageNumber", paramtype: "int64 *" },
                    ],
                    returntype: "EResult"
                },
                {
                    methodname: "SendMessages",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_SendMessages",
                    params: [
                        { paramname: "nMessages", paramtype: "int" },
                        { paramname: "pMessages", paramtype: "SteamNetworkingMessage_t *const *" },
                        { paramname: "pOutMessageNumberOrResult", paramtype: "int64 *" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "FlushMessagesOnConnection",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_FlushMessagesOnConnection",
                    params: [{ paramname: "hConn", paramtype: "HSteamNetConnection" }],
                    returntype: "EResult"
                },
                {
                    methodname: "ReceiveMessagesOnConnection",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_ReceiveMessagesOnConnection",
                    params: [
                        { paramname: "hConn", paramtype: "HSteamNetConnection" },
                        { paramname: "ppOutMessages", paramtype: "SteamNetworkingMessage_t **" },
                        { paramname: "nMaxMessages", paramtype: "int" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "GetConnectionInfo",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_GetConnectionInfo",
                    params: [
                        { paramname: "hConn", paramtype: "HSteamNetConnection" },
                        { paramname: "pInfo", paramtype: "SteamNetConnectionInfo_t *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetConnectionRealTimeStatus",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_GetConnectionRealTimeStatus",
                    params: [
                        { paramname: "hConn", paramtype: "HSteamNetConnection" },
                        { paramname: "pStatus", paramtype: "SteamNetConnectionRealTimeStatus_t *" },
                        { paramname: "nLanes", paramtype: "int" },
                        { paramname: "pLanes", paramtype: "SteamNetConnectionRealTimeLaneStatus_t *" },
                    ],
                    returntype: "EResult"
                },
                {
                    methodname: "GetDetailedConnectionStatus",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_GetDetailedConnectionStatus",
                    params: [
                        { paramname: "hConn", paramtype: "HSteamNetConnection" },
                        { paramname: "pszBuf", paramtype: "char *" },
                        { paramname: "cbBuf", paramtype: "int" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "GetListenSocketAddress",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_GetListenSocketAddress",
                    params: [
                        { paramname: "hSocket", paramtype: "HSteamListenSocket" },
                        { paramname: "address", paramtype: "SteamNetworkingIPAddr *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "CreateSocketPair",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_CreateSocketPair",
                    params: [
                        { paramname: "pOutConnection1", paramtype: "HSteamNetConnection *" },
                        { paramname: "pOutConnection2", paramtype: "HSteamNetConnection *" },
                        { paramname: "bUseNetworkLoopback", paramtype: "bool" },
                        { paramname: "pIdentity1", paramtype: "const SteamNetworkingIdentity *" },
                        { paramname: "pIdentity2", paramtype: "const SteamNetworkingIdentity *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "ConfigureConnectionLanes",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_ConfigureConnectionLanes",
                    params: [
                        { paramname: "hConn", paramtype: "HSteamNetConnection" },
                        { paramname: "nNumLanes", paramtype: "int" },
                        { paramname: "pLanePriorities", paramtype: "const int *" },
                        { paramname: "pLaneWeights", paramtype: "const uint16 *" },
                    ],
                    returntype: "EResult"
                },
                {
                    methodname: "GetIdentity",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_GetIdentity",
                    params: [{ paramname: "pIdentity", paramtype: "SteamNetworkingIdentity *" }],
                    returntype: "bool"
                },
                {
                    methodname: "InitAuthentication",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_InitAuthentication",
                    params: [],
                    returntype: "ESteamNetworkingAvailability"
                },
                {
                    methodname: "GetAuthenticationStatus",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_GetAuthenticationStatus",
                    params: [{ paramname: "pDetails", paramtype: "SteamNetAuthenticationStatus_t *" }],
                    returntype: "ESteamNetworkingAvailability"
                },
                {
                    methodname: "CreatePollGroup",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_CreatePollGroup",
                    params: [],
                    returntype: "HSteamNetPollGroup"
                },
                {
                    methodname: "DestroyPollGroup",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_DestroyPollGroup",
                    params: [{ paramname: "hPollGroup", paramtype: "HSteamNetPollGroup" }],
                    returntype: "bool"
                },
                {
                    methodname: "SetConnectionPollGroup",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_SetConnectionPollGroup",
                    params: [
                        { paramname: "hConn", paramtype: "HSteamNetConnection" },
                        { paramname: "hPollGroup", paramtype: "HSteamNetPollGroup" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "ReceiveMessagesOnPollGroup",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_ReceiveMessagesOnPollGroup",
                    params: [
                        { paramname: "hPollGroup", paramtype: "HSteamNetPollGroup" },
                        { paramname: "ppOutMessages", paramtype: "SteamNetworkingMessage_t **" },
                        { paramname: "nMaxMessages", paramtype: "int" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "ReceivedRelayAuthTicket",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_ReceivedRelayAuthTicket",
                    params: [
                        { paramname: "pvTicket", paramtype: "const void *" },
                        { paramname: "cbTicket", paramtype: "int" },
                        { paramname: "pOutParsedTicket", paramtype: "SteamDatagramRelayAuthTicket *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "FindRelayAuthTicketForServer",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_FindRelayAuthTicketForServer",
                    params: [
                        { paramname: "identityGameServer", paramtype: "const SteamNetworkingIdentity &" },
                        { paramname: "nRemoteVirtualPort", paramtype: "int" },
                        { paramname: "pOutParsedTicket", paramtype: "SteamDatagramRelayAuthTicket *" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "ConnectToHostedDedicatedServer",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_ConnectToHostedDedicatedServer",
                    params: [
                        { paramname: "identityTarget", paramtype: "const SteamNetworkingIdentity &" },
                        { paramname: "nRemoteVirtualPort", paramtype: "int" },
                        { paramname: "nOptions", paramtype: "int" },
                        { paramname: "pOptions", paramtype: "const SteamNetworkingConfigValue_t *" },
                    ],
                    returntype: "HSteamNetConnection"
                },
                {
                    methodname: "GetHostedDedicatedServerPort",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_GetHostedDedicatedServerPort",
                    params: [],
                    returntype: "uint16"
                },
                {
                    methodname: "GetHostedDedicatedServerPOPID",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_GetHostedDedicatedServerPOPID",
                    params: [],
                    returntype: "SteamNetworkingPOPID"
                },
                {
                    methodname: "GetHostedDedicatedServerAddress",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_GetHostedDedicatedServerAddress",
                    params: [{ paramname: "pRouting", paramtype: "SteamDatagramHostedAddress *" }],
                    returntype: "EResult"
                },
                {
                    methodname: "CreateHostedDedicatedServerListenSocket",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_CreateHostedDedicatedServerListenSocket",
                    params: [
                        { paramname: "nLocalVirtualPort", paramtype: "int" },
                        { paramname: "nOptions", paramtype: "int" },
                        { paramname: "pOptions", paramtype: "const SteamNetworkingConfigValue_t *" },
                    ],
                    returntype: "HSteamListenSocket"
                },
                {
                    methodname: "GetGameCoordinatorServerLogin",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_GetGameCoordinatorServerLogin",
                    params: [
                        { paramname: "pLoginInfo", paramtype: "SteamDatagramGameCoordinatorServerLogin *" },
                        { paramname: "pcbSignedBlob", paramtype: "int *" },
                        { paramname: "pBlob", paramtype: "void *" },
                    ],
                    returntype: "EResult"
                },
                {
                    methodname: "ConnectP2PCustomSignaling",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_ConnectP2PCustomSignaling",
                    params: [
                        { paramname: "pSignaling", paramtype: "ISteamNetworkingConnectionSignaling *" },
                        { paramname: "pPeerIdentity", paramtype: "const SteamNetworkingIdentity *" },
                        { paramname: "nRemoteVirtualPort", paramtype: "int" },
                        { paramname: "nOptions", paramtype: "int" },
                        { paramname: "pOptions", paramtype: "const SteamNetworkingConfigValue_t *" },
                    ],
                    returntype: "HSteamNetConnection"
                },
                {
                    methodname: "ReceivedP2PCustomSignal",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_ReceivedP2PCustomSignal",
                    params: [
                        { paramname: "pMsg", paramtype: "const void *" },
                        { paramname: "cbMsg", paramtype: "int" },
                        { paramname: "pContext", paramtype: "ISteamNetworkingSignalingRecvContext *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetCertificateRequest",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_GetCertificateRequest",
                    params: [
                        { paramname: "pcbBlob", paramtype: "int *" },
                        { paramname: "pBlob", paramtype: "void *" },
                        { paramname: "errMsg", paramtype: "SteamNetworkingErrMsg &" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetCertificate",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_SetCertificate",
                    params: [
                        { paramname: "pCertificate", paramtype: "const void *" },
                        { paramname: "cbCertificate", paramtype: "int" },
                        { paramname: "errMsg", paramtype: "SteamNetworkingErrMsg &" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "ResetIdentity",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_ResetIdentity",
                    params: [{ paramname: "pIdentity", paramtype: "const SteamNetworkingIdentity *" }],
                    returntype: "void"
                },
                {
                    methodname: "RunCallbacks",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_RunCallbacks",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "BeginAsyncRequestFakeIP",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_BeginAsyncRequestFakeIP",
                    params: [{ paramname: "nNumPorts", paramtype: "int" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetFakeIP",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_GetFakeIP",
                    params: [
                        { paramname: "idxFirstPort", paramtype: "int" },
                        { paramname: "pInfo", paramtype: "SteamNetworkingFakeIPResult_t *" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "CreateListenSocketP2PFakeIP",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_CreateListenSocketP2PFakeIP",
                    params: [
                        { paramname: "idxFakePort", paramtype: "int" },
                        { paramname: "nOptions", paramtype: "int" },
                        { paramname: "pOptions", paramtype: "const SteamNetworkingConfigValue_t *" },
                    ],
                    returntype: "HSteamListenSocket"
                },
                {
                    methodname: "GetRemoteFakeIPForConnection",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_GetRemoteFakeIPForConnection",
                    params: [
                        { paramname: "hConn", paramtype: "HSteamNetConnection" },
                        { paramname: "pOutAddr", paramtype: "SteamNetworkingIPAddr *" },
                    ],
                    returntype: "EResult"
                },
                {
                    methodname: "CreateFakeUDPPort",
                    methodname_flat: "SteamAPI_ISteamNetworkingSockets_CreateFakeUDPPort",
                    params: [{ paramname: "idxFakeServerPort", paramtype: "int" }],
                    returntype: "ISteamNetworkingFakeUDPPort *"
                },
            ],
            version_string: "SteamNetworkingSockets012"
        },
        {
            accessors: [
                {
                    kind: "global",
                    name: "SteamNetworkingUtils_SteamAPI",
                    name_flat: "SteamAPI_SteamNetworkingUtils_SteamAPI_v004"
                },
            ],
            classname: "ISteamNetworkingUtils",
            fields: [],
            methods: [
                {
                    methodname: "AllocateMessage",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_AllocateMessage",
                    params: [{ paramname: "cbAllocateBuffer", paramtype: "int" }],
                    returntype: "SteamNetworkingMessage_t *"
                },
                {
                    methodname: "InitRelayNetworkAccess",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_InitRelayNetworkAccess",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "GetRelayNetworkStatus",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_GetRelayNetworkStatus",
                    params: [{ paramname: "pDetails", paramtype: "SteamRelayNetworkStatus_t *" }],
                    returntype: "ESteamNetworkingAvailability"
                },
                {
                    methodname: "GetLocalPingLocation",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_GetLocalPingLocation",
                    params: [{ paramname: "result", paramtype: "SteamNetworkPingLocation_t &" }],
                    returntype: "float"
                },
                {
                    methodname: "EstimatePingTimeBetweenTwoLocations",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_EstimatePingTimeBetweenTwoLocations",
                    params: [
                        { paramname: "location1", paramtype: "const SteamNetworkPingLocation_t &" },
                        { paramname: "location2", paramtype: "const SteamNetworkPingLocation_t &" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "EstimatePingTimeFromLocalHost",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_EstimatePingTimeFromLocalHost",
                    params: [{ paramname: "remoteLocation", paramtype: "const SteamNetworkPingLocation_t &" }],
                    returntype: "int"
                },
                {
                    methodname: "ConvertPingLocationToString",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_ConvertPingLocationToString",
                    params: [
                        { paramname: "location", paramtype: "const SteamNetworkPingLocation_t &" },
                        { paramname: "pszBuf", paramtype: "char *" },
                        { paramname: "cchBufSize", paramtype: "int" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "ParsePingLocationString",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_ParsePingLocationString",
                    params: [
                        { paramname: "pszString", paramtype: "const char *" },
                        { paramname: "result", paramtype: "SteamNetworkPingLocation_t &" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "CheckPingDataUpToDate",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_CheckPingDataUpToDate",
                    params: [{ paramname: "flMaxAgeSeconds", paramtype: "float" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetPingToDataCenter",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_GetPingToDataCenter",
                    params: [
                        { paramname: "popID", paramtype: "SteamNetworkingPOPID" },
                        { paramname: "pViaRelayPoP", paramtype: "SteamNetworkingPOPID *" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "GetDirectPingToPOP",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_GetDirectPingToPOP",
                    params: [{ paramname: "popID", paramtype: "SteamNetworkingPOPID" }],
                    returntype: "int"
                },
                {
                    methodname: "GetPOPCount",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_GetPOPCount",
                    params: [],
                    returntype: "int"
                },
                {
                    methodname: "GetPOPList",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_GetPOPList",
                    params: [
                        { paramname: "list", paramtype: "SteamNetworkingPOPID *" },
                        { paramname: "nListSz", paramtype: "int" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "GetLocalTimestamp",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_GetLocalTimestamp",
                    params: [],
                    returntype: "SteamNetworkingMicroseconds"
                },
                {
                    methodname: "SetDebugOutputFunction",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SetDebugOutputFunction",
                    params: [
                        { paramname: "eDetailLevel", paramtype: "ESteamNetworkingSocketsDebugOutputType" },
                        { paramname: "pfnFunc", paramtype: "FSteamNetworkingSocketsDebugOutput" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "IsFakeIPv4",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_IsFakeIPv4",
                    params: [{ paramname: "nIPv4", paramtype: "uint32" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetIPv4FakeIPType",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_GetIPv4FakeIPType",
                    params: [{ paramname: "nIPv4", paramtype: "uint32" }],
                    returntype: "ESteamNetworkingFakeIPType"
                },
                {
                    methodname: "GetRealIdentityForFakeIP",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_GetRealIdentityForFakeIP",
                    params: [
                        { paramname: "fakeIP", paramtype: "const SteamNetworkingIPAddr &" },
                        { paramname: "pOutRealIdentity", paramtype: "SteamNetworkingIdentity *" },
                    ],
                    returntype: "EResult"
                },
                {
                    methodname: "SetGlobalConfigValueInt32",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SetGlobalConfigValueInt32",
                    params: [
                        { paramname: "eValue", paramtype: "ESteamNetworkingConfigValue" },
                        { paramname: "val", paramtype: "int32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetGlobalConfigValueFloat",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SetGlobalConfigValueFloat",
                    params: [
                        { paramname: "eValue", paramtype: "ESteamNetworkingConfigValue" },
                        { paramname: "val", paramtype: "float" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetGlobalConfigValueString",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SetGlobalConfigValueString",
                    params: [
                        { paramname: "eValue", paramtype: "ESteamNetworkingConfigValue" },
                        { paramname: "val", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetGlobalConfigValuePtr",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SetGlobalConfigValuePtr",
                    params: [
                        { paramname: "eValue", paramtype: "ESteamNetworkingConfigValue" },
                        { paramname: "val", paramtype: "void *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetConnectionConfigValueInt32",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SetConnectionConfigValueInt32",
                    params: [
                        { paramname: "hConn", paramtype: "HSteamNetConnection" },
                        { paramname: "eValue", paramtype: "ESteamNetworkingConfigValue" },
                        { paramname: "val", paramtype: "int32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetConnectionConfigValueFloat",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SetConnectionConfigValueFloat",
                    params: [
                        { paramname: "hConn", paramtype: "HSteamNetConnection" },
                        { paramname: "eValue", paramtype: "ESteamNetworkingConfigValue" },
                        { paramname: "val", paramtype: "float" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetConnectionConfigValueString",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SetConnectionConfigValueString",
                    params: [
                        { paramname: "hConn", paramtype: "HSteamNetConnection" },
                        { paramname: "eValue", paramtype: "ESteamNetworkingConfigValue" },
                        { paramname: "val", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetGlobalCallback_SteamNetConnectionStatusChanged",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SetGlobalCallback_SteamNetConnectionStatusChanged",
                    params: [{ paramname: "fnCallback", paramtype: "FnSteamNetConnectionStatusChanged" }],
                    returntype: "bool"
                },
                {
                    methodname: "SetGlobalCallback_SteamNetAuthenticationStatusChanged",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SetGlobalCallback_SteamNetAuthenticationStatusChanged",
                    params: [{ paramname: "fnCallback", paramtype: "FnSteamNetAuthenticationStatusChanged" }],
                    returntype: "bool"
                },
                {
                    methodname: "SetGlobalCallback_SteamRelayNetworkStatusChanged",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SetGlobalCallback_SteamRelayNetworkStatusChanged",
                    params: [{ paramname: "fnCallback", paramtype: "FnSteamRelayNetworkStatusChanged" }],
                    returntype: "bool"
                },
                {
                    methodname: "SetGlobalCallback_FakeIPResult",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SetGlobalCallback_FakeIPResult",
                    params: [{ paramname: "fnCallback", paramtype: "FnSteamNetworkingFakeIPResult" }],
                    returntype: "bool"
                },
                {
                    methodname: "SetGlobalCallback_MessagesSessionRequest",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SetGlobalCallback_MessagesSessionRequest",
                    params: [{ paramname: "fnCallback", paramtype: "FnSteamNetworkingMessagesSessionRequest" }],
                    returntype: "bool"
                },
                {
                    methodname: "SetGlobalCallback_MessagesSessionFailed",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SetGlobalCallback_MessagesSessionFailed",
                    params: [{ paramname: "fnCallback", paramtype: "FnSteamNetworkingMessagesSessionFailed" }],
                    returntype: "bool"
                },
                {
                    methodname: "SetConfigValue",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SetConfigValue",
                    params: [
                        { paramname: "eValue", paramtype: "ESteamNetworkingConfigValue" },
                        { paramname: "eScopeType", paramtype: "ESteamNetworkingConfigScope" },
                        { paramname: "scopeObj", paramtype: "intptr_t" },
                        { paramname: "eDataType", paramtype: "ESteamNetworkingConfigDataType" },
                        { paramname: "pArg", paramtype: "const void *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetConfigValueStruct",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SetConfigValueStruct",
                    params: [
                        { paramname: "opt", paramtype: "const SteamNetworkingConfigValue_t &" },
                        { paramname: "eScopeType", paramtype: "ESteamNetworkingConfigScope" },
                        { paramname: "scopeObj", paramtype: "intptr_t" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetConfigValue",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_GetConfigValue",
                    params: [
                        { paramname: "eValue", paramtype: "ESteamNetworkingConfigValue" },
                        { paramname: "eScopeType", paramtype: "ESteamNetworkingConfigScope" },
                        { paramname: "scopeObj", paramtype: "intptr_t" },
                        { paramname: "pOutDataType", paramtype: "ESteamNetworkingConfigDataType *" },
                        { paramname: "pResult", paramtype: "void *" },
                        { paramname: "cbResult", paramtype: "size_t *" },
                    ],
                    returntype: "ESteamNetworkingGetConfigValueResult"
                },
                {
                    methodname: "GetConfigValueInfo",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_GetConfigValueInfo",
                    params: [
                        { paramname: "eValue", paramtype: "ESteamNetworkingConfigValue" },
                        { paramname: "pOutDataType", paramtype: "ESteamNetworkingConfigDataType *" },
                        { paramname: "pOutScope", paramtype: "ESteamNetworkingConfigScope *" },
                    ],
                    returntype: "const char *"
                },
                {
                    methodname: "IterateGenericEditableConfigValues",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_IterateGenericEditableConfigValues",
                    params: [
                        { paramname: "eCurrent", paramtype: "ESteamNetworkingConfigValue" },
                        { paramname: "bEnumerateDevVars", paramtype: "bool" },
                    ],
                    returntype: "ESteamNetworkingConfigValue"
                },
                {
                    methodname: "SteamNetworkingIPAddr_ToString",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SteamNetworkingIPAddr_ToString",
                    params: [
                        { paramname: "addr", paramtype: "const SteamNetworkingIPAddr &" },
                        { paramname: "buf", paramtype: "char *" },
                        { paramname: "cbBuf", paramtype: "uint32" },
                        { paramname: "bWithPort", paramtype: "bool" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SteamNetworkingIPAddr_ParseString",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SteamNetworkingIPAddr_ParseString",
                    params: [
                        { paramname: "pAddr", paramtype: "SteamNetworkingIPAddr *" },
                        { paramname: "pszStr", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SteamNetworkingIPAddr_GetFakeIPType",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SteamNetworkingIPAddr_GetFakeIPType",
                    params: [{ paramname: "addr", paramtype: "const SteamNetworkingIPAddr &" }],
                    returntype: "ESteamNetworkingFakeIPType"
                },
                {
                    methodname: "SteamNetworkingIdentity_ToString",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SteamNetworkingIdentity_ToString",
                    params: [
                        { paramname: "identity", paramtype: "const SteamNetworkingIdentity &" },
                        { paramname: "buf", paramtype: "char *" },
                        { paramname: "cbBuf", paramtype: "uint32" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SteamNetworkingIdentity_ParseString",
                    methodname_flat: "SteamAPI_ISteamNetworkingUtils_SteamNetworkingIdentity_ParseString",
                    params: [
                        { paramname: "pIdentity", paramtype: "SteamNetworkingIdentity *" },
                        { paramname: "pszStr", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
            ],
            version_string: "SteamNetworkingUtils004"
        },
        {
            accessors: [
                {
                    kind: "gameserver",
                    name: "SteamGameServer",
                    name_flat: "SteamAPI_SteamGameServer_v014"
                },
            ],
            classname: "ISteamGameServer",
            fields: [],
            methods: [
                {
                    methodname: "SetProduct",
                    methodname_flat: "SteamAPI_ISteamGameServer_SetProduct",
                    params: [{ paramname: "pszProduct", paramtype: "const char *" }],
                    returntype: "void"
                },
                {
                    methodname: "SetGameDescription",
                    methodname_flat: "SteamAPI_ISteamGameServer_SetGameDescription",
                    params: [{ paramname: "pszGameDescription", paramtype: "const char *" }],
                    returntype: "void"
                },
                {
                    methodname: "SetModDir",
                    methodname_flat: "SteamAPI_ISteamGameServer_SetModDir",
                    params: [{ paramname: "pszModDir", paramtype: "const char *" }],
                    returntype: "void"
                },
                {
                    methodname: "SetDedicatedServer",
                    methodname_flat: "SteamAPI_ISteamGameServer_SetDedicatedServer",
                    params: [{ paramname: "bDedicated", paramtype: "bool" }],
                    returntype: "void"
                },
                {
                    methodname: "LogOn",
                    methodname_flat: "SteamAPI_ISteamGameServer_LogOn",
                    params: [{ paramname: "pszToken", paramtype: "const char *" }],
                    returntype: "void"
                },
                {
                    methodname: "LogOnAnonymous",
                    methodname_flat: "SteamAPI_ISteamGameServer_LogOnAnonymous",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "LogOff",
                    methodname_flat: "SteamAPI_ISteamGameServer_LogOff",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "BLoggedOn",
                    methodname_flat: "SteamAPI_ISteamGameServer_BLoggedOn",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "BSecure",
                    methodname_flat: "SteamAPI_ISteamGameServer_BSecure",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "GetSteamID",
                    methodname_flat: "SteamAPI_ISteamGameServer_GetSteamID",
                    params: [],
                    returntype: "CSteamID",
                    returntype_flat: "uint64_steamid"
                },
                {
                    methodname: "WasRestartRequested",
                    methodname_flat: "SteamAPI_ISteamGameServer_WasRestartRequested",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "SetMaxPlayerCount",
                    methodname_flat: "SteamAPI_ISteamGameServer_SetMaxPlayerCount",
                    params: [{ paramname: "cPlayersMax", paramtype: "int" }],
                    returntype: "void"
                },
                {
                    methodname: "SetBotPlayerCount",
                    methodname_flat: "SteamAPI_ISteamGameServer_SetBotPlayerCount",
                    params: [{ paramname: "cBotplayers", paramtype: "int" }],
                    returntype: "void"
                },
                {
                    methodname: "SetServerName",
                    methodname_flat: "SteamAPI_ISteamGameServer_SetServerName",
                    params: [{ paramname: "pszServerName", paramtype: "const char *" }],
                    returntype: "void"
                },
                {
                    methodname: "SetMapName",
                    methodname_flat: "SteamAPI_ISteamGameServer_SetMapName",
                    params: [{ paramname: "pszMapName", paramtype: "const char *" }],
                    returntype: "void"
                },
                {
                    methodname: "SetPasswordProtected",
                    methodname_flat: "SteamAPI_ISteamGameServer_SetPasswordProtected",
                    params: [{ paramname: "bPasswordProtected", paramtype: "bool" }],
                    returntype: "void"
                },
                {
                    methodname: "SetSpectatorPort",
                    methodname_flat: "SteamAPI_ISteamGameServer_SetSpectatorPort",
                    params: [{ paramname: "unSpectatorPort", paramtype: "uint16" }],
                    returntype: "void"
                },
                {
                    methodname: "SetSpectatorServerName",
                    methodname_flat: "SteamAPI_ISteamGameServer_SetSpectatorServerName",
                    params: [{ paramname: "pszSpectatorServerName", paramtype: "const char *" }],
                    returntype: "void"
                },
                {
                    methodname: "ClearAllKeyValues",
                    methodname_flat: "SteamAPI_ISteamGameServer_ClearAllKeyValues",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "SetKeyValue",
                    methodname_flat: "SteamAPI_ISteamGameServer_SetKeyValue",
                    params: [
                        { paramname: "pKey", paramtype: "const char *" },
                        { paramname: "pValue", paramtype: "const char *" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SetGameTags",
                    methodname_flat: "SteamAPI_ISteamGameServer_SetGameTags",
                    params: [{ paramname: "pchGameTags", paramtype: "const char *" }],
                    returntype: "void"
                },
                {
                    methodname: "SetGameData",
                    methodname_flat: "SteamAPI_ISteamGameServer_SetGameData",
                    params: [{ paramname: "pchGameData", paramtype: "const char *" }],
                    returntype: "void"
                },
                {
                    methodname: "SetRegion",
                    methodname_flat: "SteamAPI_ISteamGameServer_SetRegion",
                    params: [{ paramname: "pszRegion", paramtype: "const char *" }],
                    returntype: "void"
                },
                {
                    methodname: "SetAdvertiseServerActive",
                    methodname_flat: "SteamAPI_ISteamGameServer_SetAdvertiseServerActive",
                    params: [{ paramname: "bActive", paramtype: "bool" }],
                    returntype: "void"
                },
                {
                    methodname: "GetAuthSessionTicket",
                    methodname_flat: "SteamAPI_ISteamGameServer_GetAuthSessionTicket",
                    params: [
                        { paramname: "pTicket", paramtype: "void *" },
                        { paramname: "cbMaxTicket", paramtype: "int" },
                        { paramname: "pcbTicket", paramtype: "uint32 *" },
                    ],
                    returntype: "HAuthTicket"
                },
                {
                    methodname: "BeginAuthSession",
                    methodname_flat: "SteamAPI_ISteamGameServer_BeginAuthSession",
                    params: [
                        { paramname: "pAuthTicket", paramtype: "const void *" },
                        { paramname: "cbAuthTicket", paramtype: "int" },
                        { paramname: "steamID", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                    ],
                    returntype: "EBeginAuthSessionResult"
                },
                {
                    methodname: "EndAuthSession",
                    methodname_flat: "SteamAPI_ISteamGameServer_EndAuthSession",
                    params: [{ paramname: "steamID", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "void"
                },
                {
                    methodname: "CancelAuthTicket",
                    methodname_flat: "SteamAPI_ISteamGameServer_CancelAuthTicket",
                    params: [{ paramname: "hAuthTicket", paramtype: "HAuthTicket" }],
                    returntype: "void"
                },
                {
                    methodname: "UserHasLicenseForApp",
                    methodname_flat: "SteamAPI_ISteamGameServer_UserHasLicenseForApp",
                    params: [
                        { paramname: "steamID", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "appID", paramtype: "AppId_t" },
                    ],
                    returntype: "EUserHasLicenseForAppResult"
                },
                {
                    methodname: "RequestUserGroupStatus",
                    methodname_flat: "SteamAPI_ISteamGameServer_RequestUserGroupStatus",
                    params: [
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "steamIDGroup", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetGameplayStats",
                    methodname_flat: "SteamAPI_ISteamGameServer_GetGameplayStats",
                    params: [],
                    returntype: "void"
                },
                {
                    callresult: "GSReputation_t",
                    methodname: "GetServerReputation",
                    methodname_flat: "SteamAPI_ISteamGameServer_GetServerReputation",
                    params: [],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetPublicIP",
                    methodname_flat: "SteamAPI_ISteamGameServer_GetPublicIP",
                    params: [],
                    returntype: "SteamIPAddress_t"
                },
                {
                    methodname: "HandleIncomingPacket",
                    methodname_flat: "SteamAPI_ISteamGameServer_HandleIncomingPacket",
                    params: [
                        { paramname: "pData", paramtype: "const void *" },
                        { paramname: "cbData", paramtype: "int" },
                        { paramname: "srcIP", paramtype: "uint32" },
                        { paramname: "srcPort", paramtype: "uint16" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetNextOutgoingPacket",
                    methodname_flat: "SteamAPI_ISteamGameServer_GetNextOutgoingPacket",
                    params: [
                        { paramname: "pOut", paramtype: "void *" },
                        { paramname: "cbMaxOut", paramtype: "int" },
                        { paramname: "pNetAdr", paramtype: "uint32 *" },
                        { paramname: "pPort", paramtype: "uint16 *" },
                    ],
                    returntype: "int"
                },
                {
                    callresult: "AssociateWithClanResult_t",
                    methodname: "AssociateWithClan",
                    methodname_flat: "SteamAPI_ISteamGameServer_AssociateWithClan",
                    params: [{ paramname: "steamIDClan", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    callresult: "ComputeNewPlayerCompatibilityResult_t",
                    methodname: "ComputeNewPlayerCompatibility",
                    methodname_flat: "SteamAPI_ISteamGameServer_ComputeNewPlayerCompatibility",
                    params: [{ paramname: "steamIDNewPlayer", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "SendUserConnectAndAuthenticate_DEPRECATED",
                    methodname_flat: "SteamAPI_ISteamGameServer_SendUserConnectAndAuthenticate_DEPRECATED",
                    params: [
                        { paramname: "unIPClient", paramtype: "uint32" },
                        { paramname: "pvAuthBlob", paramtype: "const void *" },
                        { paramname: "cubAuthBlobSize", paramtype: "uint32" },
                        { paramname: "pSteamIDUser", paramtype: "CSteamID *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "CreateUnauthenticatedUserConnection",
                    methodname_flat: "SteamAPI_ISteamGameServer_CreateUnauthenticatedUserConnection",
                    params: [],
                    returntype: "CSteamID",
                    returntype_flat: "uint64_steamid"
                },
                {
                    methodname: "SendUserDisconnect_DEPRECATED",
                    methodname_flat: "SteamAPI_ISteamGameServer_SendUserDisconnect_DEPRECATED",
                    params: [{ paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "void"
                },
                {
                    methodname: "BUpdateUserData",
                    methodname_flat: "SteamAPI_ISteamGameServer_BUpdateUserData",
                    params: [
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchPlayerName", paramtype: "const char *" },
                        { paramname: "uScore", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
            ],
            version_string: "SteamGameServer014"
        },
        {
            accessors: [
                {
                    kind: "gameserver",
                    name: "SteamGameServerStats",
                    name_flat: "SteamAPI_SteamGameServerStats_v001"
                },
            ],
            classname: "ISteamGameServerStats",
            fields: [],
            methods: [
                {
                    callresult: "GSStatsReceived_t",
                    methodname: "RequestUserStats",
                    methodname_flat: "SteamAPI_ISteamGameServerStats_RequestUserStats",
                    params: [{ paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "SteamAPICall_t"
                },
                {
                    methodname: "GetUserStat",
                    methodname_flat: "SteamAPI_ISteamGameServerStats_GetUserStatInt32",
                    params: [
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "pData", paramtype: "int32 *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetUserStat",
                    methodname_flat: "SteamAPI_ISteamGameServerStats_GetUserStatFloat",
                    params: [
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "pData", paramtype: "float *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetUserAchievement",
                    methodname_flat: "SteamAPI_ISteamGameServerStats_GetUserAchievement",
                    params: [
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "pbAchieved", paramtype: "bool *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetUserStat",
                    methodname_flat: "SteamAPI_ISteamGameServerStats_SetUserStatInt32",
                    params: [
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "nData", paramtype: "int32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetUserStat",
                    methodname_flat: "SteamAPI_ISteamGameServerStats_SetUserStatFloat",
                    params: [
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "fData", paramtype: "float" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "UpdateUserAvgRateStat",
                    methodname_flat: "SteamAPI_ISteamGameServerStats_UpdateUserAvgRateStat",
                    params: [
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchName", paramtype: "const char *" },
                        { paramname: "flCountThisSession", paramtype: "float" },
                        { paramname: "dSessionLength", paramtype: "double" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "SetUserAchievement",
                    methodname_flat: "SteamAPI_ISteamGameServerStats_SetUserAchievement",
                    params: [
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchName", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "ClearUserAchievement",
                    methodname_flat: "SteamAPI_ISteamGameServerStats_ClearUserAchievement",
                    params: [
                        { paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" },
                        { paramname: "pchName", paramtype: "const char *" },
                    ],
                    returntype: "bool"
                },
                {
                    callresult: "GSStatsStored_t",
                    methodname: "StoreUserStats",
                    methodname_flat: "SteamAPI_ISteamGameServerStats_StoreUserStats",
                    params: [{ paramname: "steamIDUser", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "SteamAPICall_t"
                },
            ],
            version_string: "SteamGameServerStats001"
        },
        {
            classname: "ISteamNetworkingFakeUDPPort",
            fields: [],
            methods: [
                {
                    methodname: "DestroyFakeUDPPort",
                    methodname_flat: "SteamAPI_ISteamNetworkingFakeUDPPort_DestroyFakeUDPPort",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "SendMessageToFakeIP",
                    methodname_flat: "SteamAPI_ISteamNetworkingFakeUDPPort_SendMessageToFakeIP",
                    params: [
                        { paramname: "remoteAddress", paramtype: "const SteamNetworkingIPAddr &" },
                        { paramname: "pData", paramtype: "const void *" },
                        { paramname: "cbData", paramtype: "uint32" },
                        { paramname: "nSendFlags", paramtype: "int" },
                    ],
                    returntype: "EResult"
                },
                {
                    methodname: "ReceiveMessages",
                    methodname_flat: "SteamAPI_ISteamNetworkingFakeUDPPort_ReceiveMessages",
                    params: [
                        { paramname: "ppOutMessages", paramtype: "SteamNetworkingMessage_t **" },
                        { paramname: "nMaxMessages", paramtype: "int" },
                    ],
                    returntype: "int"
                },
                {
                    methodname: "ScheduleCleanup",
                    methodname_flat: "SteamAPI_ISteamNetworkingFakeUDPPort_ScheduleCleanup",
                    params: [{ paramname: "remoteAddress", paramtype: "const SteamNetworkingIPAddr &" }],
                    returntype: "void"
                },
            ]
        },
    ],
    structs: [
        {
            fields: [
                { fieldname: "m_rgubIPv6", fieldtype: "uint8 [16]" },
                { fieldname: "m_eType", fieldtype: "ESteamIPType" },
            ],
            methods: [
                {
                    methodname: "IsSet",
                    methodname_flat: "SteamAPI_SteamIPAddress_t_IsSet",
                    params: [],
                    returntype: "bool"
                },
            ],
            struct: "SteamIPAddress_t"
        },
        {
            fields: [
                { fieldname: "m_gameID", fieldtype: "CGameID" },
                { fieldname: "m_unGameIP", fieldtype: "uint32" },
                { fieldname: "m_usGamePort", fieldtype: "uint16" },
                { fieldname: "m_usQueryPort", fieldtype: "uint16" },
                { fieldname: "m_steamIDLobby", fieldtype: "CSteamID" },
            ],
            struct: "FriendGameInfo_t"
        },
        {
            fields: [
                { fieldname: "m_szKey", fieldtype: "char [256]" },
                { fieldname: "m_szValue", fieldtype: "char [256]" },
            ],
            methods: [
                {
                    methodname: "Construct",
                    methodname_flat: "SteamAPI_MatchMakingKeyValuePair_t_Construct",
                    params: [],
                    returntype: "void"
                },
            ],
            struct: "MatchMakingKeyValuePair_t"
        },
        {
            fields: [
                {
                    fieldname: "m_usConnectionPort",
                    fieldtype: "uint16",
                    private: true
                },
                {
                    fieldname: "m_usQueryPort",
                    fieldtype: "uint16",
                    private: true
                },
                {
                    fieldname: "m_unIP",
                    fieldtype: "uint32",
                    private: true
                },
            ],
            methods: [
                {
                    methodname: "Construct",
                    methodname_flat: "SteamAPI_servernetadr_t_Construct",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "Init",
                    methodname_flat: "SteamAPI_servernetadr_t_Init",
                    params: [
                        { paramname: "ip", paramtype: "unsigned int" },
                        { paramname: "usQueryPort", paramtype: "uint16" },
                        { paramname: "usConnectionPort", paramtype: "uint16" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "GetQueryPort",
                    methodname_flat: "SteamAPI_servernetadr_t_GetQueryPort",
                    params: [],
                    returntype: "uint16"
                },
                {
                    methodname: "SetQueryPort",
                    methodname_flat: "SteamAPI_servernetadr_t_SetQueryPort",
                    params: [{ paramname: "usPort", paramtype: "uint16" }],
                    returntype: "void"
                },
                {
                    methodname: "GetConnectionPort",
                    methodname_flat: "SteamAPI_servernetadr_t_GetConnectionPort",
                    params: [],
                    returntype: "uint16"
                },
                {
                    methodname: "SetConnectionPort",
                    methodname_flat: "SteamAPI_servernetadr_t_SetConnectionPort",
                    params: [{ paramname: "usPort", paramtype: "uint16" }],
                    returntype: "void"
                },
                {
                    methodname: "GetIP",
                    methodname_flat: "SteamAPI_servernetadr_t_GetIP",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "SetIP",
                    methodname_flat: "SteamAPI_servernetadr_t_SetIP",
                    params: [{ paramname: "unIP", paramtype: "uint32" }],
                    returntype: "void"
                },
                {
                    methodname: "GetConnectionAddressString",
                    methodname_flat: "SteamAPI_servernetadr_t_GetConnectionAddressString",
                    params: [],
                    returntype: "const char *"
                },
                {
                    methodname: "GetQueryAddressString",
                    methodname_flat: "SteamAPI_servernetadr_t_GetQueryAddressString",
                    params: [],
                    returntype: "const char *"
                },
                {
                    methodname: "operator<",
                    methodname_flat: "SteamAPI_servernetadr_t_IsLessThan",
                    params: [{ paramname: "netadr", paramtype: "const servernetadr_t &" }],
                    returntype: "bool"
                },
                {
                    methodname: "operator=",
                    methodname_flat: "SteamAPI_servernetadr_t_Assign",
                    params: [{ paramname: "that", paramtype: "const servernetadr_t &" }],
                    returntype: "void"
                },
            ],
            struct: "servernetadr_t"
        },
        {
            fields: [
                { fieldname: "m_NetAdr", fieldtype: "servernetadr_t" },
                { fieldname: "m_nPing", fieldtype: "int" },
                { fieldname: "m_bHadSuccessfulResponse", fieldtype: "bool" },
                { fieldname: "m_bDoNotRefresh", fieldtype: "bool" },
                { fieldname: "m_szGameDir", fieldtype: "char [32]" },
                { fieldname: "m_szMap", fieldtype: "char [32]" },
                { fieldname: "m_szGameDescription", fieldtype: "char [64]" },
                { fieldname: "m_nAppID", fieldtype: "uint32" },
                { fieldname: "m_nPlayers", fieldtype: "int" },
                { fieldname: "m_nMaxPlayers", fieldtype: "int" },
                { fieldname: "m_nBotPlayers", fieldtype: "int" },
                { fieldname: "m_bPassword", fieldtype: "bool" },
                { fieldname: "m_bSecure", fieldtype: "bool" },
                { fieldname: "m_ulTimeLastPlayed", fieldtype: "uint32" },
                { fieldname: "m_nServerVersion", fieldtype: "int" },
                {
                    fieldname: "m_szServerName",
                    fieldtype: "char [64]",
                    private: true
                },
                { fieldname: "m_szGameTags", fieldtype: "char [128]" },
                { fieldname: "m_steamID", fieldtype: "CSteamID" },
            ],
            methods: [
                {
                    methodname: "Construct",
                    methodname_flat: "SteamAPI_gameserveritem_t_Construct",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "GetName",
                    methodname_flat: "SteamAPI_gameserveritem_t_GetName",
                    params: [],
                    returntype: "const char *"
                },
                {
                    methodname: "SetName",
                    methodname_flat: "SteamAPI_gameserveritem_t_SetName",
                    params: [{ paramname: "pName", paramtype: "const char *" }],
                    returntype: "void"
                },
            ],
            struct: "gameserveritem_t"
        },
        {
            fields: [
                { fieldname: "m_eType", fieldtype: "ESteamPartyBeaconLocationType" },
                { fieldname: "m_ulLocationID", fieldtype: "uint64" },
            ],
            struct: "SteamPartyBeaconLocation_t"
        },
        {
            fields: [
                { fieldname: "m_ppStrings", fieldtype: "const char **" },
                { fieldname: "m_nNumStrings", fieldtype: "int32" },
            ],
            struct: "SteamParamStringArray_t"
        },
        {
            fields: [
                { fieldname: "m_steamIDUser", fieldtype: "CSteamID" },
                { fieldname: "m_nGlobalRank", fieldtype: "int32" },
                { fieldname: "m_nScore", fieldtype: "int32" },
                { fieldname: "m_cDetails", fieldtype: "int32" },
                { fieldname: "m_hUGC", fieldtype: "UGCHandle_t" },
            ],
            struct: "LeaderboardEntry_t"
        },
        {
            fields: [
                { fieldname: "m_bConnectionActive", fieldtype: "uint8" },
                { fieldname: "m_bConnecting", fieldtype: "uint8" },
                { fieldname: "m_eP2PSessionError", fieldtype: "uint8" },
                { fieldname: "m_bUsingRelay", fieldtype: "uint8" },
                { fieldname: "m_nBytesQueuedForSend", fieldtype: "int32" },
                { fieldname: "m_nPacketsQueuedForSend", fieldtype: "int32" },
                { fieldname: "m_nRemoteIP", fieldtype: "uint32" },
                { fieldname: "m_nRemotePort", fieldtype: "uint16" },
            ],
            struct: "P2PSessionState_t"
        },
        {
            fields: [
                { fieldname: "eMode", fieldtype: "EInputSourceMode" },
                { fieldname: "x", fieldtype: "float" },
                { fieldname: "y", fieldtype: "float" },
                { fieldname: "bActive", fieldtype: "bool" },
            ],
            struct: "InputAnalogActionData_t"
        },
        {
            fields: [
                { fieldname: "bState", fieldtype: "bool" },
                { fieldname: "bActive", fieldtype: "bool" },
            ],
            struct: "InputDigitalActionData_t"
        },
        {
            fields: [
                { fieldname: "rotQuatX", fieldtype: "float" },
                { fieldname: "rotQuatY", fieldtype: "float" },
                { fieldname: "rotQuatZ", fieldtype: "float" },
                { fieldname: "rotQuatW", fieldtype: "float" },
                { fieldname: "posAccelX", fieldtype: "float" },
                { fieldname: "posAccelY", fieldtype: "float" },
                { fieldname: "posAccelZ", fieldtype: "float" },
                { fieldname: "rotVelX", fieldtype: "float" },
                { fieldname: "rotVelY", fieldtype: "float" },
                { fieldname: "rotVelZ", fieldtype: "float" },
            ],
            struct: "InputMotionData_t"
        },
        {
            fields: [
                { fieldname: "controllerHandle", fieldtype: "InputHandle_t" },
                { fieldname: "eEventType", fieldtype: "ESteamInputActionEventType" },
                { fieldname: "analogAction", fieldtype: "SteamInputActionEvent_t::AnalogAction_t" },
            ],
            struct: "SteamInputActionEvent_t"
        },
        {
            fields: [
                { fieldname: "m_nPublishedFileId", fieldtype: "PublishedFileId_t" },
                { fieldname: "m_eResult", fieldtype: "EResult" },
                { fieldname: "m_eFileType", fieldtype: "EWorkshopFileType" },
                { fieldname: "m_nCreatorAppID", fieldtype: "AppId_t" },
                { fieldname: "m_nConsumerAppID", fieldtype: "AppId_t" },
                { fieldname: "m_rgchTitle", fieldtype: "char [129]" },
                { fieldname: "m_rgchDescription", fieldtype: "char [8000]" },
                { fieldname: "m_ulSteamIDOwner", fieldtype: "uint64" },
                { fieldname: "m_rtimeCreated", fieldtype: "uint32" },
                { fieldname: "m_rtimeUpdated", fieldtype: "uint32" },
                { fieldname: "m_rtimeAddedToUserList", fieldtype: "uint32" },
                { fieldname: "m_eVisibility", fieldtype: "ERemoteStoragePublishedFileVisibility" },
                { fieldname: "m_bBanned", fieldtype: "bool" },
                { fieldname: "m_bAcceptedForUse", fieldtype: "bool" },
                { fieldname: "m_bTagsTruncated", fieldtype: "bool" },
                { fieldname: "m_rgchTags", fieldtype: "char [1025]" },
                { fieldname: "m_hFile", fieldtype: "UGCHandle_t" },
                { fieldname: "m_hPreviewFile", fieldtype: "UGCHandle_t" },
                { fieldname: "m_pchFileName", fieldtype: "char [260]" },
                { fieldname: "m_nFileSize", fieldtype: "int32" },
                { fieldname: "m_nPreviewFileSize", fieldtype: "int32" },
                { fieldname: "m_rgchURL", fieldtype: "char [256]" },
                { fieldname: "m_unVotesUp", fieldtype: "uint32" },
                { fieldname: "m_unVotesDown", fieldtype: "uint32" },
                { fieldname: "m_flScore", fieldtype: "float" },
                { fieldname: "m_unNumChildren", fieldtype: "uint32" },
            ],
            struct: "SteamUGCDetails_t"
        },
        {
            fields: [
                { fieldname: "m_itemId", fieldtype: "SteamItemInstanceID_t" },
                { fieldname: "m_iDefinition", fieldtype: "SteamItemDef_t" },
                { fieldname: "m_unQuantity", fieldtype: "uint16" },
                { fieldname: "m_unFlags", fieldtype: "uint16" },
            ],
            struct: "SteamItemDetails_t"
        },
        {
            consts: [{ constname: "k_cchMaxString", consttype: "int", constval: "48" }],
            fields: [
                { fieldname: "m_ipv6", fieldtype: "uint8 [16]" },
                { fieldname: "m_port", fieldtype: "uint16" },
            ],
            methods: [
                {
                    methodname: "Clear",
                    methodname_flat: "SteamAPI_SteamNetworkingIPAddr_Clear",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "IsIPv6AllZeros",
                    methodname_flat: "SteamAPI_SteamNetworkingIPAddr_IsIPv6AllZeros",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "SetIPv6",
                    methodname_flat: "SteamAPI_SteamNetworkingIPAddr_SetIPv6",
                    params: [
                        { paramname: "ipv6", paramtype: "const uint8 *" },
                        { paramname: "nPort", paramtype: "uint16" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SetIPv4",
                    methodname_flat: "SteamAPI_SteamNetworkingIPAddr_SetIPv4",
                    params: [
                        { paramname: "nIP", paramtype: "uint32" },
                        { paramname: "nPort", paramtype: "uint16" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "IsIPv4",
                    methodname_flat: "SteamAPI_SteamNetworkingIPAddr_IsIPv4",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "GetIPv4",
                    methodname_flat: "SteamAPI_SteamNetworkingIPAddr_GetIPv4",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "SetIPv6LocalHost",
                    methodname_flat: "SteamAPI_SteamNetworkingIPAddr_SetIPv6LocalHost",
                    params: [{ paramname: "nPort", paramtype: "uint16" }],
                    returntype: "void"
                },
                {
                    methodname: "IsLocalHost",
                    methodname_flat: "SteamAPI_SteamNetworkingIPAddr_IsLocalHost",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "ToString",
                    methodname_flat: "SteamAPI_SteamNetworkingIPAddr_ToString",
                    params: [
                        { paramname: "buf", paramtype: "char *" },
                        { paramname: "cbBuf", paramtype: "uint32" },
                        { paramname: "bWithPort", paramtype: "bool" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "ParseString",
                    methodname_flat: "SteamAPI_SteamNetworkingIPAddr_ParseString",
                    params: [{ paramname: "pszStr", paramtype: "const char *" }],
                    returntype: "bool"
                },
                {
                    methodname: "operator==",
                    methodname_flat: "SteamAPI_SteamNetworkingIPAddr_IsEqualTo",
                    params: [{ paramname: "x", paramtype: "const SteamNetworkingIPAddr &" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetFakeIPType",
                    methodname_flat: "SteamAPI_SteamNetworkingIPAddr_GetFakeIPType",
                    params: [],
                    returntype: "ESteamNetworkingFakeIPType"
                },
                {
                    methodname: "IsFakeIP",
                    methodname_flat: "SteamAPI_SteamNetworkingIPAddr_IsFakeIP",
                    params: [],
                    returntype: "bool"
                },
            ],
            struct: "SteamNetworkingIPAddr"
        },
        {
            consts: [
                { constname: "k_cchMaxString", consttype: "int", constval: "128" },
                { constname: "k_cchMaxGenericString", consttype: "int", constval: "32" },
                { constname: "k_cchMaxXboxPairwiseID", consttype: "int", constval: "33" },
                { constname: "k_cbMaxGenericBytes", consttype: "int", constval: "32" },
            ],
            fields: [
                { fieldname: "m_eType", fieldtype: "ESteamNetworkingIdentityType" },
                { fieldname: "m_cbSize", fieldtype: "int" },
                { fieldname: "m_szUnknownRawString", fieldtype: "char [128]" },
            ],
            methods: [
                {
                    methodname: "Clear",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_Clear",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "IsInvalid",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_IsInvalid",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "SetSteamID",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_SetSteamID",
                    params: [{ paramname: "steamID", paramtype: "CSteamID", paramtype_flat: "uint64_steamid" }],
                    returntype: "void"
                },
                {
                    methodname: "GetSteamID",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_GetSteamID",
                    params: [],
                    returntype: "CSteamID",
                    returntype_flat: "uint64_steamid"
                },
                {
                    methodname: "SetSteamID64",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_SetSteamID64",
                    params: [{ paramname: "steamID", paramtype: "uint64" }],
                    returntype: "void"
                },
                {
                    methodname: "GetSteamID64",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_GetSteamID64",
                    params: [],
                    returntype: "uint64"
                },
                {
                    methodname: "SetXboxPairwiseID",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_SetXboxPairwiseID",
                    params: [{ paramname: "pszString", paramtype: "const char *" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetXboxPairwiseID",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_GetXboxPairwiseID",
                    params: [],
                    returntype: "const char *"
                },
                {
                    methodname: "SetPSNID",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_SetPSNID",
                    params: [{ paramname: "id", paramtype: "uint64" }],
                    returntype: "void"
                },
                {
                    methodname: "GetPSNID",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_GetPSNID",
                    params: [],
                    returntype: "uint64"
                },
                {
                    methodname: "SetStadiaID",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_SetStadiaID",
                    params: [{ paramname: "id", paramtype: "uint64" }],
                    returntype: "void"
                },
                {
                    methodname: "GetStadiaID",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_GetStadiaID",
                    params: [],
                    returntype: "uint64"
                },
                {
                    methodname: "SetIPAddr",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_SetIPAddr",
                    params: [{ paramname: "addr", paramtype: "const SteamNetworkingIPAddr &" }],
                    returntype: "void"
                },
                {
                    methodname: "GetIPAddr",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_GetIPAddr",
                    params: [],
                    returntype: "const SteamNetworkingIPAddr *"
                },
                {
                    methodname: "SetIPv4Addr",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_SetIPv4Addr",
                    params: [
                        { paramname: "nIPv4", paramtype: "uint32" },
                        { paramname: "nPort", paramtype: "uint16" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "GetIPv4",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_GetIPv4",
                    params: [],
                    returntype: "uint32"
                },
                {
                    methodname: "GetFakeIPType",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_GetFakeIPType",
                    params: [],
                    returntype: "ESteamNetworkingFakeIPType"
                },
                {
                    methodname: "IsFakeIP",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_IsFakeIP",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "SetLocalHost",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_SetLocalHost",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "IsLocalHost",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_IsLocalHost",
                    params: [],
                    returntype: "bool"
                },
                {
                    methodname: "SetGenericString",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_SetGenericString",
                    params: [{ paramname: "pszString", paramtype: "const char *" }],
                    returntype: "bool"
                },
                {
                    methodname: "GetGenericString",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_GetGenericString",
                    params: [],
                    returntype: "const char *"
                },
                {
                    methodname: "SetGenericBytes",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_SetGenericBytes",
                    params: [
                        { paramname: "data", paramtype: "const void *" },
                        { paramname: "cbLen", paramtype: "uint32" },
                    ],
                    returntype: "bool"
                },
                {
                    methodname: "GetGenericBytes",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_GetGenericBytes",
                    params: [{ paramname: "cbLen", paramtype: "int &" }],
                    returntype: "const uint8 *"
                },
                {
                    methodname: "operator==",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_IsEqualTo",
                    params: [{ paramname: "x", paramtype: "const SteamNetworkingIdentity &" }],
                    returntype: "bool"
                },
                {
                    methodname: "ToString",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_ToString",
                    params: [
                        { paramname: "buf", paramtype: "char *" },
                        { paramname: "cbBuf", paramtype: "uint32" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "ParseString",
                    methodname_flat: "SteamAPI_SteamNetworkingIdentity_ParseString",
                    params: [{ paramname: "pszStr", paramtype: "const char *" }],
                    returntype: "bool"
                },
            ],
            struct: "SteamNetworkingIdentity"
        },
        {
            fields: [
                { fieldname: "m_identityRemote", fieldtype: "SteamNetworkingIdentity" },
                { fieldname: "m_nUserData", fieldtype: "int64" },
                { fieldname: "m_hListenSocket", fieldtype: "HSteamListenSocket" },
                { fieldname: "m_addrRemote", fieldtype: "SteamNetworkingIPAddr" },
                { fieldname: "m__pad1", fieldtype: "uint16" },
                { fieldname: "m_idPOPRemote", fieldtype: "SteamNetworkingPOPID" },
                { fieldname: "m_idPOPRelay", fieldtype: "SteamNetworkingPOPID" },
                { fieldname: "m_eState", fieldtype: "ESteamNetworkingConnectionState" },
                { fieldname: "m_eEndReason", fieldtype: "int" },
                { fieldname: "m_szEndDebug", fieldtype: "char [128]" },
                { fieldname: "m_szConnectionDescription", fieldtype: "char [128]" },
                { fieldname: "m_nFlags", fieldtype: "int" },
                { fieldname: "reserved", fieldtype: "uint32 [63]" },
            ],
            struct: "SteamNetConnectionInfo_t"
        },
        {
            fields: [
                { fieldname: "m_eState", fieldtype: "ESteamNetworkingConnectionState" },
                { fieldname: "m_nPing", fieldtype: "int" },
                { fieldname: "m_flConnectionQualityLocal", fieldtype: "float" },
                { fieldname: "m_flConnectionQualityRemote", fieldtype: "float" },
                { fieldname: "m_flOutPacketsPerSec", fieldtype: "float" },
                { fieldname: "m_flOutBytesPerSec", fieldtype: "float" },
                { fieldname: "m_flInPacketsPerSec", fieldtype: "float" },
                { fieldname: "m_flInBytesPerSec", fieldtype: "float" },
                { fieldname: "m_nSendRateBytesPerSecond", fieldtype: "int" },
                { fieldname: "m_cbPendingUnreliable", fieldtype: "int" },
                { fieldname: "m_cbPendingReliable", fieldtype: "int" },
                { fieldname: "m_cbSentUnackedReliable", fieldtype: "int" },
                { fieldname: "m_usecQueueTime", fieldtype: "SteamNetworkingMicroseconds" },
                { fieldname: "reserved", fieldtype: "uint32 [16]" },
            ],
            struct: "SteamNetConnectionRealTimeStatus_t"
        },
        {
            fields: [
                { fieldname: "m_cbPendingUnreliable", fieldtype: "int" },
                { fieldname: "m_cbPendingReliable", fieldtype: "int" },
                { fieldname: "m_cbSentUnackedReliable", fieldtype: "int" },
                { fieldname: "_reservePad1", fieldtype: "int" },
                { fieldname: "m_usecQueueTime", fieldtype: "SteamNetworkingMicroseconds" },
                { fieldname: "reserved", fieldtype: "uint32 [10]" },
            ],
            struct: "SteamNetConnectionRealTimeLaneStatus_t"
        },
        {
            fields: [
                { fieldname: "m_pData", fieldtype: "void *" },
                { fieldname: "m_cbSize", fieldtype: "int" },
                { fieldname: "m_conn", fieldtype: "HSteamNetConnection" },
                { fieldname: "m_identityPeer", fieldtype: "SteamNetworkingIdentity" },
                { fieldname: "m_nConnUserData", fieldtype: "int64" },
                { fieldname: "m_usecTimeReceived", fieldtype: "SteamNetworkingMicroseconds" },
                { fieldname: "m_nMessageNumber", fieldtype: "int64" },
                { fieldname: "m_pfnFreeData", fieldtype: "void (*)(SteamNetworkingMessage_t *)" },
                { fieldname: "m_pfnRelease", fieldtype: "void (*)(SteamNetworkingMessage_t *)" },
                { fieldname: "m_nChannel", fieldtype: "int" },
                { fieldname: "m_nFlags", fieldtype: "int" },
                { fieldname: "m_nUserData", fieldtype: "int64" },
                { fieldname: "m_idxLane", fieldtype: "uint16" },
                { fieldname: "_pad1__", fieldtype: "uint16" },
            ],
            methods: [
                {
                    methodname: "Release",
                    methodname_flat: "SteamAPI_SteamNetworkingMessage_t_Release",
                    params: [],
                    returntype: "void"
                },
            ],
            struct: "SteamNetworkingMessage_t"
        },
        {
            fields: [{ fieldname: "m_data", fieldtype: "uint8 [512]" }],
            struct: "SteamNetworkPingLocation_t"
        },
        {
            fields: [
                { fieldname: "m_eValue", fieldtype: "ESteamNetworkingConfigValue" },
                { fieldname: "m_eDataType", fieldtype: "ESteamNetworkingConfigDataType" },
                { fieldname: "m_int64", fieldtype: "int64_t" },
            ],
            methods: [
                {
                    methodname: "SetInt32",
                    methodname_flat: "SteamAPI_SteamNetworkingConfigValue_t_SetInt32",
                    params: [
                        { paramname: "eVal", paramtype: "ESteamNetworkingConfigValue" },
                        { paramname: "data", paramtype: "int32_t" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SetInt64",
                    methodname_flat: "SteamAPI_SteamNetworkingConfigValue_t_SetInt64",
                    params: [
                        { paramname: "eVal", paramtype: "ESteamNetworkingConfigValue" },
                        { paramname: "data", paramtype: "int64_t" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SetFloat",
                    methodname_flat: "SteamAPI_SteamNetworkingConfigValue_t_SetFloat",
                    params: [
                        { paramname: "eVal", paramtype: "ESteamNetworkingConfigValue" },
                        { paramname: "data", paramtype: "float" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SetPtr",
                    methodname_flat: "SteamAPI_SteamNetworkingConfigValue_t_SetPtr",
                    params: [
                        { paramname: "eVal", paramtype: "ESteamNetworkingConfigValue" },
                        { paramname: "data", paramtype: "void *" },
                    ],
                    returntype: "void"
                },
                {
                    methodname: "SetString",
                    methodname_flat: "SteamAPI_SteamNetworkingConfigValue_t_SetString",
                    params: [
                        { paramname: "eVal", paramtype: "ESteamNetworkingConfigValue" },
                        { paramname: "data", paramtype: "const char *" },
                    ],
                    returntype: "void"
                },
            ],
            struct: "SteamNetworkingConfigValue_t"
        },
        {
            fields: [
                { fieldname: "m_cbSize", fieldtype: "int" },
                { fieldname: "m_data", fieldtype: "char [128]" },
            ],
            methods: [
                {
                    methodname: "Clear",
                    methodname_flat: "SteamAPI_SteamDatagramHostedAddress_Clear",
                    params: [],
                    returntype: "void"
                },
                {
                    methodname: "GetPopID",
                    methodname_flat: "SteamAPI_SteamDatagramHostedAddress_GetPopID",
                    params: [],
                    returntype: "SteamNetworkingPOPID"
                },
                {
                    methodname: "SetDevAddress",
                    methodname_flat: "SteamAPI_SteamDatagramHostedAddress_SetDevAddress",
                    params: [
                        { paramname: "nIP", paramtype: "uint32" },
                        { paramname: "nPort", paramtype: "uint16" },
                        { paramname: "popid", paramtype: "SteamNetworkingPOPID" },
                    ],
                    returntype: "void"
                },
            ],
            struct: "SteamDatagramHostedAddress"
        },
        {
            fields: [
                { fieldname: "m_identity", fieldtype: "SteamNetworkingIdentity" },
                { fieldname: "m_routing", fieldtype: "SteamDatagramHostedAddress" },
                { fieldname: "m_nAppID", fieldtype: "AppId_t" },
                { fieldname: "m_rtime", fieldtype: "RTime32" },
                { fieldname: "m_cbAppData", fieldtype: "int" },
                { fieldname: "m_appData", fieldtype: "char [2048]" },
            ],
            struct: "SteamDatagramGameCoordinatorServerLogin"
        },
    ],
    typedefs: [
        { typedef: "uint8", type: "unsigned char" },
        { typedef: "int8", type: "signed char" },
        { typedef: "int16", type: "short" },
        { typedef: "uint16", type: "unsigned short" },
        { typedef: "int32", type: "int" },
        { typedef: "uint32", type: "unsigned int" },
        { typedef: "int64", type: "long long" },
        { typedef: "uint64", type: "unsigned long long" },
        { typedef: "lint64", type: "long long" },
        { typedef: "ulint64", type: "unsigned long long" },
        { typedef: "intp", type: "long long" },
        { typedef: "uintp", type: "unsigned long long" },
        { typedef: "AppId_t", type: "unsigned int" },
        { typedef: "DepotId_t", type: "unsigned int" },
        { typedef: "RTime32", type: "unsigned int" },
        { typedef: "SteamAPICall_t", type: "unsigned long long" },
        { typedef: "AccountID_t", type: "unsigned int" },
        { typedef: "PartyBeaconID_t", type: "unsigned long long" },
        { typedef: "HAuthTicket", type: "unsigned int" },
        { typedef: "PFNPreMinidumpCallback", type: "void (*)(void *)" },
        { typedef: "HSteamPipe", type: "int" },
        { typedef: "HSteamUser", type: "int" },
        { typedef: "FriendsGroupID_t", type: "short" },
        { typedef: "HServerListRequest", type: "void *" },
        { typedef: "HServerQuery", type: "int" },
        { typedef: "UGCHandle_t", type: "unsigned long long" },
        { typedef: "PublishedFileUpdateHandle_t", type: "unsigned long long" },
        { typedef: "PublishedFileId_t", type: "unsigned long long" },
        { typedef: "UGCFileWriteStreamHandle_t", type: "unsigned long long" },
        { typedef: "SteamLeaderboard_t", type: "unsigned long long" },
        { typedef: "SteamLeaderboardEntries_t", type: "unsigned long long" },
        { typedef: "SNetSocket_t", type: "unsigned int" },
        { typedef: "SNetListenSocket_t", type: "unsigned int" },
        { typedef: "ScreenshotHandle", type: "unsigned int" },
        { typedef: "HTTPRequestHandle", type: "unsigned int" },
        { typedef: "HTTPCookieContainerHandle", type: "unsigned int" },
        { typedef: "InputHandle_t", type: "unsigned long long" },
        { typedef: "InputActionSetHandle_t", type: "unsigned long long" },
        { typedef: "InputDigitalActionHandle_t", type: "unsigned long long" },
        { typedef: "InputAnalogActionHandle_t", type: "unsigned long long" },
        { typedef: "SteamInputActionEventCallbackPointer", type: "void (*)(SteamInputActionEvent_t *)" },
        { typedef: "ControllerHandle_t", type: "unsigned long long" },
        { typedef: "ControllerActionSetHandle_t", type: "unsigned long long" },
        { typedef: "ControllerDigitalActionHandle_t", type: "unsigned long long" },
        { typedef: "ControllerAnalogActionHandle_t", type: "unsigned long long" },
        { typedef: "UGCQueryHandle_t", type: "unsigned long long" },
        { typedef: "UGCUpdateHandle_t", type: "unsigned long long" },
        { typedef: "HHTMLBrowser", type: "unsigned int" },
        { typedef: "SteamItemInstanceID_t", type: "unsigned long long" },
        { typedef: "SteamItemDef_t", type: "int" },
        { typedef: "SteamInventoryResult_t", type: "int" },
        { typedef: "SteamInventoryUpdateHandle_t", type: "unsigned long long" },
        { typedef: "RemotePlaySessionID_t", type: "unsigned int" },
        { typedef: "FnSteamNetConnectionStatusChanged", type: "void (*)(SteamNetConnectionStatusChangedCallback_t *)" },
        { typedef: "FnSteamNetAuthenticationStatusChanged", type: "void (*)(SteamNetAuthenticationStatus_t *)" },
        { typedef: "FnSteamRelayNetworkStatusChanged", type: "void (*)(SteamRelayNetworkStatus_t *)" },
        {
            typedef: "FnSteamNetworkingMessagesSessionRequest",
            type: "void (*)(SteamNetworkingMessagesSessionRequest_t *)"
        },
        { typedef: "FnSteamNetworkingMessagesSessionFailed", type: "void (*)(SteamNetworkingMessagesSessionFailed_t *)" },
        { typedef: "FnSteamNetworkingFakeIPResult", type: "void (*)(SteamNetworkingFakeIPResult_t *)" },
        { typedef: "HSteamNetConnection", type: "unsigned int" },
        { typedef: "HSteamListenSocket", type: "unsigned int" },
        { typedef: "HSteamNetPollGroup", type: "unsigned int" },
        { typedef: "SteamNetworkingErrMsg", type: "char [1024]" },
        { typedef: "SteamNetworkingPOPID", type: "unsigned int" },
        { typedef: "SteamNetworkingMicroseconds", type: "long long" },
        {
            typedef: "FSteamNetworkingSocketsDebugOutput",
            type: "void (*)(ESteamNetworkingSocketsDebugOutputType, const char *)"
        },
    ]
};
