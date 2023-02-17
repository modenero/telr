#!/bin/sh

################################################################################
#
# WELCOME --- BEUNVNUE --- ???
#
# TELR.IO SETUP FOR GENERAL BYTES (GB) CRYPTO APPLICATION SERVER (CAS)
#
# For more information, please visit:
# https://docs.modenero.com/downloads
#
# Copyright (c) 2020 Modenero Corp. All rights reserved.
#
# Ascii artwork was provided by: http://www.patorjk.com
#
################################################################################

# Initialize script (running) status.
# IS_RUNNING=1

# Initialize script (running) status.
WAITING=0

# Set version.
VERSION="20.1.1"

##
# Display Welcome
#
display_welcome () {
    clear

    echo ""
    echo "          ████████╗███████╗██╗     ██████╗ "
    echo "          ╚══██╔══╝██╔════╝██║     ██╔══██╗"
    echo "             ██║   █████╗  ██║     ██████╔╝"
    echo "             ██║   ██╔══╝  ██║     ██╔══██╗"
    echo "             ██║   ███████╗███████╗██║  ██║"
    echo "             ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═╝ v$VERSION"
    echo ""
    echo "  ██████╗ ██████╗ ███╗   ██╗ ██████╗██╗███████╗██████╗  ██████╗ ███████╗"
    echo " ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝██╔══██╗██╔════╝ ██╔════╝"
    echo " ██║     ██║   ██║██╔██╗ ██║██║     ██║█████╗  ██████╔╝██║  ███╗█████╗  "
    echo " ██║     ██║   ██║██║╚██╗██║██║     ██║██╔══╝  ██╔══██╗██║   ██║██╔══╝  "
    echo " ╚██████╗╚██████╔╝██║ ╚████║╚██████╗██║███████╗██║  ██║╚██████╔╝███████╗"
    echo "  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝"
    echo "                 brought to you by Modenero — New Money Beginnings™     "
    echo ""
    echo "Please press <enter> to continue..."

    read WAITING

    clear

    echo ""
    echo "    Copyright (c) 2020. Modenero Corp. All rights reserved."
    echo ""
    echo "    MODENERO CORP"
    echo "    Decentralized Finance (DeFi) Solutions Provider"
    echo ""
    echo "    Since 2015, Modenero has provided the digital currency community "
    echo "    with bespoke, enterprise solutions; supported by a team "
    echo "    meticulously crafted for delivering the most fantastic dreams "
    echo "    imagined by the industry's most cutting-edge visionaries."
    echo ""
    echo "    Please visit us at https://modenero.com"
    echo ""
    echo "Please press <enter> to continue..."

    read WAITING
}

##
# Display System Overview
#
display_system_overview () {
    clear

    echo ""
    echo " Telr Concierge v$VERSION"
    echo "  ____            _                 "
    echo " / ___| _   _ ___| |_ ___ _ __ ___  "
    echo " \\___ \\| | | / __| __/ _ \\ '_ \` _ \\ "
    echo "  ___) | |_| \\__ \\ ||  __/ | | | | |"
    echo " |____/ \\__, |___/\\__\\___|_| |_| |_|"
    echo "        |___/                       "
    echo " ___________________________________"
    echo ""
    echo "    (✓) System Type    : Linux (Ubuntu 16.10)"
    echo ""
    echo "    (x) Crypto Service : General Bytes"
    echo "                         Crypto Application Server (CAS)"
    echo "                         (your CAS is out-of-date by 82 days)"
    echo ""
    echo "    (✓) Available RAM  : 4.0 GiB"
    echo ""
    echo "    (✓) Available Disk : 28.3 GiB"
    echo ""
    echo "Please press <enter> to continue..."

    read WAITING
}

