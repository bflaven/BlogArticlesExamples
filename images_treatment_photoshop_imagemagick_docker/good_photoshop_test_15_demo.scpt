FasdUAS 1.101.10   ��   ��    k             l      ��  ��    R L
Made for ZNBC (https://znbc.com) to process images in batch with photoshop
     � 	 	 � 
 M a d e   f o r   Z N B C   ( h t t p s : / / z n b c . c o m )   t o   p r o c e s s   i m a g e s   i n   b a t c h   w i t h   p h o t o s h o p 
   
  
 l      ��  ��   1+
 Description: Description: You have to create a script in Photoshop then all the files presented in the source folder will be proceeded with actions you have made in the script and be saved in the destination folder. For the moment the photoshop script executed is "resize_60_percent_solar_apply" from a directory named "bruno". 

 ! CAUTION !
 - Name for script and directory in Photoshop are case-sensitive.
 - Do not register a save action and close action in your Photoshop script.

 Version: 1.1
 Author: Bruno Flaven
 Author URI: http://flaven.fr
      �  V 
   D e s c r i p t i o n :   D e s c r i p t i o n :   Y o u   h a v e   t o   c r e a t e   a   s c r i p t   i n   P h o t o s h o p   t h e n   a l l   t h e   f i l e s   p r e s e n t e d   i n   t h e   s o u r c e   f o l d e r   w i l l   b e   p r o c e e d e d   w i t h   a c t i o n s   y o u   h a v e   m a d e   i n   t h e   s c r i p t   a n d   b e   s a v e d   i n   t h e   d e s t i n a t i o n   f o l d e r .   F o r   t h e   m o m e n t   t h e   p h o t o s h o p   s c r i p t   e x e c u t e d   i s   " r e s i z e _ 6 0 _ p e r c e n t _ s o l a r _ a p p l y "   f r o m   a   d i r e c t o r y   n a m e d   " b r u n o " .   
 
   !   C A U T I O N   ! 
   -   N a m e   f o r   s c r i p t   a n d   d i r e c t o r y   i n   P h o t o s h o p   a r e   c a s e - s e n s i t i v e . 
   -   D o   n o t   r e g i s t e r   a   s a v e   a c t i o n   a n d   c l o s e   a c t i o n   i n   y o u r   P h o t o s h o p   s c r i p t . 
 
   V e r s i o n :   1 . 1 
   A u t h o r :   B r u n o   F l a v e n 
   A u t h o r   U R I :   h t t p : / / f l a v e n . f r 
        l     ��������  ��  ��        l     ��  ��    W Q This chooses the master folder where all your sub folders with images are stored     �   �   T h i s   c h o o s e s   t h e   m a s t e r   f o l d e r   w h e r e   a l l   y o u r   s u b   f o l d e r s   w i t h   i m a g e s   a r e   s t o r e d      l     ����  I    ��  
�� .sysottosnull���     TEXT  m        �   X C h o o s e   y o u r   s o u r c e   F o l d e r   f o r   t h i s   b a t c h   j o b  �� ��
�� 
VOIC  m       �    V i c t o r i a��  ��  ��       !   l    "���� " r     # $ # I   ������
�� .sysostflalis    ��� null��  ��   $ o      ���� 0 
raw_folder  ��  ��   !  % & % l     ��������  ��  ��   &  ' ( ' l     �� ) *��   ) R L This chooses the destination folder where all your result images are stored    * � + + �   T h i s   c h o o s e s   t h e   d e s t i n a t i o n   f o l d e r   w h e r e   a l l   y o u r   r e s u l t   i m a g e s   a r e   s t o r e d (  , - , l    .���� . I   �� / 0
�� .sysottosnull���     TEXT / m     1 1 � 2 2 l C h o o s e   y o u r   d e s t i n a t i o n   F o l d e r   f o r   t h e   p r o c e s s e d   f i l e s 0 �� 3��
�� 
VOIC 3 m     4 4 � 5 5  V i c t o r i a��  ��  ��   -  6 7 6 l    8���� 8 r     9 : 9 I   ������
�� .sysostflalis    ��� null��  ��   : o      ���� 0 live_folder  ��  ��   7  ; < ; l     ��������  ��  ��   <  = > = l     ��������  ��  ��   >  ? @ ? l     ��������  ��  ��   @  A B A l     ��������  ��  ��   B  C D C l     �� E F��   E C = This checks when the batch started and stores the date value    F � G G z   T h i s   c h e c k s   w h e n   t h e   b a t c h   s t a r t e d   a n d   s t o r e s   t h e   d a t e   v a l u e D  H I H l    ) J���� J r     ) K L K n     ' M N M 1   % '��
�� 
time N l    % O���� O I    %������
�� .misccurdldt    ��� null��  ��  ��  ��   L o      ���� 0 	starttime 	startTime��  ��   I  P Q P l     ��������  ��  ��   Q  R S R l     ��������  ��  ��   S  T U T l      �� V W��   V   for actions     W � X X    f o r   a c t i o n s   U  Y Z Y l     �� [ \��   [   This the file counter    \ � ] ] ,   T h i s   t h e   f i l e   c o u n t e r Z  ^ _ ^ l  * - `���� ` r   * - a b a m   * +����   b o      ���� 0 filecounter fileCounter��  ��   _  c d c l     ��������  ��  ��   d  e f e l  . 8 g���� g O   . 8 h i h r   2 7 j k j n  2 5 l m l 2  3 5��
�� 
file m o   2 3���� 0 
raw_folder   k o      ���� 0 itemlist itemList i m   . / n n�                                                                                  MACS  alis    8  MacaBubu                       BD ����
Finder.app                                                     ����            ����  
 cu             CoreServices  )/:System:Library:CoreServices:Finder.app/    
 F i n d e r . a p p    M a c a B u b u  &System/Library/CoreServices/Finder.app  / ��  ��  ��   f  o p o l     ��������  ��  ��   p  q r q l  9 R s���� s Y   9 R t�� u v�� t r   H M w x w [   H K y z y o   H I���� 0 filecounter fileCounter z m   I J����  x o      ���� 0 filecounter fileCounter�� 0 j   u m   < =����  v l  = C {���� { n   = C | } | m   > B��
�� 
nmbr } o   = >���� 0 itemlist itemList��  ��  ��  ��  ��   r  ~  ~ l     ��������  ��  ��     � � � l      �� � ���   �   for fileCounter     � � � � "   f o r   f i l e C o u n t e r   �  � � � l     ��������  ��  ��   �  � � � l     ��������  ��  ��   �  � � � l      �� � ���   �   for fileCounter     � � � � "   f o r   f i l e C o u n t e r   �  � � � l     �� � ���   � 3 -source and destination folders for the images    � � � � Z s o u r c e   a n d   d e s t i n a t i o n   f o l d e r s   f o r   t h e   i m a g e s �  � � � l  S e ����� � O   S e � � � r   W d � � � e   W ` � � n   W ` � � � 2   ] _��
�� 
file � 4   W ]�� �
�� 
cfol � o   [ \���� 0 
raw_folder   � o      ���� 0 imageset imageSet � m   S T � ��                                                                                  MACS  alis    8  MacaBubu                       BD ����
Finder.app                                                     ����            ����  
 cu             CoreServices  )/:System:Library:CoreServices:Finder.app/    
 F i n d e r . a p p    M a c a B u b u  &System/Library/CoreServices/Finder.app  / ��  ��  ��   �  � � � l     ��������  ��  ��   �  ��� � l  f ����� � O   f � � � k   j � �  � � � Y   j � ��� � ��� � k   z � � �  � � � l  z z�� � ���   � ) # coerce Finder style path to string    � � � � F   c o e r c e   F i n d e r   s t y l e   p a t h   t o   s t r i n g �  � � � r   z � � � � c   z � � � � l  z � ����� � n   z � � � � 4   } ��� �
�� 
cobj � o   � ����� 0 i   � o   z }���� 0 imageset imageSet��  ��   � m   � ���
�� 
TEXT � o      ���� 0 
currentimg 
currentImg �  ��� � O   � � � � � k   � � � �  � � � l  � ��� � ���   �   no dialog box    � � � �    n o   d i a l o g   b o x �  � � � r   � � � � � m   � ���
�� e050Nevr � 1   � ���
�� 
AUiL �  � � � I  � ���~�}
� .miscactvnull��� ��� null�~  �}   �  � � � I  � ��| ��{
�| .PsCSodocnull���    **** � 4   � ��z �
�z 
alis � o   � ��y�y 0 
currentimg 
currentImg�{   �  � � � r   � � � � � 1   � ��x
�x 
pADc � o      �w�w 0 
currentimg 
currentImg �  � � � l  � ��v � ��v   �   tell current document    � � � � ,   t e l l   c u r r e n t   d o c u m e n t �  � � � l  � ��u�t�s�u  �t  �s   �  � � � l  � ��r�q�p�r  �q  �p   �  � � � l  � ��o � ��o   � M G choose your action in the folder, caution the naming is case sensitive    � � � � �   c h o o s e   y o u r   a c t i o n   i n   t h e   f o l d e r ,   c a u t i o n   t h e   n a m i n g   i s   c a s e   s e n s i t i v e �  � � � l  � ��n�m�l�n  �m  �l   �  � � � l   � ��k � ��k   � � � 

			The script name is "resize_50_percent_demo" from the directory "demo" 
			from the Actions tabs inside Adobe Photoshop CS6

			    � � � �
   
 
 	 	 	 T h e   s c r i p t   n a m e   i s   " r e s i z e _ 5 0 _ p e r c e n t _ d e m o "   f r o m   t h e   d i r e c t o r y   " d e m o "   
 	 	 	 f r o m   t h e   A c t i o n s   t a b s   i n s i d e   A d o b e   P h o t o s h o p   C S 6 
 
 	 	 	 �  � � � I  � ��j � �
�j .miscDoAcnull���    utxt � m   � � � � � � � 2 r e s i z e _ t o _ 6 0 _ p e r c e n t _ g o o d � �i ��h
�i 
from � m   � � � � � � �  d e m o _ 1�h   �  � � � l  � ��g�f�e�g  �f  �e   �  � � � l  � ��d�c�b�d  �c  �b   �  � � � l  � ��a � ��a   � 8 2 close the file in photoshop after the job is done    � � � � d   c l o s e   t h e   f i l e   i n   p h o t o s h o p   a f t e r   t h e   j o b   i s   d o n e �  � � � I  � ��` � �
�` .PsCSclosnull���    docu � 2   � ��_
�_ 
docu � �^ ��]
�^ 
savo � m   � ��\
�\ boovfals�]   �  ��[ � l  � ��Z�Y�X�Z  �Y  �X  �[   � m   � � � ��                                                                                  8BIM  alis    ~  MacaBubu                       BD ����Adobe Photoshop CS6.app                                        ����            ����  
 cu             Adobe Photoshop CS6   ;/:Applications:Adobe Photoshop CS6:Adobe Photoshop CS6.app/   0  A d o b e   P h o t o s h o p   C S 6 . a p p    M a c a B u b u  8Applications/Adobe Photoshop CS6/Adobe Photoshop CS6.app  / ��  ��  �� 0 i   � m   m n�W�W  � l  n u �V�U  I  n u�T�S
�T .corecnte****       **** o   n q�R�R 0 imageset imageSet�S  �V  �U  ��   �  l  � ��Q�P�O�Q  �P  �O    l   � ��N�N     for actions     �    f o r   a c t i o n s   	
	 r   � � n   � � 1   � ��M
�M 
time l  � ��L�K I  � ��J�I�H
�J .misccurdldt    ��� null�I  �H  �L  �K   o      �G�G 0 endtime endTime
  l  � ��F�E�D�F  �E  �D    l   � ��C�C     end     � 
   e n d    I  ��B
�B .sysottosnull���     TEXT b   � � b   � � b   � �  b   � �!"! m   � �## �$$ � T h e   j o b   i s   d o n e ,   p l e a s e   h a v e   a   l o o k   t o   t h e   d e s t i n a t i o n   f o l d e r .   T h e   o p e r a t i o n   t o o k    " \   � �%&% o   � ��A�A 0 endtime endTime& o   � ��@�@ 0 	starttime 	startTime  m   � �'' �(( B   s e c o n d s .   T h e   d i r e c t o r y   c o n t a i n s   o   � ��?�? 0 filecounter fileCounter m   � �)) �**    f i l e s . �>+�=
�> 
VOIC+ m   � �,, �--  V i c t o r i a�=   ./. l �<�;�:�<  �;  �:  / 010 l  �923�9  2   Dialog box if needed    3 �44 ,   D i a l o g   b o x   i f   n e e d e d  1 565 l �878�8  7 � � display dialog "nThe operation took  " & endTime - startTime & " seconds" & ".nThe directory contains " & fileCounter & " files.n"   8 �99   d i s p l a y   d i a l o g   " n T h e   o p e r a t i o n   t o o k     "   &   e n d T i m e   -   s t a r t T i m e   &   "   s e c o n d s "   &   " . n T h e   d i r e c t o r y   c o n t a i n s   "   &   f i l e C o u n t e r   &   "   f i l e s . n "6 :�7: l �6�5�4�6  �5  �4  �7   � m   f g;;�                                                                                  MACS  alis    8  MacaBubu                       BD ����
Finder.app                                                     ����            ����  
 cu             CoreServices  )/:System:Library:CoreServices:Finder.app/    
 F i n d e r . a p p    M a c a B u b u  &System/Library/CoreServices/Finder.app  / ��  ��  ��  ��       �3<=�3  < �2
�2 .aevtoappnull  �   � ****= �1>�0�/?@�.
�1 .aevtoappnull  �   � ****> k    AA  BB   CC  ,DD  6EE  HFF  ^GG  eHH  qII  �JJ  ��-�-  �0  �/  ? �,�+�, 0 j  �+ 0 i  @ * �* �)�(�' 1 4�&�%�$�#�" n�!� ������� ������� �� ������#'),
�* 
VOIC
�) .sysottosnull���     TEXT
�( .sysostflalis    ��� null�' 0 
raw_folder  �& 0 live_folder  
�% .misccurdldt    ��� null
�$ 
time�# 0 	starttime 	startTime�" 0 filecounter fileCounter
�! 
file�  0 itemlist itemList
� 
nmbr
� 
cfol� 0 imageset imageSet
� .corecnte****       ****
� 
cobj
� 
TEXT� 0 
currentimg 
currentImg
� e050Nevr
� 
AUiL
� .miscactvnull��� ��� null
� 
alis
� .PsCSodocnull���    ****
� 
pADc
� 
from
� .miscDoAcnull���    utxt
� 
docu
� 
savo
� .PsCSclosnull���    docu� 0 endtime endTime�.���l O*j E�O���l O*j E�O*j 	�,E�OjE�O� ��-E�UO k�a ,Ekh  �kE�[OY��O� *a �/�-EE` UO� � pk_ j kh _ a �/a &E` Oa  Fa *a ,FO*j O*a _ /j O*a ,E` Oa a a  l !O*a "-a #fl $OPU[OY��O*j 	�,E` %Oa &_ %�%a '%�%a (%�a )l OPUascr  ��ޭ