##
# Remote Services Manager
#
remote_services_manager () {
    WORD1="ROCKET"
    WORD2="LAUNCH"
    WORD3="MOON"

    clear

    echo ""
    echo " Telr Concierge v$VERSION"
    echo "  ____                      _       "
    echo " |  _ \\ ___ _ __ ___   ___ | |_ ___ "
    echo " | |_) / _ \\ '_ \` _ \\ / _ \\| __/ _ \\"
    echo " |  _ <  __/ | | | | | (_) | ||  __/"
    echo " |_| \\_\\___|_| |_| |_|\\___/ \\__\\___|"
    echo " ___________________________________"
    echo ""
    echo "    Remote services make Telr setups super easy!"
    echo ""
    echo "    To connect, simply type \`/telr remote\` from any Slack channel."
    echo "    After the window opens, enter the words shown below:"
    echo ""
    echo "        ➤  Word #1 is [ $WORD1 ]"
    echo ""
    echo "        ➤  Word #2 is [ $WORD2 ]"
    echo ""
    echo "        ➤  Word #3 is [ $WORD3 ]"
    echo ""
    echo "Now waiting for remote connection..."
    echo "You may press <enter> to CANCEL at anytime."

    read WAITING
}

##
# Install Telr Concierge
#
install_telr () {
    clear

    echo ""
    echo " Telr Concierge v$VERSION"
    echo "  ___           _        _ _ "
    echo " |_ _|_ __  ___| |_ __ _| | |"
    echo "  | || '_ \\/ __| __/ _\` | | |"
    echo "  | || | | \\__ \\ || (_| | | |"
    echo " |___|_| |_|___/\\__\\__,_|_|_|"
    echo " ____________________________"
    echo ""
    echo "    No more worries! Telr Concierge has you covered!"
    echo ""
    echo "    Receive on-demand, remote assistance when you need it,"
    echo "    from our global network of highly-trained System Operators."
    echo ""
    echo "    To learn more, please visit https://telr.io"
    echo ""
    echo "Type \`install\` to continue installation, or press <enter> to CANCEL?"

    read WAITING
}

##
# Choose Your Language
#
choose_i18n () {
    clear

    echo ""
    echo " Telr Concierge v$VERSION"
    echo "  _                                             "
    echo " | |    __ _ _ __   __ _ _   _  __ _  __ _  ___ "
    echo " | |   / _\` | '_ \\ / _\` | | | |/ _\` |/ _\` |/ _ \\"
    echo " | |__| (_| | | | | (_| | |_| | (_| | (_| |  __/"
    echo " |_____\\__,_|_| |_|\\__, |\\__,_|\\__,_|\\__, |\\___|"
    echo "                   |___/             |___/      "
    echo " _______________________________________________"
    echo ""
    echo "    (1) English               (6) Italian"
    echo ""
    echo "    (2) Chinese (Simp)        (7) Japanese"
    echo ""
    echo "    (3) Chinese (Trad)        (8) Korean"
    echo ""
    echo "    (4) Czech                 (9) Spanish"
    echo ""
    echo "    (5) French"
    echo ""
    echo "Please enter your preferred language, or press <enter> to CANCEL?"

    read WAITING
}

##
# About this Software
#
display_about_software () {
    clear

    echo ""
    echo " Telr Concierge v$VERSION"
    echo "     _    _                 _   "
    echo "    / \\  | |__   ___  _   _| |_ "
    echo "   / _ \\ | '_ \\ / _ \\| | | | __|"
    echo "  / ___ \\| |_) | (_) | |_| | |_ "
    echo " /_/   \\_\\_.__/ \\___/ \\__,_|\\__|"
    echo " _______________________________"
    echo ""
    echo "    Telr Concierge is a specialized virtual assistant for"
    echo "    Crypto Service Providers (CSPs)."
    echo ""
    echo "    To learn more, please visit https://telr.io"
    echo ""
    echo "Please press <enter> to continue..."

    read WAITING
}

##
# Display Goodbye
#
say_goodbye () {
    clear

    echo ""
    echo " Telr Concierge v$VERSION"
    echo "   ____                 _ _                "
    echo "  / ___| ___   ___   __| | |__  _   _  ___ "
    echo " | |  _ / _ \\ / _ \\ / _\` | '_ \\| | | |/ _ \\"
    echo " | |_| | (_) | (_) | (_| | |_) | |_| |  __/"
    echo "  \\____|\\___/ \\___/ \\__,_|_.__/ \\__, |\\___|"
    echo "                                |___/      "
    echo " __________________________________________"
    echo ""
    echo "    Thanks for visiting!"
    echo ""
    echo "    Telr Concierge offers your organization unlimited access"
    echo "    to the MOST trusted and comprehensive suite of business solutions"
    echo "    desired by Crypto Service Providers (CSPs)."
    echo ""
    echo "    Please visit us at https://telr.io"
    echo ""
}

# Display welcome message.
display_welcome

while :
# while [ $IS_RUNNING -eq 1 ]
do
    clear

    echo ""
    echo " Telr Concierge v$VERSION"
    echo "  __  __       _         __  __                  "
    echo " |  \\/  | __ _(_)_ __   |  \\/  | ___ _ __  _   _ "
    echo " | |\\/| |/ _\` | | '_ \\  | |\\/| |/ _ \\ '_ \\| | | |"
    echo " | |  | | (_| | | | | | | |  | |  __/ | | | |_| |"
    echo " |_|  |_|\\__,_|_|_| |_| |_|  |_|\\___|_| |_|\\__,_|"
    echo " ________________________________________________"
    echo ""
    echo "    1) Manage remote services"
    echo ""
    echo "    2) Install Telr onto this system"
    # echo "    2) Un-install Telr from this system"
    echo ""
    echo "    3) Display a system overview"
    echo ""
    echo "    4) Choose a 语言 · ภาษา · 언어 · لغة"
    echo ""
    echo "    5) About this software"
    echo ""
    echo "Please select an option, or press <enter> to QUIT?"

    read MENU_SELECTION

    if [ -z $MENU_SELECTION ]
    then
        say_goodbye

        # Come out of the program with status 0
        exit 0
    fi

    case $MENU_SELECTION in
       1)
           remote_services_manager
           ;;
       2)
           install_telr
           ;;
       3)
           display_system_overview
           ;;
       4)
           choose_i18n
           ;;
       5)
           display_about_software
           ;;
       *)
           say_goodbye

           # Come out of the program with status 0
           exit 0
           ;;
    esac
done

# Come out of the program with status 0
exit 0





echo ""
echo "This is an automated setup for upgrading your"
echo ""
echo "    General Bytes — Crypto Application Server (CAS)"
echo ""
echo "with the full suite of Telr's Decentralized Finance (DeFi) services"
echo "for professional crypto service providers."
echo ""

echo ""
echo "Here are the MANUAL INSTALLATION instructions:"
echo ""
echo "    STEP 1: Change to extensions folder"
echo "            cd /batm/app/master/extensions/"
echo ""
echo "    STEP 2: Backup the current extensions package"
echo "            mv batm_server_extensions_extra.jar batm_server_extensions_extra.jar.$(date +%Y%m%d)"
echo ""
echo "    STEP 3: Stop ALL CAS services"
echo "            /batm/batm-manage stop all"
echo ""
echo "    STEP 4: Download the new extension"
echo "            wget https://ipfs.io/ipfs/QmY65wr6DAB5TFFUtrEBShhAC87wBdCcYUyVC41is82CwK/batm_server_extensions_extra.jar"
echo ""
echo "    STEP 5: Restart ALL CAS services"
echo "            /batm/batm-manage start all"
echo ""
echo "    STEP 6: Select 'Telr.io Cash Wallet' as the Hot Wallet Buy"
echo ""

echo ""
echo "-------------------------------------------------------------------------"
echo ""

echo ""
echo "Please type (or paste) your GB License Key here to confirm:"

read GB_LICENSE_KEY

# case "$GB_LICENSE_KEY" in
#    "apple") echo "Apple pie is quite tasty."
#    ;;
#    "banana") echo "I like banana nut bread."
#    ;;
#    "kiwi") echo "New Zealand is famous for kiwi."
#    ;;
#    *)
#       echo "`basename ${0}`:usage: [-f file] | [-d directory]"
#       exit 1 # Command to come out of the program with status 1
#       ;;
# esac
# echo ""

while [ -z "$GB_LICENSE_KEY" ]
do
    echo ""
    echo "Please type (or paste) your GB License Key here to confirm:"

    read GB_LICENSE_KEY
done

echo ""
echo "Thank you. [ $GB_LICENSE_KEY ] is now being upgraded..."
echo ""
